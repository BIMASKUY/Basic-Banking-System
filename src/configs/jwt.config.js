import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateToken = (payload, times) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: times });
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}