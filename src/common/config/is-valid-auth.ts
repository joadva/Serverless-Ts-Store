import { ErrorResponseStatus } from "../helpers/erros_response_status";

interface AuthorizersInput{
    event:any,
    type_auth:string
}

export const is_valid_auth = (input: AuthorizersInput) => {
    let token;
    let list_groups: Array<string> = []

    if(input.event.requestContext.authorizer.jwt.claims !== undefined){
        token = input.event.requestContext.authorizer.jwt.claims;
        list_groups = token['cognito:groups'];
    }else{                
        throw new ErrorResponseStatus({auth:"Token not provided"}, 401);
    }

    if(list_groups.includes(input.type_auth)){
       
    }else{
        throw new ErrorResponseStatus({user:"Deny", methodArn:input.event.methodArn}, 401);
        
    }
}