import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv();

interface Login {
  username: string
  password: string
}


const schema: JSONSchemaType<Login> = {
  type: "object",
  properties: {
    username: {type: "string"},
    password: {type: "string"}
  },
  required: ["username","password"],
  additionalProperties: false
}

const login_validate = ajv.compile(schema)


export {login_validate}