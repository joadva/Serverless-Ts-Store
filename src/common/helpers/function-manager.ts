/**
 * @copyright Palace Resorts
 * @description Clase que procesa funciones generales para las lambdas
 * @author Luis Miguel Alamilla Hernandez
 * @creationDate 12 de Julio del 2021
 */

import { User } from "../interfaces/user.interface";
import { RequestParameters } from "../models/request-parameters";

/**
 * Clase base para las funciones de ayuda
 */
export class FunctionManager {
    /**
     * @description Metodo para obtener el path, pathParameters, queryString y body
     * @param event
     * @return RequestParameters
     */
    static getRequestParameters(event: any): RequestParameters {
        const req = new RequestParameters();
        const { pathParameters = {} } = event;
        const body = JSON.parse(event.body) ?? undefined;
        const parameters = event.queryStringParameters ?? {};
        let user = new User();
        //TODO
        // user = event.requestContext.autorizer
        // user = { id: 'asd5646a5s4da3sd', department: 'VENTAS', email: 'joaquin.contreras@xid.com.mx', name: 'Joaquin Contreras', level: 1 };
        // if (event.requestContext && event.requestContext.authorizer && !process.env.IS_OFFLINE) user = event.requestContext.authorizer
        // if (body) {
        //     body.createdBy = body.createdBy || (<any>user);
        //     body.updatedBy = user;
        // }
        req.body = body;
        req.parameters = parameters;
        req.pathParameters = pathParameters;
        req.user = user;
        return req;
    }

    /**
     * @description Método para validar que la fecha de actualización sea la correcta que manda el front
     * @param requestUpdatedAt
     * @param dbUpdateAt
     * @return {boolean}
     */
    static IsUpdatedAtValid(requestUpdatedAt: number, dbUpdateAt: number): boolean {
        if (requestUpdatedAt === dbUpdateAt) return true
        return false;
    }


}
