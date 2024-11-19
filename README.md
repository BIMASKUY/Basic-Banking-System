# Basic Banking System API

Projek Studi Independen Backend Binar Academy

## Fitur

- User
- Account
- Transaction
- Auth
- Article

## Teknologi yang Digunakan

- **Node.js** - Backend runtime environment
- **Express.js** - Framework backend for javascript
- **PostgreSQL** - SQL database
- **Prisma** - ORM database
- **Joi** - Javascript validation
- **JWT** - Stateless authentication
- **Multer** - File upload
- **Morgan** - Logger
- **Bcrypt** - Hash password
- **Imagekit** - Cloud image
- **Swagger** - UI Documentation
- **Nodemailer** - Email
- **Socket.io** - Realtime notification
- **Sentry** - Production report

## Instalasi Lokal

1. Clone the repository

   ```bash
   git clone https://github.com/BIMASKUY/Basic-Banking-System.git
   ```

2. Change directory to the project

   ```bash
   cd f-bee24001186-km7-brr-basic-banking-system
   ```

3. Install dependencies

   ```bash
   npm i
   ```

4. Create a copy of the `.env.example` file and name it `.env`. Make sure to fill the credentials correctly.

   ```bash
   cp .env.sample .env
   ```

5. Run migrations

   ```bash
   npx prisma migrate dev
   ```

6. Run the app

   ```bash
   npm run dev
   ```
