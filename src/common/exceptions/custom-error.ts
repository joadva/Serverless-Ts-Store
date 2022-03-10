import { DictionaryErrors } from '../helpers/errorConstants';
/**
 * @copyright Palace Resorts
 * @description Clase que genera un error customizado para las excepciones
 * @author Luis Miguel Alamilla Hernandez
 * @creationDate 09 de Septiembre del 2021
 */

export class CustomError extends Error {
    code: number;
    httpStatusCode: number;
    description: string;
    error: boolean;
    internalErrors: CustomError[];
    properties?: PropertyError;

    constructor(description: string, message?: string, code?: number, httpStatusCode?: number, properties?: PropertyError) {
        super();
        this.code = code || DictionaryErrors.UNEXPECTED_ERROR.code;
        this.httpStatusCode = httpStatusCode || DictionaryErrors.UNEXPECTED_ERROR.httpStatusCode;
        this.message = message || DictionaryErrors.UNEXPECTED_ERROR.message;
        this.description = description || DictionaryErrors.UNEXPECTED_ERROR.codeString;
        this.properties = properties;
        this.error = true;
    }

    static createCustomError(dictionaryElement: any, properties?: any): CustomError {
        return new CustomError(dictionaryElement.message, dictionaryElement.codeString, dictionaryElement.code, dictionaryElement.httpStatusCode, properties);
    }
}

export class PropertyError {
    validator: any;
    message: any;
    type: any;
    enumValues: any;
    path: any;
    value: any;
}