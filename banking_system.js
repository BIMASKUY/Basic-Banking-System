import { BankAccount, ResponseError, inputUser, isUserExist, findUser, userChoice, taskChoice, isRepeat, stopInput, usersList } from './bank_account.js'

export const delay = () => {
    const min = 1000
    const max = 3000
    const ms = Math.floor(Math.random() * (max - min + 1)) + min
    return new Promise(resolve => setTimeout(resolve, ms))
}

const Users = []

async function main () {
    while (true) {
        try {
            usersList(Users)
            const user = await inputUser(Users)
            const isRegistered = isUserExist(user.getId(), Users)
            let bankUser
            if (!isRegistered) bankUser = new BankAccount(user.getId(), user.getName())
            else bankUser = findUser(user.getId(), Users)

            const choice = await userChoice()
            const updatedUser = await taskChoice(choice, bankUser)
            Users.push(updatedUser)

            const repeat = await isRepeat()
            if (!repeat) break
        }
        catch (e) {
            if (e instanceof ResponseError) {
                const error = {
                    success: false,
                    statusCode: e.statusCode,
                    message: e.message
                }
                console.log(error)
            } else {
                const error = {
                    success: false,
                    statusCode: 500,
                    message: 'Terjadi kesalahan pada server'
                }
                console.log(error)
            }
        }
    }
    stopInput()
}

main()