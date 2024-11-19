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

    loginUser = (req, res, next) => {
        try {
            req.body = validate(this.userSchema.loginUser(), req.body)
            next()
        } catch (error) {
            next(error)
        }
    }

    forgotPasswordUser = (req, res, next) => {
        try {
            req.body = validate(this.userSchema.forgotPasswordUser(), req.body)
            next()
        } catch (error) {
            next(error)
        }
    }

    resetPasswordUser = (req, res, next) => {
        try {
            req.body = validate(this.userSchema.resetPasswordUser(), req.body)
            next()
        } catch (error) {
            next(error)
        }
    }
}