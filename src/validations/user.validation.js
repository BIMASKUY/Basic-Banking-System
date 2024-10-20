import { validate } from "../schemas/validate.schema.js"

import { 
    createUserSchema
} from "../schemas/user.schema.js"

export const createValidation = (req, res, next) => {
    try {
        req.body = validate(createUserSchema, req.body)
        next()
    } catch (error) {
        next(error)
    }
}