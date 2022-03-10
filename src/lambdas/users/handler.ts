/**
 * @copyright Aplicaciones Creativas
 * @description Handler que procesa lambdas para informacion del usuario en cognito 
 * @author Mario - Luis Miguel Alamilla - Adrian Valentin
 * @creationDate 8 de Abril del 2021
 */
import { cognito_login, cognito_register, get_group_by_user, list_user, new_password_required, user_confirm_code } from "../../common/config/cognito";
import { Groups } from "../../common/config/constantes";
import { is_valid_auth } from "../../common/config/is-valid-auth";
import { ErrorResponseStatus } from "../../common/helpers/erros_response_status";
import { get_body_validations } from "../../common/schemas/request_validations";
import { login_validate, update_password_validate, validate_register_user, validate_user_code_corfirmation } from "./schemas";
import { validate_group_by_user } from "./schemas/user_by_group";
import { ResponseManager } from '../../common/helpers/response-manager';
import { CustomError } from '../../common/exceptions/custom-error';
import { DictionaryErrors } from "../../common/helpers/errorConstants";
import { RequestParameters } from '../../common/models/request-parameters';
import { FunctionManager } from '../../common/helpers/function-manager';
import { UserService } from '../../services/user.service';

const userService = new UserService();

/**
 * @description Lambda que procesa el codigo de confirmacion de un usuario de cognito 
 * @param event Recibe el queryparams, body y pathParameters
 * @param context 
 * @param callback 
 * @returns 
 */
export async function user_confirmation_code(event, context, callback) {
    let data;
    try {
        data = await get_body_validations(validate_user_code_corfirmation, event.body);
        return await user_confirm_code(data.code.toString(), data.username);
    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        }
    }

}

// TODO
export async function group_by_user(event, context, callback) {
    let data;
    try {
        is_valid_auth({ event, type_auth: Groups.ADMIN });
        data = await get_body_validations(validate_group_by_user, event.body);
        return await get_group_by_user(data.username);
    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        } else if (err instanceof ErrorResponseStatus) {
            return err;
        }
    }

}

// TODO
export async function login(event, context, callback) {
    let data;
    try {
        data = await get_body_validations(login_validate, event.body);
        return await cognito_login(data.username, data.password);
    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        }
    }

}

// TODO
export async function register_user(event, context, callback) {
    let data;
    try {
        is_valid_auth({ event, type_auth: Groups.ADMIN });
        data = await get_body_validations(validate_register_user, event.body);
        return await cognito_register(data.username, data.password, data.email, data.name);
    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        } else if (err instanceof ErrorResponseStatus) {
            return err;
        }
    }

}

// TODO
export async function changue_password_required(event, context, callback) {
    let data;
    try {
        data = await get_body_validations(update_password_validate, event.body);
        const sesion = event.headers.session.trim();
        return await new_password_required('NEW_PASSWORD_REQUIRED', data.new_password, data.username, sesion);

    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        }
    }

}

// TODO
export async function obtener(event, context, callback) {
    // let data;
    try {
        is_valid_auth({ event, type_auth: Groups.ADMIN });
        const token_paginate = event.queryStringParameters?.PaginationToken;
        // data = await get_body_validations(validate_register_user, event.body);
        console.log(event)
        return await list_user(token_paginate);
    } catch (err) {
        if (err instanceof Array) {
            return new ErrorResponseStatus(err, 400);
        } else if (err instanceof Error) {
            return new ErrorResponseStatus({ error: err.name, message: err.message }, 400);
        } else if (err instanceof ErrorResponseStatus) {
            return err;
        }
    }

}

export async function all(event, context, callback) {
    try {
        const response = await userService.all();
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}

export async function getById(event, context, callback) {
    try {
        const req: RequestParameters = FunctionManager.getRequestParameters(event);
        const response = await userService.getById(req.pathParameters.id);
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}