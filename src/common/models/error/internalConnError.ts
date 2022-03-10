/**
 * @copyright 		Palace Resorts
 * @description 	Error de credenciales de autenticación
 * @author 			Hector Trujillo Ruiz
 * @creationDate 	20 de Mayo del 2021
 */
 export class InternalConnError extends Error {

    constructor(message: string) {
        super(message);
        this.name = 'InternalConnError';
    }
}