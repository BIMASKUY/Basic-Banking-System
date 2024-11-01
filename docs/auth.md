# Auth API Spec

## Register Auth API

Endpoint : POST /api/v1/auth/register

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

## Login Auth API

Endpoint : GET /api/v1/auth/login

Response Body Success : 

```json
{
    "success": true,
    "message": "Login berhasil",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzMwMjg3MzA4LCJleHAiOjE3MzAzNzM3MDh9.b5SaUHlXfqwQIcTJvPhxo7RadBJ9rDl1lzSFXJXGW4U"
    }
}
```

Response Body Error : 

```json
{
    "success": false,
    "message": "Email atau password salah",
    "data": {}
}
```