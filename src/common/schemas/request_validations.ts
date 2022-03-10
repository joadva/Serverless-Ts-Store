
const get_body_validations =<T>(validation_type, event_body_raw):Promise<T> =>{
    return new Promise((resolve, reject) => {
        const data = JSON.parse(event_body_raw);
        const valid = validation_type(data);
        if(valid){
            resolve(data);
        }else{
           reject(validation_type.errors)
        }
    });
}



export {get_body_validations}