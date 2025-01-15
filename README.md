# Role-Based Authentication System

This project is a role-based authentication system built with Node.js, Express, and Sequelize.


## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Setup

1. Clone the repository

2.  ```sh 
    npm install
    ```

3. Create a `.env` file:
    ```
    PORT=
    JWT_SECRET=
    NODE_ENV=
    DEV_DATABASE_URL=
    ```

4. Run the application:
    ```sh
    npm run dev
    ```
    
5. To run database migrations:
    ```sh
    npx prisma migrate deploy
    ```
