import Joi from "joi";

export default new class AccountSchema {
  constructor() {
    this.accountSchema = Joi.object({
      bankName: Joi.string().required().max(255),
      bankAccountNumber: Joi.string().required().max(255),
      amount: Joi.number().required().min(10000),
      userId: Joi.number().required().min(0)
    })
  }

  createAccount() {
    return Joi.object({
      bankName: this.accountSchema.extract('bankName'),
      bankAccountNumber: this.accountSchema.extract('bankAccountNumber'),
      userId: this.accountSchema.extract('userId')
    })
  }

  withdrawAccount() {
    return Joi.object({
      amount: this.accountSchema.extract('amount')
    })
  }

  depositAccount() {
    return Joi.object({
      amount: this.accountSchema.extract('amount')
    })
  }
}