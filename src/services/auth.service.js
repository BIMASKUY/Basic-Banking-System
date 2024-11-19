import { generateToken } from '../configs/jwt.config.js'

export default new class AuthService {
	getTokenByLogin(user) {
		const payload = {
			id: user.id
		}
		return generateToken(payload, '1d')
	}

	getTokenByForgotPassword(user) {
		const payload = {
			email: user.email
		}
		return generateToken(payload, '5m')
	}
}