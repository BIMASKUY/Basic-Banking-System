# Basic Banking System API

Projek Studi Independen Backend Binar Academy

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