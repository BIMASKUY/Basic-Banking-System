import readline from 'readline'
import { delay } from './banking_system.js'

class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }
}

class BankAccount extends User {
    constructor(id, name) {
        super(id, name)
        this.balance = 0
    }

    async deposit(amount) {
        if (amount <= 0) throw new ResponseError(400, 'Saldo tidak valid')
        await delay()
        this.balance += amount
        return this.balance 
    }

    async withdraw(amount) {
        if (amount <= 0) throw new ResponseError(400, 'Saldo tidak valid')
        if (this.balance < amount) throw new ResponseError(400, 'Saldo tidak cukup')
        await delay()
        this.balance -= amount
        return this.balance
    }

    async getUser() {
        await delay()
        return {
            id: this.id,
            name: this.name
        }
    }

    async getBalance() {
        await delay()
        return this.balance
    }
}

class ResponseError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputRawUser = (query) => {
    return new Promise((resolve) => {
        rl.question(query, resolve)
    })
}

const stopInput = () => {
    rl.close()
}

const stringToNumber = (input) => {
    if (isNaN(input)) throw new ResponseError(400, 'Input harus berupa angka')
    return parseInt(input)
}

const isUserExist = (id, Users) => {
    const user = Users.find(user => user.getId() === id)
    return !!user
}

const inputUser = async (Users) => {
    const id = await inputRawUser('Masukkan ID : ')
    const isRegistered = isUserExist(id, Users)
    if (isRegistered) {
        const user = findUser(id, Users)
        return new User(id, user.getId)
    }

    const name = await inputRawUser('Masukkan nama : ')
    return new User(id, name)
}

const userChoice = async () => {
    console.log(`
    Pilihan:
        0. Cek Saldo
        1. Deposit
        2. Withdraw
    `)

    const choice = await inputRawUser('Masukkan pilihan : ')
    const numberChoice = stringToNumber(choice)

    if (numberChoice === 0) return 'balance'
    if (numberChoice === 1) return 'deposit'
    if (numberChoice === 2) return 'withdraw'

    throw new ResponseError(400, 'Pilihan tidak tersedia')
}

const findUser = (id, Users) => {
    return Users.find(user => user.getId() === id)
}

const isRepeat = async () => {
    const repeat = await inputRawUser('Apakah Anda ingin melakukan transaksi lainnya? (y/n) : ')
    if (repeat.toLowerCase() === 'y') return true
    if (repeat.toLowerCase() === 'n') return false
    throw new ResponseError(400, 'Input tidak valid')
}

const usersList = (Users) => {
    const list = Users.map(user => user.getId())
    console.log(`Daftar Pengguna : ${list}`)
}

const taskChoice = async (choice, bankUser) => {
    if (choice === 'balance') {
        const balance = await bankUser.getBalance()
        const response = {
            success: true,
            statusCode: 200,
            message: 'Berhasil mendapatkan saldo',
            data: {
                balance
            }
        }
        console.log(response)
        return bankUser
    }
    if (choice === 'deposit') {
        const stringAmount = await inputRawUser('Masukkan jumlah setoran: ')
        const numberAmount = stringToNumber(stringAmount)
        const balance = await bankUser.deposit(numberAmount)
        const response = {
            success: true,
            statusCode: 200,
            message: 'Berhasil melakukan setoran',
            data: {
                balance
            }
        }
        console.log(response)
        return bankUser
    }
    if (choice === 'withdraw') {
        const stringAmount = await inputRawUser('Masukkan jumlah penarikan: ')
        const numberAmount = stringToNumber(stringAmount)
        const balance = await bankUser.withdraw(numberAmount)
        const response = {
            success: true,
            statusCode: 200,
            message: 'Berhasil melakukan penarikan',
            data: {
                balance
            }
        }
        console.log(response)
        return bankUser
    }

    throw new ResponseError(400, 'Pilihan tidak tersedia')
}

export { BankAccount, ResponseError, inputUser, isUserExist, findUser, userChoice, taskChoice, isRepeat, stopInput, usersList}