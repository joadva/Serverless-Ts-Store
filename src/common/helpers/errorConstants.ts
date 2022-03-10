/**
 * @copyright Palace Resorts
 * @description Contiene el catalogo de errores
 * @author Edder Salim Rosado Lira - Tomas Fernando Cob Cime - Edgar Rene Rodriguez Medina
 * @creationDate 8 de Abril del 2021
 */
export namespace errorConstants {
  export const UNEXPECTED_ERROR: string = 'UNEXPECTED_ERROR'
  export const FIELDNAME_UNDEFINED_ERROR: string = 'FIELNAME FIELD UNDEFINED, PLEASE SET IN PATHPARAMETERS'
  export const ENV_REQUIRED_COGNITO_POOL_ID: string = "ENV VAR REQUIRED FOR COGNITO POOL ID"

  //Token
  export const MISSING_TOKEN = "TOKEN IS MISSING"
  export const REQUESTED_TOKEN_INVALID = "REQUESTED TOKEN IS INVALID"
  export const CLAIM_MADE_UNKNOWN_KID = "CLAIM MADE FOR UNKNOWN KID"
  export const UNAUTHORIZED = "UNAUTHORIZED"

  //rule Errors
  export const BODY_EMPTY = "THE BODY OF THE REQUEST IS EMPTY";

  //USER
  export const USER_NOT_FOUND = "USER NOT FOUND"
}
export const DictionaryErrors = {
  'UNEXPECTED_ERROR': { code: 4000, codeString: 'UNEXPECTED_ERROR', message: 'UNEXPECTED_ERROR', httpStatusCode: 500 },
  'REQUESTED_TOKEN_INVALID': { code: 4001, codeString: 'REQUESTED_TOKEN_INVALID', message: 'REQUESTED_TOKEN_INVALID', httpStatusCode: 401 },
  'MISSING_TOKEN': { code: 4002, codeString: 'MISSING_TOKEN', message: 'MISSING_TOKEN', httpStatusCode: 401 },
  'UNAUTHORIZED': { code: 4003, codeString: 'UNAUTHORIZED', message: 'UNAUTHORIZED', httpStatusCode: 403 },
  'ITEM_DOES_NOT_EXIST_EXCEPTION': { code: 4004, codeString: 'ITEM_DOES_NOT_EXIST_EXCEPTION', message: 'EL REGISTRO NO EXISTE', httpStatusCode: 404 },
  'SCHEMA_VALIDATION': { code: 4005, codeString: 'SCHEMA_VALIDATION', message: 'ERROR GENERADO DEBIDO A QUE EL REGISTRO NO CUMPLE LA ESPECIFICACIÓN DEL ESQUEMA', httpStatusCode: 409 },
  'VALUES_REQUEST_NO_MATH': { code: 4006, codeString: 'VALUES_REQUEST_NO_MATH', message: 'NO CUMPLE CON LA ESPECIFICACIÓN DE LA REGLA', httpStatusCode: 404 },
  'CONTENT_DATA_AMBIGUITY': { code: 4007, codeString: 'CONTENT_DATA_AMBIGUITY', message: 'EL CONTENIDO ES AMBIGUO', httpStatusCode: 409 },
  'KEY_DUPLICATED': { code: 4008, codeString: 'KEY_DUPLICATED', message: 'EL CÓDIGO YA SE ENCUENTRA REGISTRADO', httpStatusCode: 409 },
  'BODY_INVALID': {code: 4008, codeString: 'BODY_INVALID', message: 'EL BODY DEBE SER UN ARRAY', httpStatusCode: 409}
}