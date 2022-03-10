interface policyDocumentType {
    Version:string,
    Statement: Array<Object>
}
const generatePolicy = function(principalId, effect, resource) {
    const authResponse = {
        principalId: principalId,
        policyDocument: {}
    };

    if (effect && resource) {
        let policyDocument: policyDocumentType = {
            Version: '2012-10-17',
            Statement: []
        };

        const statementOne = {
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: resource
        };

        policyDocument.Statement.push(statementOne)
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
};

export const auth =  (event, context, callback, type_user="admin") => {
    let token;
    let list_groups: Array<string> = []

    if(event.requestContext.authorizer.jwt.claims !== undefined){
        token = event.requestContext.authorizer.jwt.claims;
        list_groups = token['cognito:groups'];
    }else{
        callback('Unauthorized');
    }

    if(list_groups.includes(type_user)){
        callback(null, generatePolicy('user', 'Allow', event.methodArn));
    }else{
        callback(null, generatePolicy('user', 'Deny', event.methodArn));
    }

};