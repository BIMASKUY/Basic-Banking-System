import { prismaClient } from "../db/prisma.js"
import accountService from "./account.service.js"

export default new class TransactionService {
  async getTransactions(userId) {
	  return prismaClient.transaction.findMany({
			where: {
				OR: [
					{
						sourceAccount: {
							userId
						}
					},
					{
						destinationAccount: {
							userId
						}
					}
				]
			},
			include: {
				sourceAccount: {
					include: {
						user: true
					}
				},
				destinationAccount: {
					include: {
						user: true
					}
				}
			}
    })
  }

	async createTransaction(request) {
    return await prismaClient.$transaction(async (prisma) => {
			await accountService.withdrawAccount(request.sourceAccountId, request.amount)
      await accountService.depositAccount(request.destinationAccountId, request.amount)
			
      const transaction = await prisma.transaction.create({
        data: {
          sourceAccountId: request.sourceAccountId,
          destinationAccountId: request.destinationAccountId,
          amount: request.amount
        },
				include: {
					sourceAccount: {
						include: {
							user: true
						}
					},
					destinationAccount: {
						include: {
							user: true
						}
					}
				}
      })
      return transaction
    })
	}

	async getTransactionById(transactionId, userId) {
		return prismaClient.transaction.findUnique({
			where: {
				id: transactionId,
				OR: [
					{
						sourceAccount: {
							userId
						}
					},
					{
						destinationAccount: {
							userId
						}
					}
				]
			},
			include: {
				sourceAccount: {
					include: {
						user: true
					}
				},
				destinationAccount: {
					include: {
						user: true
					}
				}
			}
		})
	}
}