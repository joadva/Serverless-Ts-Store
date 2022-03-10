/**
 * @copyright Aplicaciones Creativas
 * @description Handler que procesa lambdas para informacion del usuario en cognito
 * @author Mario - Luis Miguel Alamilla - Adrian Valentin
 * @creationDate 8 de Marzo del 2022
 */

import { FunctionManager } from "../../common/helpers/function-manager";
import { ResponseManager } from "../../common/helpers/response-manager";
import { RequestParameters } from "../../common/models/request-parameters";
import { get_body_validations } from "../../common/schemas";
import { Loan } from "../../models/loan.model";
import { LoanService } from "../../services/loan.service";
import { validate_register_loan } from "./schema/loand.schema";


const loanService = new LoanService();

export async function all(event, context, callback) {
    try {
        console.log("nose");
        const response = await loanService.all();
        console.log("depsues del service");
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}

export async function getById(event, context, callback) {
    try {
        const req: RequestParameters = FunctionManager.getRequestParameters(event);
        const response = await loanService.getById(req.pathParameters.id);
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}

export async function register(event, context, callback) {
    try {
        const data = await get_body_validations<Loan>(validate_register_loan, event.body);
        console.log(data);
        const response = await loanService.save(data);
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}


export async function update(event, context, callback) {
    try {
        const data = await FunctionManager.getRequestParameters(event);
        const response = await loanService.update(data.pathParameters.id,data.body);
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}

export async function deleteLoan(event, context, callback) {
    try {
        const data = await FunctionManager.getRequestParameters(event);
        const response = await loanService.deleteLogic(data.pathParameters.id);
        return ResponseManager.handleResponse(response);
    } catch (error) {
        // throw CustomError.createCustomError(DictionaryErrors.BODY_INVALID)
        return ResponseManager.detectError(error);
    }
}