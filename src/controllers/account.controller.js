import { ResponseError } from '../error/response.error.js'
import { formatAccount, formatAccounts } from '../utils/account.util.js'
import accountService from '../services/account.service.js'

export default new class AccountController {
  constructor() {
    this.accountService = accountService
  }

  getAccounts = async (req, res, next) => {
    try {
      const accounts = await this.accountService.getAccounts(req.userId)
      const formattedAccounts = formatAccounts(accounts)
      res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan semua akun',
        data: formattedAccounts
      })
    } catch (e) {
      next(e)
    }
  }

  createAccount = async (req, res, next) => {
    try {
      const account = await this.accountService.createAccount(req.body, req.userId)
			const formattedAccount = formatAccount(account)
      res.status(201).json({
        success: true,
        message: 'Berhasil membuat akun',
        data: formattedAccount
      })
    } catch (e) {
      next(e)
    }
  }

	getAccountById = async (req, res, next) => {
		try {
			const accountId = parseInt(req.params.id)
			const account = await this.accountService.getAccountById(accountId, req.userId)
			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')

			const formattedAccount = formatAccount(account)
			res.status(200).json({
				success: true,
				message: 'Berhasil mendapatkan akun',
				data: formattedAccount
			})
		} catch (e) {
			next(e)
		}
	}

	withdrawAccount = async (req, res, next) => {
		try {
			const accountId = parseInt(req.params.id)
			const account = await this.accountService.getAccountById(accountId, req.userId)
			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')
			if (account.balance < req.body.amount) throw new ResponseError(400, 'Saldo tidak cukup')

			const updatedAccount = await this.accountService.withdrawAccount(account.id, req.body.amount)
			const formattedAccount = formatAccount(updatedAccount)
			res.status(200).json({
				success: true,
				message: 'Berhasil melakukan penarikan',
				data: formattedAccount
			})
		} catch (e) {
			next(e)
		}
	}

	depositAccount = async (req, res, next) => {
		try {
			const accountId = parseInt(req.params.id)
			const account = await this.accountService.getAccountById(accountId, req.userId)
			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')

			const updatedAccount = await this.accountService.depositAccount(account.id, req.body.amount)
			const formattedAccount = formatAccount(updatedAccount)
			res.status(200).json({
				success: true,
				message: 'Berhasil melakukan setoran',
				data: formattedAccount
			})
		} catch (e) {
			next(e)
		}
	}
}