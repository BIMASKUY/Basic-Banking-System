import Joi from "joi";

export default new class TransactionSchema {
  constructor() {
    this.transactionSchema = Joi.object({
			sourceAccountId: Joi.number().required().min(0),
			destinationAccountId: Joi.number().required().min(0),
			amount: Joi.number().required().min(10000)
    })
  }

  createTransaction() {
    return this.transactionSchema
  }
}