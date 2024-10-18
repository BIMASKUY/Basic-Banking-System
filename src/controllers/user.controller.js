// import { ResponseError } from '../error/response.error';

import { 
    getUsers
} from '../services/user.service.js'


export const get = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan users',
      data: users
    });
  } catch (e) {
    next(e)
  }
}