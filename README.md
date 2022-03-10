# donfiado
Sistema de prestamos


# Estructura de repuesta de los endpoints
```json
    // status code : 200, 400, 402. 403, 404, 500 
    
    // All
    //Estatus 200
    {
        "data": {
            "total": "number",
            "per_page": "number",
            "current_page": "string",
            "last_page": "number",
            "from": "number",
            "to": "Number",
            "items": [

            ]
        }
     }

    // GET BY ID 
    //Estatus 200
    {
        "data": {
            "id": "",
            "name": ""
        }
     }

    // Error 
    // Estatus code != 200
    {
        "errors": [
            {
                "message": "UNEXPECTED_ERROR",
                "code": 4000
            }
        ]
    }

    // Warning 
    // Estatus code != 200
    {
        "warnings": [
            {
                "message": "Te deje guarda el dato pero te falta el domicilio"
            }
        ]
    }
```
