import { Router } from 'express'
import authController from '../controllers/auth.controller.js'
import userValidation from '../validations/user.validation.js'
export default new class AuthRoutes {
    constructor() {
        this.router = Router()
        this.authController = authController
        this.userValidation = userValidation
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.post('/register', this.userValidation.createUser, this.authController.register)
        this.router.post('/login', this.userValidation.loginUser, this.authController.login)
    }

    getRouter() {
        return this.router;
    }
}