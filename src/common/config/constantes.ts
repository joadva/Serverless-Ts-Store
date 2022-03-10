export enum ApidStatusCode {
    OK=200,
    Created=201,
    Accepted=202,
    NonAuthoritative=203,
    NoContent=204,
    ResetContent=205,
    PartialContent=206,
    MultipleChoices=300,
    MovedPermanently=301,
    BadRequest=400,
    Unauthorized=401,
    PaymentRequired=402,
    Forbidden=403,
    NotFound=404,
    MethodNotAllowed=405,
    NotAcceptable=406

}

export enum Groups {
    ADMIN="admin",
    CLIENTE="cliente",
    COBRADOR="cobrador",
    SUPERVISOR="supervisor",
}