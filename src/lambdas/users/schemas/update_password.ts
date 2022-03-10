import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv();

interface UpdatePassword {
  username: string
  new_password: string
}


const schema: JSONSchemaType<UpdatePassword> = {
  type: "object",
  properties: {
    username: {type: "string"},
    new_password: {type: "string"}
  },
  required: ["username","new_password"],
  additionalProperties: false
}

const update_password_validate = ajv.compile(schema)


export {update_password_validate}