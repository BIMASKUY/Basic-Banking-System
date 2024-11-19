import { getFile } from "../utils/notification.util.js"

export default new class UserController {
  getNotifications = async (req, res, next) => {
    const fileName = 'index.html'
    const file = getFile(fileName)
    console.log(file)
    res.sendFile(file)
  }
}