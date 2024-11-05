import { ResponseError } from '../error/response.error.js'
import { formatArticle, formatArticles, allowedImage } from '../utils/article.util.js'
import articleService from '../services/article.service.js'

export default new class ArticleController {
  constructor() {
    this.articleService = articleService
  }

  getArticles = async (req, res, next) => {
    try {
      const articles = await this.articleService.getArticles()
			const images = await Promise.all(articles.map(article => this.articleService.getImageById(article.imageId)))
			const imageUrls = images.map(image => image.url)
      const formattedArticles = formatArticles(articles, imageUrls)
      res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan semua artikel',
        data: formattedArticles
      })
    } catch (e) {
      next(e)
    }
  }

	createArticle = async (req, res, next) => {
		try {
			if (!req.file) throw new ResponseError(400, 'Gambar harus diisi')
			if (req.file.size > 2 * 1024 * 1024) throw new ResponseError(400, 'Ukuran gambar harus kurang dari 2 MB')

			const isAllowedImage = allowedImage(req.file.originalname)
			if (!isAllowedImage) throw new ResponseError(400, 'Format gambar yang diperbolehkan adalah .png, .jpeg, .jpg')

			const image = await this.articleService.uploadImage(req.file, req.userId)
			const article = await this.articleService.createArticle(req.body, image.fileId, req.userId)
			const formattedArticle = formatArticle(article, image.url)
			res.status(201).json({
				success: true,
				message: 'Berhasil membuat artikel',
				data: formattedArticle
			})
		} catch (e) {
			next(e)
		}
	}

}

// 	getAccountById = async (req, res, next) => {
// 		try {
// 			const accountId = parseInt(req.params.id)
// 			const account = await this.accountService.getAccountById(accountId, req.userId)
// 			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')

// 			const formattedAccount = formatAccount(account)
// 			res.status(200).json({
// 				success: true,
// 				message: 'Berhasil mendapatkan akun',
// 				data: formattedAccount
// 			})
// 		} catch (e) {
// 			next(e)
// 		}
// 	}

// 	withdrawAccount = async (req, res, next) => {
// 		try {
// 			const accountId = parseInt(req.params.id)
// 			const account = await this.accountService.getAccountById(accountId, req.userId)
// 			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')
// 			if (account.balance < req.body.amount) throw new ResponseError(400, 'Saldo tidak cukup')

// 			const updatedAccount = await this.accountService.withdrawAccount(account.id, req.body.amount)
// 			const formattedAccount = formatAccount(updatedAccount)
// 			res.status(200).json({
// 				success: true,
// 				message: 'Berhasil melakukan penarikan',
// 				data: formattedAccount
// 			})
// 		} catch (e) {
// 			next(e)
// 		}
// 	}

// 	depositAccount = async (req, res, next) => {
// 		try {
// 			const accountId = parseInt(req.params.id)
// 			const account = await this.accountService.getAccountById(accountId, req.userId)
// 			if (!account) throw new ResponseError(404, 'Akun tidak ditemukan')

// 			const updatedAccount = await this.accountService.depositAccount(account.id, req.body.amount)
// 			const formattedAccount = formatAccount(updatedAccount)
// 			res.status(200).json({
// 				success: true,
// 				message: 'Berhasil melakukan setoran',
// 				data: formattedAccount
// 			})
// 		} catch (e) {
// 			next(e)
// 		}
// 	}
// }