import { prismaClient } from "../db/prisma.js"

export default new class UserService {
  async getUsers() {
	  return prismaClient.user.findMany({
      include: {
        profile: true
      }
    })
  }

  async getUserById(id) {
    return prismaClient.user.findUnique({
      where: {
        id
      },
      include: {
        profile: true
      }
    })
  }

  async createUser(request) {
    return prismaClient.user.create({
      data: {
        name: request.name,
        email: request.email,
        password: request.password,
        profile: {
          create: {
            identityType: request.identityType,
            identityNumber: request.identityNumber,
            address: request.address
          }
        }
      },
      include: {
        profile: true
      }
    })
  }

  async getUserByEmail(email) {
    return prismaClient.user.findUnique({
      where: {
        email
      }
    })
  }
  
  async updatePasswordById(id, password) {
    return prismaClient.user.update({
      where: {
        id
      },
      data: {
        password
      },
      include: {
        profile: true
      }
    })
  }
}