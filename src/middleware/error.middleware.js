import { ResponseError } from "../error/response.error.js"

export const errorMiddleware = (err, req, res, next) => {
    if (!err) {
        next()
        return
    }

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            success: false,
            message: err.message,
            data: {}
        })
    }
    else {
        res.status(500).json({
            success: false,
            messages: err.message,
            data: {}
        })
    }
}