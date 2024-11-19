import { ResponseError } from '../error/response.error.js'
import { verifyToken } from '../configs/jwt.config.js'

export default new class AuthMiddleware {
	loggedIn = (req, res, next) => {
	  try {
	    const { authorization } = req.headers
	    if (!authorization) throw new ResponseError(401, 'Login diperlukan')
					
	    const token = authorization.split(' ')[1]
	    if (!token) throw new ResponseError(401, 'Token tidak ditemukan')

	    const jwtPayload = verifyToken(token)
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