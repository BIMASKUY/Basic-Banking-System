export const formatAccount = (account) => {
    return {
        bankName: account.bankName,
        bankAccountNumber: account.bankAccountNumber,
        balance: account.balance,
        user: {
            name: account.user.name,
            email: account.user.email
        }
    }
}

export const formatAccounts = (accounts) => {
    return accounts.map(formatAccount)
}