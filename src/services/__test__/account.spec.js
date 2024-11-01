import accountService from '../account.service.js'
import { prismaClient } from '../../db/prisma.js'

jest.mock('../../db/prisma.js', () => ({
  prismaClient: {
    bankAccount: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn()
    }
  }
}))

describe('accountService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('get accounts', () => {
    it('should get all accounts', async () => {
      const accounts = [
        {
          id: 1,
          bankName: "BRI",
          bankAccountNumber: "12345678",
          userId: 1
        },
        {
          id: 2,
          bankName: "BCA",
          bankAccountNumber: "98765432",
          userId: 1
        }
      ]

      prismaClient.bankAccount.findMany.mockResolvedValue(accounts)
      const response = await accountService.getAccounts(1)
      expect(response).toEqual(accounts)
    })
  })

  describe('create account', () => {
    it('should create an account', async () => {
      const request = {
        id: 1,
        bankName: "BCA",
        bankAccountNumber: "12345678"
      }

      prismaClient.bankAccount.create.mockImplementation(({ data }) => {
        return {
          bankName: data.bankName,
          bankAccountNumber: data.bankAccountNumber,
          userId: 1
        }
      })

      const response = await accountService.createAccount(request, 1)

      const expectedResponse = {
        bankName: "BCA",
        bankAccountNumber: "12345678",
        userId: 1
      }
      expect(response).toEqual(expectedResponse)
    })
  })
  
  describe('get account by id', () => {
    it('should get an account by id', async () => {
      const account = {
        id: 1,
        bankName: "BCA",
        bankAccountNumber: "12345678",
        userId: 1
      }

      prismaClient.bankAccount.findUnique.mockResolvedValueOnce(account)
      const response = await accountService.getAccountById(1, 1)
      expect(response).toEqual(account)
    })

    it('should return null if account not found', async () => {
      prismaClient.bankAccount.findUnique.mockResolvedValue(null)
      const response = await accountService.getAccountById(2, 1)
      expect(response).toBeNull()
    })
  })

  describe('get account by id for admin', () => {
    it('should get an account by id for admin', async () => {
      const account = {
        id: 1,
        bankName: "BCA",
        bankAccountNumber: "12345678",
        userId: 1
      }

      prismaClient.bankAccount.findUnique.mockResolvedValueOnce(account)
      const response = await accountService.getAccountByIdForAdmin(1)
      expect(response).toEqual(account)
    })

    it('should return null if account not found', async () => {
      prismaClient.bankAccount.findUnique.mockResolvedValue(null)
      const response = await accountService.getAccountByIdForAdmin(2)
      expect(response).toBeNull()
    })
  })

  describe('withdraw account', () => {
    it('should withdraw account', async () => {
      const account = {
        id: 1,
        bankName: "BCA",
        bankAccountNumber: "12345678",
        userId: 1,
        balance: 100000
      }

      prismaClient.bankAccount.update.mockResolvedValueOnce(account)
      const response = await accountService.withdrawAccount(1, 50000)
      expect(response).toEqual(account)
    })
  })

  describe('deposit account', () => {
    it('should deposit account', async () => {
      const account = {
        id: 1,
        bankName: "BCA",
        bankAccountNumber: "12345678",
        userId: 1,
        balance: 100000
      }

      prismaClient.bankAccount.update.mockResolvedValueOnce(account)
      const response = await accountService.depositAccount(1, 50000)
      expect(response).toEqual(account)
    })
  })
})