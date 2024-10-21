# Transaction API Spec

## Create Transaction API

Endpoint : POST /api/v1/transactions

Request Body : 

```json
{
    "sourceAccountId": 4,
    "amount": 10000,
    "destinationAccountId": 5
}
```

Reponse Body Success : 

```json
{
    "success": true,
    "message": "Berhasil membuat transaksi",
    "data": {
        "sourceAccount": {
            "name": "mughie",
            "email": "mughie@gmail.com",
            "bankName": "BRI",
            "bankAccountNumber": "12345678",
            "balance": 40000
        },
        "destinationAccount": {
            "name": "bima",
            "email": "bima@gmail.com",
            "bankName": "BCA",
            "bankAccountNumber": "87654321",
            "balance": 0
        },
        "amount": 10000
    }
}
```
Response Body Error : 

```json
{
    "success": false,
    "message": "Akun sumber tidak ditemukan",
    "data": {}
}
```

## Get Transactions API

Endpoint : GET /api/v1/transactions

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan semua transaksi",
    "data": [
        {
            "sourceAccount": {
                "name": "mughie",
                "email": "mughie@gmail.com",
                "bankName": "BRI",
                "bankAccountNumber": "12345678",
                "balance": 30000
            },
            "destinationAccount": {
                "name": "bima",
                "email": "bima@gmail.com",
                "bankName": "BCA",
                "bankAccountNumber": "87654321",
                "balance": 10000
            },
            "amount": 10000
        }
    ]
}
```

## Get Transaction API

Endpoint : GET /api/v1/transactions/:id

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan transaksi",
    "data": {
        "sourceAccount": {
            "name": "mughie",
            "email": "mughie@gmail.com",
            "bankName": "BRI",
            "bankAccountNumber": "12345678",
            "balance": 30000
        },
        "destinationAccount": {
            "name": "bima",
            "email": "bima@gmail.com",
            "bankName": "BCA",
            "bankAccountNumber": "87654321",
            "balance": 10000
        },
        "amount": 10000
    }
}
```

Response Body Error : 

```json
{
    "success": false,
    "message": "Transaksi tidak ditemukan",
    "data": {}
}
```