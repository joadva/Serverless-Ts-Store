import Ajv, {JSONSchemaType} from "ajv";
import addFormats from "ajv-formats"
const ajv = new Ajv();
addFormats(ajv)

interface InterfaceSchema {
  username: string
  code: number
}


const schema: JSONSchemaType<InterfaceSchema> = {
  type: "object",
  properties: {
    username: {type: "string"},
    code: {type: "number"},
  },
  required: ["username","code"],
  additionalProperties: false
}

export const validate_user_code_corfirmation = ajv.compile(schema)


