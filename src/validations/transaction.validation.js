import { validate } from "../schemas/validate.schema.js"
import transactionSchema from "../schemas/transaction.schema.js"

export default new class TransactionValidation {
  constructor() {
    this.transactionSchema = transactionSchema
  }

  createTransaction = (req, res, next) => {
    try {
      req.body = validate(this.transactionSchema.createTransaction(), req.body)
      next()
    } catch (error) {
      next(error)
    }
  }
}