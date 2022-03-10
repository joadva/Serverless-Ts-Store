/**
 * @copyright Palace Resorts
 * @description Clase que genera un error customizado para las excepciones
 * @author Luis Miguel Alamilla Hernandez
 * @creationDate 09 de Septiembre del 2021
 */
import { errorConstants } from "../helpers/errorConstants";


export class CustomWarning {
    code: number;
    message: string;
    error: boolean;

    constructor(description: string, message?: string, code?: number) {
        this.code = code || 409;
        this.message = message || errorConstants.UNEXPECTED_ERROR;
        this.error = true;
    }
}