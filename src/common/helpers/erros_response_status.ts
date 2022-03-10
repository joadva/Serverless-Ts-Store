class ErrorResponseStatus {
  statusCode: number;   
    headers: { 'Content-Type': string; };
  body: {};

  constructor(body, statusCode = 500) {
    // const body = JSON.stringify(body);
    this.statusCode = statusCode;
    this.body = JSON.stringify(body);
    this.headers = {
      'Content-Type': 'application/json',
    };
  }
}



export {ErrorResponseStatus}