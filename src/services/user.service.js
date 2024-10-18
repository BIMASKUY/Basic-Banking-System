import { prismaClient } from "../db/prisma.js"

export const getUsers = async () => {
    return prismaClient.user.findMany({})
}