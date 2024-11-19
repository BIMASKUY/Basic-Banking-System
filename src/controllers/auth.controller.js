import { ResponseError } from '../error/response.error.js'
import { formatUser } from '../utils/user.util.js'
import authService from '../services/auth.service.js'
import userService from '../services/user.service.js'
import bcrypt from 'bcrypt'
import { sendResetPasswordVerification } from '../configs/nodemailer.config.js'
import { verifyToken } from '../configs/jwt.config.js'
import { io } from '../configs/socket.js'

export default new class AuthController {
  constructor() {
    this.authService = authService
    this.userService = userService
  }

  loginAuth = async (req, res, next) => {
    try {
      const user = await this.userService.getUserByEmail(req.body.email)
      if (!user) throw new ResponseError(401, 'Email atau password salah')

      const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
      if (!isPasswordMatch) throw new ResponseError(401, 'Email atau password salah')

      const token = this.authService.getTokenByLogin(user, '1d')
      io.emit('notif', `Halo ${user.name}`)
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

  registerAuth = async (req, res, next) => {
    try {
      const existingUser = await this.userService.getUserByEmail(req.body.email)
      if (existingUser) throw new ResponseError(400, 'Email sudah terdaftar')

      req.body.password = await bcrypt.hash(req.body.password, 10)
      const user = await this.userService.createUser(req.body)
      const formattedUser = formatUser(user)
      io.emit('notif', `Welcome ${user.name}`)
      res.status(201).json({
        success: true,
        message: 'Berhasil membuat user',
        data: formattedUser
      })
    } catch (e) {
      next(e)
    }
  }

  forgotPasswordAuth = async (req, res, next) => {
    try {
      const user = await this.userService.getUserByEmail(req.body.email)
      if (!user) throw new ResponseError(404, 'User tidak ditemukan')

      const token = this.authService.getTokenByForgotPassword(user)
      sendResetPasswordVerification(user.email, token)
      io.emit('notif', 'Reset password telah dikirim ke email anda')
      res.status(200).json({
        success: true,
        message: 'Reset password telah dikirim ke email anda',
        data: {
          token
        }
      })
    } catch (e) {
      next(e)
    }
  }

  resetPasswordAuth = async (req, res, next) => {
    try {
      const jwtPayload = verifyToken(req.params.token)
      const userEmail = jwtPayload.email
      const user = await this.userService.getUserByEmail(userEmail)
      if (!user) throw new ResponseError(404, 'User tidak ditemukan')

      req.body.password = await bcrypt.hash(req.body.password, 10)
      const updatedUser = await this.userService.updatePasswordById(user.id, req.body.password)
      const formattedUser = formatUser(updatedUser)
      io.emit('notif', 'Berhasil mereset password')
      res.status(200).json({
        success: true,
        message: 'Berhasil mereset password',
        data: formattedUser
      })
    } catch (e) {
      next(e)
    }
  }
}