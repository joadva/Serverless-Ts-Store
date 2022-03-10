import {
    AdminListGroupsForUserCommand,
    ChangePasswordCommand,
    CognitoIdentityProviderClient, ConfirmSignUpCommand,
    InitiateAuthCommand, ListUsersCommand, RespondToAuthChallengeCommand,
    SignUpCommand
} from "@aws-sdk/client-cognito-identity-provider";

import {createHmac} from 'crypto'

const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
const clientSecret = process.env.CLIENT_SECRED_AWS_COGNITO;
const ClientId = process.env.CLIENTID_AWS_COGNITO;
const UserPoolId = process.env.USER_POOL_ID;


const hashSecret = (clientSecret, username, clientId) => createHmac('SHA256', clientSecret)
    .update(username + clientId)
    .digest('base64');


export const cognito_login = async (Username, Password) => {
    const SecretHash = hashSecret(clientSecret, Username, ClientId);
    const command2 = new InitiateAuthCommand({AuthFlow:"USER_PASSWORD_AUTH", ClientId, AuthParameters:{USERNAME:Username, PASSWORD:Password, SECRET_HASH:SecretHash}});
    return  await client.send(command2);
}



export const cognito_register = async (Username, Password, email, name) => {
    // crear usuario
    const SecretHash = hashSecret(clientSecret, Username, ClientId);
    let command = new SignUpCommand({ClientId,SecretHash, Password, Username,
        UserAttributes:[
            {Name:"email",Value:email},
            {Name:"name",Value:name},
        ]});

    return await client.send(command);

}

export const update_password = async (PreviousPassword, ProposedPassword, AccessToken) => {
    const command = new ChangePasswordCommand({PreviousPassword, ProposedPassword, AccessToken});
    return await client.send(command);
}


export const new_password_required = async (ChallengeName, NEW_PASSWORD, USERNAME, Session) => {
    const SecretHash = hashSecret(clientSecret, USERNAME, ClientId);
    const command = new RespondToAuthChallengeCommand(
        {ChallengeName,
            ChallengeResponses:{NEW_PASSWORD, USERNAME, SECRET_HASH:SecretHash}, Session, ClientId});
    return await client.send(command);
}


export const user_confirm_code = (confirmation_code, username)=>{
    const SecretHash = hashSecret(clientSecret, username, ClientId);
    const command = new ConfirmSignUpCommand({
        ClientId,
        ConfirmationCode:confirmation_code,
        Username:username,
        SecretHash
    });
    return client.send(command);
}


export const list_user = async (PaginationToken?)=>{
    const command = new ListUsersCommand({UserPoolId, Limit:100, PaginationToken});
    return  await client.send(command);
}

export const get_group_by_user = async (Username)=>{
    const command = new AdminListGroupsForUserCommand({UserPoolId, Username});
    return await client.send(command);
}



