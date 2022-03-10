import Ajv, { JSONSchemaType } from "ajv";
import addFormarts from "ajv-formats";
const ajv = new Ajv();
addFormarts(ajv)


interface LoanRegister {
    day: string,
    reason: string,
    quantity: number,
    interest: number,
}

const schema: JSONSchemaType<LoanRegister> = {
    type: "object",
    properties: {
        day: { type: "string" },
        reason: { type: "string" },
        quantity: { type: "number" },
        interest:  {type: "number"}
    },
    required: ["day", "reason", "quantity"],
    additionalProperties: false
}

export const validate_register_loan = ajv.compile(schema)