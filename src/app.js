import { initSentry } from './configs/sentry.config.js'
import * as Sentry from '@sentry/node'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { errorMiddleware } from './middleware/error.middleware.js'
import appRoutes from './routes/index.js'
import cors from 'cors'
import { server, app } from './configs/socket.js'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

initSentry()
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/api/v1', appRoutes.getRouter())
Sentry.setupExpressErrorHandler(app) //make sure above errorMiddleware
app.use(errorMiddleware)

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})