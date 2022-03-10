/**
 * @copyright Palace Resorts
 * @description Clase que agrega a la estructura base del response, el contenido del modelo body
 * @author Edder Salim Rosado Lira - Tomas Fernando Cob Cime - Edgar Rene Rodriguez Medina
 * @creationDate 8 de Abril del 2021
 */
import { Body } from '../models/body'
import { Header } from '../models/headers'
import { CommonResponse } from '../models/commonResponse'
import { CustomError } from '../exceptions/custom-error'
import { CustomWarning } from '../exceptions/custom-warning'
import { DictionaryErrors, errorConstants } from './errorConstants'
/**
 * Clase base para Response
 */
export class ResponseManager {
  /**
   *
   * @return {Header}
   */
  private static setHeaders(): Header {
    const headers: { [key: string]: any } = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Headers':
      'timestamp,tz,tenant-id,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
    return headers
  }
  /**
   *
   * @param {Body} body
   * @return {CommonResponse}
   */
  static handleResponse(body: any, warnings?: CustomWarning[]): CommonResponse {
    let customResponse: CommonResponse
    if (body) {
      const bd: Body = { data: body };
      if (warnings) {
        bd.warnings = warnings.map(m => { return { message: m.message, code: m.code }; });
      }
      customResponse = {
        statusCode: 200,
        body: JSON.stringify(bd),
        headers: ResponseManager.setHeaders()
      }
    } else {
      customResponse = {
        statusCode: 204,
        body: '',
        headers: ResponseManager.setHeaders()
      }
    }
    return customResponse
  }
  /**
   *
   * @param {string} errorMsg
   * @return {CommonResponse}
   */
   static handleError(errorMsg: string): CommonResponse {
    const bd: any = errorMsg

    const customError: CommonResponse = {
      statusCode: 409,
      body: JSON.stringify(bd),
      headers: ResponseManager.setHeaders()
    }
    return customError
  }


  /**
   * 
   * @param errorMsg 
   * @param warnings 
   * @param statusCode 
   * @returns 
   */
   static handleCustomError(errors: CustomError[], warnings?: CustomWarning[], statusCode: number = 409): CommonResponse {
    const bd: Body = {
    }
    if (errors) {
      bd.errors = errors.map(m => { return { message: m.description, code: m.code, properties: m.properties }; });
    }
    if (warnings) {
      bd.warnings = warnings.map(m => { return { message: m.message, code: m.code }; });
    }
    const customError: CommonResponse = {
      statusCode: errors[0].httpStatusCode,
      body: JSON.stringify(bd),
      headers: ResponseManager.setHeaders()
    }
    return customError
  }
  /**
   * 
   * @param errorMsg 
   * @param warnings 
   * @param statusCode 
   * @returns 
   */
   static detectError(e: any): CommonResponse {
    console.log(e);
    if (e.code) {
      if(e.code==11000){
        return ResponseManager.handleCustomError([CustomError.createCustomError(DictionaryErrors.KEY_DUPLICATED)]);
      }else if (e.internalErrors) {
        return ResponseManager.handleCustomError(e.internalErrors);
      } else {
        return ResponseManager.handleCustomError([e]);
      }
    } else {
      if (e.errors) {
        const customError: Array<CustomError> = new Array();
        for (const error in e.errors) {
          customError.push(CustomError.createCustomError(DictionaryErrors.SCHEMA_VALIDATION, e.errors[error].properties));
        }
        return ResponseManager.handleCustomError(customError);
      } else {
        return ResponseManager.handleCustomError([CustomError.createCustomError(DictionaryErrors.UNEXPECTED_ERROR)]);
      }
    }
  }

  static handleUnexpectedError(): CommonResponse {
    let statusCode = 500;
    const bd: Body = {
      errors: [{ message: errorConstants.UNEXPECTED_ERROR, code: statusCode }]
    }
    const customError: CommonResponse = {
      statusCode: statusCode,
      body: JSON.stringify(bd),
      headers: ResponseManager.setHeaders()
    }
    return customError
  }
}
