export const formatTransaction = (transaction) => {
    return {
        sourceAccount: {
            name: transaction.sourceAccount.user.name,
            email: transaction.sourceAccount.user.email,
            bankName: transaction.sourceAccount.bankName,
            bankAccountNumber: transaction.sourceAccount.bankAccountNumber,
            balance: transaction.sourceAccount.balance
        },
        destinationAccount: {
            name: transaction.destinationAccount.user.name,
            email: transaction.destinationAccount.user.email,
            bankName: transaction.destinationAccount.bankName,
            bankAccountNumber: transaction.destinationAccount.bankAccountNumber,
            balance: transaction.destinationAccount.balance
        },
        amount: transaction.amount
    }
}

export const formatTransactions = (transaction) => {
    return transaction.map(formatTransaction)
}