import { prismaClient } from "../db/prisma.js"

export default new class AccountService {
  async getAccounts() {
	  return prismaClient.bankAccount.findMany({
      include: {
        user: true
      }
    })
  }

	async createAccount(request) {
		return prismaClient.bankAccount.create({
			data: {
				bankName: request.bankName,
				bankAccountNumber: request.bankAccountNumber,
				balance: 0,
				userId: request.userId
			},
			include: {
				user: true
			}
		})
	}
	
	async getAccountById(id) {
		return prismaClient.bankAccount.findUnique({
			where: {
				id
			},
			include: {
				user: true
			}
		})
	}

	async withdrawAccount(id, amount) {
		return prismaClient.bankAccount.update({
			where: {
				id
			},
			data: {
				balance: {
					decrement: amount
				}
			},
			include: {
				user: true
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
			},
			include: {
				user: true
			}
		})
	}
}