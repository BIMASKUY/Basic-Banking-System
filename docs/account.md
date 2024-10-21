# Account API Spec

## Create Account API

Endpoint : POST /api/v1/accounts

Request Body : 

```json
{
    "bankName": "BRI",
    "bankAccountNumber": "12345678",
    "userId": 9
}
```

Reponse Body Success : 

```json
{
    "success": true,
    "message": "Berhasil membuat akun",
    "data": {
        "bankName": "BRI",
        "bankAccountNumber": "12345678",
        "balance": 0,
        "user": {
            "name": "mughie",
            "email": "mughie@gmail.com"
        }
    }
}
```
Response Body Error : 

```json
{
    "success": false,
    "message": "Pengguna tidak ditemukan",
    "data": {}
}
```

## Get Accounts API

Endpoint : GET /api/v1/accounts

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan semua akun",
    "data": [
        {
            "bankName": "BRI",
            "bankAccountNumber": "12345678",
            "balance": 0,
            "user": {
                "name": "mughie",
                "email": "mughie@gmail.com"
            }
        },
        {
            "bankName": "BCA",
            "bankAccountNumber": "87654321",
            "balance": 0,
            "user": {
                "name": "bima",
                "email": "bima@gmail.com"
            }
        }
    ]
}
```

## Get Account API

Endpoint : GET /api/v1/accounts/:id

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan akun",
    "data": {
        "bankName": "BRI",
        "bankAccountNumber": "12345678",
        "balance": 0,
        "user": {
            "name": "mughie",
            "email": "mughie@gmail.com"
        }
    }
}
```

Response Body Error : 

```json
{
    "success": false,
    "message": "Akun tidak ditemukan",
    "data": {}
}
```

## Deposit Account API

Endpoint : POST /api/v1/accounts/:id/deposit

Request Body : 

```json
{
    "amount": 50000
}
```

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil melakukan setoran",
    "data": {
        "bankName": "BRI",
        "bankAccountNumber": "12345678",
        "balance": 50000,
        "user": {
            "name": "mughie",
            "email": "mughie@gmail.com"
        }
    }
}
```

Response Body Error : 

```json
{
    "success": false,
    "message": "\"amount\" must be greater than or equal to 10000",
    "data": {}
}
```

## Withdraw Account API

Endpoint : POST /api/v1/accounts/:id/withdraw

Request Body : 

```json
{
    "amount": 10000
}
```

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil melakukan penarikan",
    "data": {
        "bankName": "BRI",
        "bankAccountNumber": "12345678",
        "balance": 40000,
        "user": {
            "name": "mughie",
            "email": "mughie@gmail.com"
        }
    }
}
```

Response Body Error : 

```json
{
    "success": false,
    "message": "Saldo tidak cukup",
    "data": {}
}
```