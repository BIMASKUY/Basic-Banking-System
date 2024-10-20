import { prismaClient } from "../db/prisma.js"

export const getUsers = async () => {
  return prismaClient.user.findMany({})
}

export const createUser = async (request) => {
	return prismaClient.user.create({
		data: {
			name: request.name,
			email: request.email,
			password: request.password,
		},
		profile: {
			create: {
				userId: request.id,
				identityType: request.identityType,
				identityNumber: request.identityNumber,
				address: request.address
			}
		}
	})
}

export const getUserByEmail = async (email) => {
	return prismaClient.user.findUnique({
		where: {
			email
		}
	})
}

export const getUserWithProfileById = async (id) => {
	return prismaClient.user.findUnique({
		where: {
			id
		},
		include: {
			profile: true
		}
	})
}