import Joi from "joi"

export const registerUserValidation = Joi.object({
    username: Joi.string().required().max(100),
    password: Joi.string().required().max(100),
    name: Joi.string().required().max(100)
})

export const loginUserValidation = Joi.object({
    username: Joi.string().required().max(100),
    password: Joi.string().required().max(100)
})

export const getUserValidation = Joi.string().required().max(100)

export const updateUserValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    password: Joi.string().max(100).optional()
})