import { Router } from 'express'
import articleController from '../controllers/article.controller.js'
import multer from 'multer'
import authMiddlewares from '../middleware/auth.middleware.js'
// import articleValidation from '../validations/article.validation.js'

export default new class ArticleRoutes {
  constructor() {
    this.router = Router()
		this.upload = multer()
    this.articleController = articleController
		this.authMiddlewares = authMiddlewares

    // this.articleValidation = articleValidation
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get('/', this.articleController.getArticles)
    this.router.post('/', this.authMiddlewares.loggedIn, this.upload.single('image'), this.articleController.createArticle)
    // this.router.get('/:id', this.articleController.getArticleById)
    // this.router.post('/:id/withdraw', this.articleValidation.withdrawArticle, this.articleController.withdrawArticle)
    // this.router .post('/:id/deposit', this.articleValidation.depositArticle, this.articleController.depositArticle)
  }

  getRouter() {
    return this.router
  }
}