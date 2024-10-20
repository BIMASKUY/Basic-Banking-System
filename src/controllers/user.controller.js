import { ResponseError } from '../error/response.error.js';
import { hash } from 'bcrypt';
import { formatUser, formatUsers, formatWithProfileUser } from '../utils/user.util.js';

import { 
    getUsers,
    getUserByEmail,
    createUser,
    getUserWithProfileById
} from '../services/user.service.js'

export const getAll = async (req, res, next) => {
  try {
    const users = await getUsers();
    const formattedUsers = formatUsers(users)

    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan users',
      data: formattedUsers
    });
  } catch (e) {
    next(e)
  }
}

export const getOne = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await getUserWithProfileById(userId);
    if (!user) throw new ResponseError(404, 'User tidak ditemukan');
    console.log(user)

    const formattedUser = formatWithProfileUser(user)

    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan user',
      data: formattedUser
    });
  } catch (e) {
    next(e)
  }
}

export const create = async (req, res, next) => {
  try {
    const findUser = await getUserByEmail(req.body.email)
    if (findUser) throw new ResponseError(400, 'Email sudah digunakan')
    
    req.body.password = await hash(req.body.password, 10)
    const user = await createUser(req.body)
    const formattedUser = formatWithProfileUser(user)

    res.status(201).json({
      success: true,
      message: 'Berhasil membuat user',
      data: formattedUser
    })
  } catch (e) {
    next(e)
  }
}