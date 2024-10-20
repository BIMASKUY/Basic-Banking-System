import dotenv from 'dotenv'
import express from 'express'
import { userRoutes } from './routes/user.route.js'
import morgan from 'morgan'
import { errorMiddleware } from './middleware/error.middleware.js'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())

app.use(morgan('dev'))
app.use('/api/v1/users', userRoutes)
app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})