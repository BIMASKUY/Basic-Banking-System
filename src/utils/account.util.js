export const formatAccount = (account) => {
    return {
        bankName: account.bankName,
        bankAccountNumber: account.bankAccountNumber,
        balance: account.balance
    }
}

export const formatAccounts = (accounts) => {
    return accounts.map(formatAccount)
}