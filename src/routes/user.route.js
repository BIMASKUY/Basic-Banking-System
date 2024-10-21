import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import userValidation from '../validations/user.validation.js'

export default new class UserRoutes {
    constructor() {
        this.router = Router()
        this.userController = userController
        this.userValidation = userValidation
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.userController.getUsers)
        this.router.get('/:id', this.userController.getUserById)
        this.router.post('/', this.userValidation.createUser, this.userController.createUser)
    }

    getRouter() {
        return this.router;
    }
}