import { Router } from 'express'

import { 
    get
} from '../controllers/user.controller.js'

const userRoutes = Router()

userRoutes.get('/', get)

export { userRoutes }