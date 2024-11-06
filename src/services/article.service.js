import { prismaClient } from "../db/prisma.js"
import imagekit from "../configs/imagekit.config.js"
import { encodedFileToBase64, encodedFileName } from "../utils/article.util.js"

export default new class AccountService {
  async getArticles() {
	  return prismaClient.article.findMany({
			include: {
				author: true
			}
		})
  }

	async uploadImage(image, userId) {
		return imagekit.upload({
			file : encodedFileToBase64(image),
			fileName : encodedFileName(image.originalname, userId),
			useUniqueFileName : false,
			folder: '/articles',
			isPublished: true
		})
	}

	async getImageById(imageId) {
		return imagekit.getFileDetails(imageId)
	}

	async deleteImageById(imageId) {
		return imagekit.deleteFile(imageId)
	}

	async createArticle(request, imageId, userId) {
		return prismaClient.article.create({
			data: {
				title: request.title,
				content: request.content,
				imageId: imageId,
				authorId: userId
			},
			include: {
				author: true
			}
		})
	}

}

// 	async createAccount(request, userId) {
// 		return prismaClient.bankAccount.create({
// 			data: {
// 				bankName: request.bankName,
// 				bankAccountNumber: request.bankAccountNumber,
// 				userId
// 			}
// 		})
// 	}
	
// 	async getAccountById(accountId, userId) {
// 		return prismaClient.bankAccount.findUnique({
// 			where: {
// 				id: accountId,
// 				userId
// 			}
// 		})
// 	}
	
// 	async getAccountByIdForAdmin(accountId) {
// 		return prismaClient.bankAccount.findUnique({
// 			where: {
// 				id: accountId
// 			}
// 		})
// 	}

// 	async withdrawAccount(accountId, amount) {
// 		return prismaClient.bankAccount.update({
// 			where: {
// 				id: accountId
// 			},
// 			data: {
// 				balance: {
// 					decrement: amount
// 				}
// 			}
// 		})
// 	}

// 	async depositAccount(id, amount) {
// 		return prismaClient.bankAccount.update({
// 			where: {
// 				id
// 			},
// 			data: {
// 				balance: {
// 					increment: amount
// 				}
// 			}
// 		})
// 	}
// }