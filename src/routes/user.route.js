import { Router } from 'express'

import {
    createValidation
} from '../validations/user.validation.js'

import { 
    getAll,
    getOne,
    create
} from '../controllers/user.controller.js'

const userRoutes = Router()

userRoutes.get('/', getAll)
userRoutes.get('/:id', getOne)
userRoutes.post('/', createValidation, create)

export { userRoutes }