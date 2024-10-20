import Joi from "joi"

const userSchema = Joi.object({
    name: Joi.string().required().max(255),
    email: Joi.string().required().max(255),
    password: Joi.string().required().max(255)
})

export const createUserSchema = userSchema

export const loginUserValidation = userSchema.extract('email', 'password')

export const getUserValidation = Joi.string().required().max(100)

export const updateUserValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    password: Joi.string().max(100).optional()
})