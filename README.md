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

3. Create a `.env` file and fill these values:
    ```
    PORT=
    JWT_SECRET=
    DEV_DATABASE_URL= 
    ```

    `DEV_DATABASE_URL` looks like `"postgresql://username:password@localhost:5432/DB-NAME?schema=public"`

4. To run database migrations:
    ```sh
    npx prisma migrate dev
    ```

5. First seed data into database easily with command so that you can call the /auth/login endpoint:
    ``` 
    npx prisma db seed
    ```

6. Run the application:
    ```sh
    npm run dev
    ```
    

### Database structure
To loadup a graphical representation of the database design, run:

```
npm run studio
```

### Steps to test
1. Seed data

2. Login in with seeded users

3. Try accessing protected routes