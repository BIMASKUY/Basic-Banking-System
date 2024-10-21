import { validate } from "../schemas/validate.schema.js"
import userSchema from "../schemas/user.schema.js"

export default new class UserValidation {
    constructor() {
        this.userSchema = userSchema
    }

    createUser = (req, res, next) => {
        try {
            req.body = validate(this.userSchema.createUser(), req.body)
            next()
        } catch (error) {
            next(error)
        }
    }
}