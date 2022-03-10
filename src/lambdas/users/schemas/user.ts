import Ajv, {JSONSchemaType} from "ajv";
import addFormats from "ajv-formats"
const ajv = new Ajv();
addFormats(ajv)

interface Register {
  name:string,
  username: string
  password: string
  email:string
}


const schema: JSONSchemaType<Register> = {
  type: "object",
  properties: {
    name: {type: "string"},
    username: {type: "string"},
    password: {type: "string"},
    email: {type: "string", format:"email"}
  },
  required: ["username","password",'email',"name"],
  additionalProperties: false
}

export const validate_register_user = ajv.compile(schema);