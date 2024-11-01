import userService from '../user.service.js'
import { prismaClient } from '../../db/prisma.js'

jest.mock('../../db/prisma.js', () => ({
  prismaClient: {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn()
    }
  }
}))

describe('UserService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('get users', () => {
    it('should get all users', async () => {
      const users = [
        {
          name: "mughie",
          email: "mughie@gmail.com",
          password: "mughie123",
          profile: {
            identityType: "KTP",
            identityNumber: "3201010101010001",
            address: "Jl. Merdeka No. 123, Jakarta, Indonesia"
          }
        },
        {
          name: "mughie2",
          email: "mughie2@gmail.com",
          profile: {
            identityType: "SIM",
            identityNumber: "3201010101010002",
            address: "Jl. Merdeka No. 124, Jakarta, Indonesia"
          }
        }
      ]

      prismaClient.user.findMany.mockResolvedValue(users)
      const response = await userService.getUsers()
      expect(response).toEqual(users)
    })
  })

  describe('get user by id', () => {
    it('should get a user by id', async () => {
      const user = {
        id: 1,
        name: "mughie",
        email: "mughie@gmail.com",
        password: "mughie123",
        profile: {
          identityType: "KTP",
          identityNumber: "3201010101010001",
          address: "Jl. Merdeka No. 123, Jakarta, Indonesia"
        }
      }

      prismaClient.user.findUnique.mockResolvedValueOnce(user)
      const response = await userService.getUserById(1)
      expect(response).toEqual(user)
    })

    it('should return null if user not found', async () => {
      prismaClient.user.findUnique.mockResolvedValue(null)
      const response = await userService.getUserById(2)
      expect(response).toBeNull()
    })
  })

  describe('create user', () => {
    it('should create a user', async () => {
      const request = {
        name: "mughie",
        email: "mughie@gmail.com",
        password: "mughie123",
        identityType: "KTP",
        identityNumber: "3201010101010001",
        address: "Jl. Merdeka No. 123, Jakarta, Indonesia"
      }
    
      prismaClient.user.create.mockImplementation(({ data }) => {
        return {
          name: data.name,
          email: data.email,
          profile: {
            identityType: data.profile.create.identityType,
            identityNumber: data.profile.create.identityNumber,
            address: data.profile.create.address
          }
        }
      })
    
      const response = await userService.createUser(request)
      
      const expectedResponse = {
        name: "mughie",
        email: "mughie@gmail.com",
        profile: {
          identityType: "KTP",
          identityNumber: "3201010101010001",
          address: "Jl. Merdeka No. 123, Jakarta, Indonesia"
        }
      }
      expect(response).toEqual(expectedResponse)
    })
  })

  describe('get user by email', () => {
    it('should get a user by email', async () => {
      const user = {
        id: 1,
        name: "mughie",
        email: "mughie@gmail.com",
        password: "mughie123",
        profile: {
          identityType: "KTP",
          identityNumber: "3201010101010001",
          address: "Jl. Merdeka No. 123, Jakarta, Indonesia"
        }
      }

      prismaClient.user.findUnique.mockResolvedValueOnce(user)
      const response = await userService.getUserByEmail(user.email)
      expect(response).toEqual(user)
    })

    it('should return null if user not found', async () => {
      prismaClient.user.findUnique.mockResolvedValue(null)
      const response = await userService.getUserByEmail("mug@gmail.com")
      expect(response).toBeNull()
    })
  })
})