import { ResponseError } from '../error/response.error.js'
import { formatUser } from '../utils/user.util.js'
import authService from '../services/auth.service.js'
import userService from '../services/user.service.js'
import bcrypt from 'bcrypt'

export default new class AuthController {
  constructor() {
    this.authService = authService
    this.userService = userService
  }

  login = async (req, res, next) => {
    try {
      const user = await this.userService.getUserByEmail(req.body.email)
      if (!user) throw new ResponseError(400, 'Email atau password salah')

      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordMatch) throw new ResponseError(400, 'Email atau password salah')

      const token = this.authService.generateToken(user)
      res.status(200).json({
        success: true,
        message: 'Login berhasil',
        data: {
          token
        }
      })
    } catch (e) {
      next(e)
    }
  }

  register = async (req, res, next) => {
    try {
      const existingUser = await this.userService.getUserByEmail(req.body.email)
      if (existingUser) throw new ResponseError(400, 'Email sudah terdaftar')

      const user = await this.userService.createUser(req.body)
      const formattedUser = formatUser(user)
      res.status(201).json({
        success: true,
        message: 'Berhasil membuat user',
        data: formattedUser
      })
    } catch (e) {
      next(e)
    }
  }
}