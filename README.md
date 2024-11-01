# Basic Banking System API

Projek Studi Independen Backend Binar Academy

## Rest API Documentation

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/34436900-23c96ab4-7553-4ce2-8df3-00f5fabdb280?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D34436900-23c96ab4-7553-4ce2-8df3-00f5fabdb280%26entityType%3Dcollection%26workspaceId%3D5063d929-7c2d-4e4d-ad2b-49d834ed6db1)

## Fitur

- User
- Account
- Transaction
- Auth

## Teknologi yang Digunakan

- **Node.js** - Backend runtime environment
- **Express.js** - Framework backend for javascript
- **PostgreSQL** - SQL database
- **Prisma** - ORM database
- **Joi** - Javascript validation
- **JWT** - Stateless authentication

## Instalasi

1. Clone the repository

   ```bash
   git clone https://github.com/BIMASKUY/Basic-Banking-System.git
   ```

2. Change directory to the project

   ```bash
   cd Basic-Banking-System
   ```

3. Install dependencies

   ```bash
   npm i
   ```

4. Create a copy of the `.env.example` file and name it `.env.local`. Make sure to fill the credentials correctly.

   ```bash
   cp .env.example .env.local
   ```

5. Run migrations

   ```bash
   npm run db:migrate
   ```

6. Run the app

   ```bash
   npm run dev
   ```