/**
 * @copyright Palace Resorts
 * @description Entidad Body
 * @author Edder Salim Rosado Lira - Tomas Fernando Cob Cime - Edgar Rene Rodriguez Medina
 * @creationDate 8 de Abril del 2021
 */
export type Body = {
  data?: any,
  errors?: ErrorResponse[],
  warnings?: ErrorResponse[],
}
export type ErrorResponse = {
  code: number,
  message: string
}
