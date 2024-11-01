import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { ResponseError } from '../error/response.error.js'
dotenv.config()

export default new class AuthMiddleware {
	loggedIn = (req, res, next) => {
	  try {
	    const { authorization } = req.headers
	    if (!authorization) throw new ResponseError(401, 'Login diperlukan')
					
	    const token = authorization.split(' ')[1]
	    if (!token) throw new ResponseError(401, 'Token tidak ditemukan')

	    const secret = process.env.JWT_SECRET
	    const jwtPayload = jwt.verify(token, secret)
	    req.userId = jwtPayload.id
	    next()
	  }
	  catch (e) {
	    next(e)
	  }
	}

	guest = (req, res, next) => {
	  try {
	    const { authorization } = req.headers
	    if (authorization) throw new ResponseError(403, 'Anda sudah login')
	    next()
	  }
	  catch (e) {
	    next(e)
	  }
	}
}