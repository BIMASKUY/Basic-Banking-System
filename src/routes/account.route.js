import { Router } from 'express'
import accountController from '../controllers/account.controller.js'
import accountValidation from '../validations/account.validation.js'

export default new class AccountRoutes {
    constructor() {
        this.router = Router()
        this.accountController = accountController
        this.accountValidation = accountValidation
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.accountController.getAccounts)
        this.router.post('/', this.accountValidation.createAccount, this.accountController.createAccount)
        this.router.get('/:id', this.accountController.getAccountById)
        this.router.post('/:id/withdraw', this.accountValidation.withdrawAccount, this.accountController.withdrawAccount)
        this.router .post('/:id/deposit', this.accountValidation.depositAccount, this.accountController.depositAccount)
    }

    getRouter() {
        return this.router;
    }
}