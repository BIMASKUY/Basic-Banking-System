import transactionService from '../transaction.service.js'
import { prismaClient } from '../../db/prisma.js'
import accountService from '../account.service.js'

jest.mock('../account.service.js', () => ({
  withdrawAccount: jest.fn(),
  depositAccount: jest.fn()
}))

jest.mock('../../db/prisma.js', () => ({
  prismaClient: {
    transaction: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
	},
		$transaction: jest.fn()
  }
}))

describe('transactionService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('get transactions', () => {
    it('should get all transactions', async () => {
      const transactions = [
        {
        	id: 1,
        	sourceAccountId: 1,
        	destinationAccountId: 2,
        	amount: 50000
        },
        {
        id: 2,
        	sourceAccountId: 2,
        	destinationAccountId: 1,
        	amount: 50000
        }
      ]
    
      prismaClient.transaction.findMany.mockResolvedValue(transactions)
      const response = await transactionService.getTransactions(1)
      expect(response).toEqual(transactions)
    })
  })

	describe('create transaction', () => {
		it('should create a transaction', async () => {
			const request = {
				sourceAccountId: 1,
				destinationAccountId: 2,
				amount: 50000
			}

			const transaction = {
				id: 1,
				sourceAccountId: request.sourceAccountId,
				destinationAccountId: request.destinationAccountId,
				amount: request.amount
			}

			accountService.withdrawAccount.mockResolvedValue()
			accountService.depositAccount.mockResolvedValue()
			prismaClient.transaction.create.mockResolvedValue(transaction)
			prismaClient.$transaction.mockImplementation(async (callback) => {
				return await callback(prismaClient)
			})
	
			const result = await transactionService.createTransaction(request)
			expect(result).toEqual(transaction)
		})
	})

	describe('get transaction by id', () => {
		it('should get a transaction by id', async () => {
			const transaction = {
				id: 1,
				sourceAccountId: 1,
				destinationAccountId: 2,
				amount: 50000
			}

			prismaClient.transaction.findUnique.mockResolvedValue(transaction)
			const response = await transactionService.getTransactionById(1)
			expect(response).toEqual(transaction)
		})
	})
})

