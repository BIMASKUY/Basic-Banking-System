import { prismaClient } from "../db/prisma.js"
import accountService from "./account.service.js"

export default new class TransactionService {
  async getTransactions() {
	  return prismaClient.transaction.findMany({
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
      await accountService.withdrawAccount(request.sourceAccountId, request.amount)
      await accountService.depositAccount(request.destinationAccountId, request.amount)

      return transaction
    })
	}

	async getTransactionById(id) {
		return prismaClient.transaction.findUnique({
			where: {
				id
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