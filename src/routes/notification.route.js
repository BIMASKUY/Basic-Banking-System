import { Router } from 'express'
import notificationController from '../controllers/notification.controller.js'

export default new class NotificationRoutes {
    constructor() {
        this.router = Router()
        this.notificationController = notificationController
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.notificationController.getNotifications)
    }

    getRouter() {
        return this.router
    }
}