import { ResponseError } from '../error/response.error.js'
import { hash } from 'bcrypt'
import { formatUser, formatUsers } from '../utils/user.util.js'
import userService from '../services/user.service.js'

export default new class UserController {
  constructor() {
    this.userService = userService
  }

  getUsers = async (req, res, next) => {
    try {
      const users = await this.userService.getUsers()
      const formattedUsers = formatUsers(users)
      res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan semua pengguna',
        data: formattedUsers,
      })
    } catch (e) {
      next(e)
    }
  }

  getUserById = async (req, res, next) => {
    try {
      const userId = parseInt(req.params.id)
      const user = await this.userService.getUserById(userId)
      if (!user) throw new ResponseError(404, 'Pengguna tidak ditemukan')
        
      const formattedUser = formatUser(user)
      res.status(200).json({
        success: true,
        message: 'Berhasil mendapatkan pengguna',
        data: formattedUser,
      })
    } catch (e) {
      next(e)
    }
  }

  createUser = async (req, res, next) => {
    try {
      const findUser = await this.userService.getUserByEmail(req.body.email)
      if (findUser) throw new ResponseError(400, 'Email sudah digunakan')

      req.body.password = await hash(req.body.password, 10)
      const user = await this.userService.createUser(req.body)
      const formattedUser = formatUser(user)
      res.status(201).json({
        success: true,
        message: 'Berhasil membuat pengguna',
        data: formattedUser,
      })
    } catch (e) {
      next(e)
    }
  }
}