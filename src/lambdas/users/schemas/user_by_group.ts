import Ajv, {JSONSchemaType} from "ajv";
const ajv = new Ajv();


interface UserByGroup {
  username: string
}


const schema: JSONSchemaType<UserByGroup> = {
  type: "object",
  properties: {
    username: {type: "string"}
  },
  required: ["username"],
  additionalProperties: false
}

export const validate_group_by_user = ajv.compile(schema);