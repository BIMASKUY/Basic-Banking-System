# User API Spec

## Create User API

Endpoint : POST /api/v1/users

Request Body : 

```json
{
  "name": "mughie",
  "email": "mughie@gmail.com",
  "password": "mughie123",
  "identityType": "KTP",
  "identityNumber": "3201010101010001",
  "address": "Jl. Merdeka No. 123, Jakarta, Indonesia"
}
```

Reponse Body Success : 

```json
{
  "success": true,
  "message": "Berhasil membuat pengguna",
  "data": {
    "email": "mughie@gmail.com",
    "name": "mughie",
    "profile": {
        "identityType": "KTP",
        "identityNumber": "3201010101010001",
        "address": "Jl. Merdeka No. 123, Jakarta, Indonesia"
    }
  }
}
```
Response Body Error : 

```json
{
  "success": false,
  "message": "Email sudah digunakan",
  "data": {}
}
```

## Get Users API

Endpoint : GET /api/v1/users

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan semua pengguna",
    "data": [
        {
            "email": "mughie@gmail.com",
            "name": "mughie",
            "profile": {
                "identityType": "KTP",
                "identityNumber": "3201010101010001",
                "address": "Jl. Merdeka No. 123, Jakarta, Indonesia"
            }
        },
        {
            "email": "bima@gmail.com",
            "name": "bima",
            "profile": {
                "identityType": "KTP",
                "identityNumber": "2234019283013412",
                "address": "Jl. Anggrek Bandung, Indonesia"
            }
        }
    ]
}
```

## Get User API

Endpoint : GET /api/v1/users/:id

Response Body Success : 

```json
{
    "success": true,
    "message": "Berhasil mendapatkan pengguna",
    "data": {
        "email": "bima@gmail.com",
        "name": "bima",
        "profile": {
            "identityType": "KTP",
            "identityNumber": "2234019283013412",
            "address": "Jl. Anggrek Bandung, Indonesia"
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