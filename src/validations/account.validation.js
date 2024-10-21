import { validate } from "../schemas/validate.schema.js"
import accountSchema from "../schemas/account.schema.js"

export default new class AccountValidation {
  constructor() {
    this.accountSchema = accountSchema
  }

  createAccount = (req, res, next) => {
    try {
      req.body = validate(this.accountSchema.createAccount(), req.body)
      next()
    } catch (error) {
      next(error)
    }
  }

	withdrawAccount = (req, res, next) => {
		try {
			req.body = validate(this.accountSchema.withdrawAccount(), req.body)
			next()
		} catch (error) {
			next(error)
		}
	}

	depositAccount = (req, res, next) => {
		try {
			req.body = validate(this.accountSchema.depositAccount(), req.body)
			next()
		} catch (error) {
			next(error)
		}
	}
}