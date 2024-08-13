# Full-Stack Project Setup

## Overview

This project is a full-stack application consisting of:
- **Backend**: Node.js with NestJS framework
- **Frontend**: Angular
- **Database**: MySQL
- **Shared ORM Library**: Contains database models, migrations, serializers, and other entities

## Prerequisites

Make sure you have the following installed:
- Node.js 16+
- npm

## Folder Structure

1. **Backend folder**: Node.js with NestJS framework for backend code.
2. **Frontend folder**: Angular frontend code.
3. **Shared ORM Library folder**: Contains database models and migration files.

## Setup Instructions

### 1. Clone the Repositories

Clone the repositories to your local machine:

```bash
git clone <assessment-repo-url>
```

### 2. Set Up the `shared-orm-library` Project

Navigate to the `shared-orm-library` directory:

```bash
cd shared-orm-library
```

Install the dependencies:

```bash
npm install
```

Apply database migrations:

```bash
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run --dataSource src/orm.config.ts
```

### 3. Set Up the Backend

Navigate to the `backend` directory:

```bash
cd ../backend/backend
```

Install the backend dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run start
```

The backend will be accessible at `http://localhost:3000`.

### 4. Set Up the Frontend

Navigate to the `frontend` directory:

```bash
cd ../frontend/frontendapp
```

Install the frontend dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm run start
```

The frontend will be accessible at `http://localhost:4200`. (If it does not run in a normal Chrome browser, try using incognito mode as there might be a CORS issue from the backend.)

### 5. Configure MySQL

Ensure MySQL is installed and running. Create a database named `My-account` using DBeaver or any other tool of your choice. Verify and configure MySQL settings in the `shared-orm-library` if needed.

### 6. Verify the Setup

- **Backend**: Access the API at `http://localhost:3000/users/` to ensure it returns a list of users.
- **Frontend**: Access the Angular application at `http://localhost:4200/user` and confirm it displays the user list fetched from the backend.

**Remember to add user data manually in the database:**

```sql
INSERT INTO `user` (`firstName`, `lastName`, `email`, `password`)
VALUES 
('John', 'Doe', 'john.doe@example.com', 'securepassword123'),
('Jane', 'Smith', 'jane.smith@example.com', 'anothersecurepassword456'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'yetanotherpassword789');
```
```