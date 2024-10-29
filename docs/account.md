# Account API Spec

## Create Account API

Endpoint : POST /api/v1/accounts

Headers :
- Authorization : token

Request Body : 

```json
{
    "bankName": "BRI",
    "bankAccountNumber": "12345678"
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
        "balance": 0
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

Headers :
- Authorization : token

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan semua akun",
    "data": [
        {
            "bankName": "BRI",
            "bankAccountNumber": "12345678",
            "balance": 30000
        }
    ]
}
```

## Get Account API

Endpoint : GET /api/v1/accounts/:id

Headers :
- Authorization : token

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan akun",
    "data": {
        "bankName": "BRI",
        "bankAccountNumber": "12345678",
        "balance": 0
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

Headers :
- Authorization : token

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
        "balance": 50000
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

Headers :
- Authorization : token

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
        "balance": 40000
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