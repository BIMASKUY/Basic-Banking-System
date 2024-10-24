import { ResponseError } from '../error/response.error.js'
import { formatTransaction, formatTransactions } from '../utils/transaction.util.js'
import transactionService from '../services/transaction.service.js'
import accountService from '../services/account.service.js'

export default new class TransactionController {
  constructor() {
    this.transactionService = transactionService
    this.accountService = accountService
  }

  getTransactions = async (req, res, next) => {
    try {
      const transactions = await this.transactionService.getTransactions()
    	const formattedTransactions = formatTransactions(transactions)
      res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan semua transaksi',
        data: formattedTransactions
      })
    } catch (e) {
      next(e)
    }
  }

  createTransaction = async (req, res, next) => {
    try {
      const sourceAccount = await this.accountService.getAccountById(req.body.sourceAccountId)
			if (!sourceAccount) throw new ResponseError(404, 'Akun sumber tidak ditemukan')
			if (sourceAccount.balance < req.body.amount) throw new ResponseError(400, 'Saldo tidak cukup')
			
			const destinationAccount = await this.accountService.getAccountById(req.body.destinationAccountId)
			if (!destinationAccount) throw new ResponseError(404, 'Akun tujuan tidak ditemukan')

      const transaction = await this.transactionService.createTransaction(req.body)
      const formattedTransaction = formatTransaction(transaction)
      res.status(201).json({
        success: true,
        message: 'Berhasil membuat transaksi',
        data: formattedTransaction
      })
    } catch (e) {
      next(e)
    }
  }

	getTransactionById = async (req, res, next) => {
		try {
			const transactionId = parseInt(req.params.id)
			const transaction = await this.transactionService.getTransactionById(transactionId)
			if (!transaction) throw new ResponseError(404, 'Transaksi tidak ditemukan')
				
			const formattedTransaction = formatTransaction(transaction)
			res.status(200).json({
				success: true,
				message: 'Berhasil mendapatkan transaksi',
				data: formattedTransaction
			})
		} catch (e) {
			next(e)
		}
	}
}