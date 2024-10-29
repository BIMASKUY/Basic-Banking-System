import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default new class AuthService {
	generateToken(user) {
		const payload = {
			id: user.id
		}
		return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
	}

	verifyToken(token) {
		try {
			return jwt.verify(token, process.env.JWT_SECRET)
		} catch (error) {
			throw new Error('Invalid token')
		}
	}
}