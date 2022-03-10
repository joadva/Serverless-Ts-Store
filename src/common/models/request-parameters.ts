import { User } from "../interfaces/user.interface";

/**
* @copyright Palace Resorts
* @description Clase que se encarga de contener los elementos de una petición
* @author Rodolfo Rebollo Burgueño
* @creationDate 18 de junio del 2021
*/
export class RequestParameters {
  body: any;
  user: User;
  parameters: any;
  pathParameters: any;
}
