import { prismaClient } from "../db/prisma.js"

export default new class AccountService {
  async getAccounts(userId) {
	  return prismaClient.bankAccount.findMany({
			where: {
				userId
			}
    })
  }

	async createAccount(request, userId) {
		return prismaClient.bankAccount.create({
			data: {
				bankName: request.bankName,
				bankAccountNumber: request.bankAccountNumber,
				userId
			}
		})
	}
	
	async getAccountById(accountId, userId) {
		return prismaClient.bankAccount.findUnique({
			where: {
				id: accountId,
				userId
			}
		})
	}
	
	async getAccountByIdForAdmin(accountId) {
		return prismaClient.bankAccount.findUnique({
			where: {
				id: accountId
			}
		})
	}

	async withdrawAccount(accountId, amount) {
		return prismaClient.bankAccount.update({
			where: {
				id: accountId
			},
			data: {
				balance: {
					decrement: amount
				}
			}
		})
	}

	async depositAccount(id, amount) {
		return prismaClient.bankAccount.update({
			where: {
				id
			},
			data: {
				balance: {
					increment: amount
				}
			}
		})
	}
}