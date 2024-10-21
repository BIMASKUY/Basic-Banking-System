import { Router } from 'express'
import transactionController from '../controllers/transaction.controller.js'
import transactionValidation from '../validations/transaction.validation.js'

export default new class TransactionRoutes {
    constructor() {
        this.router = Router()
        this.transactionController = transactionController
        this.transactionValidation = transactionValidation
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.transactionController.getTransactions)
        this.router.post('/', this.transactionValidation.createTransaction, this.transactionController.createTransaction)
        this.router.get('/:id', this.transactionController.getTransactionById)
    }

    getRouter() {
        return this.router;
    }
}