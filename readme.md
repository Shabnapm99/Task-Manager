# Task Manager App - MERN Stack

A simple full-stack task management application built with React for the frontend and Node.js/Express + MongoDB (Mongoose) for the backend. Users can add, edit, delete, and manage tasks in a user-friendly interface.

# Project Overview

The Personal Task Manager is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The application allows users to register, log in securely, and manage their daily tasks through CRUD operations (Create, Read, Update, Delete).

This project demonstrates best practices in full-stack JavaScript development, authentication, API integration, and deployment.

# Live Hosted Links

frontend - https://task-manager-one-mu-56.vercel.app/
backend - https://task-manager-e37o.vercel.app/

# 🚀 Features

- User Registration & Login (JWT Authentication)
- Encrypt password using bcrypt
- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Protected routes
- Responsive user interface

# 🛠️ Tech Stack

## Frontend

- React.js

- Vite

- Axios

- React Router DOM

- CSS / Bootstrap

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt
- CORS

# ⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Shabnapm99/Task-Manager
cd Task-Manager

2️⃣ Install Dependencies
- Backend
cd server
npm install

- Frontend
cd ../client
npm install

3️⃣ Configure Environment Variables

Create a .env file inside the server folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000

Create a .env file inside the client folder and add:

VITE_API_URL=http://localhost:4000/api

4️⃣ Run the Application
Start Backend
cd server
npm run dev
Start Frontend
cd client
npm run dev
🌍 Access the Application

Frontend → http://localhost:5173

Backend → http://localhost:5000

# 🔐 API Endpoints

## Authentication

- POST /api/auth/register – Register user
- POST /api/auth/login – Login user

## Tasks

- GET /api/tasks – Get all tasks
- POST /api/tasks – Create new task
- PUT /api/tasks/:id – Update task
- DELETE /api/tasks/:id – Delete task

## 🧪 Testing

- API tested using Postman
- Frontend tested manually through browser

## 🌍 Deployment

🚀 Deployment (Vercel)

This project is configured for easy deployment on Vercel.

1️⃣ Push to GitHub

Push your complete project (both client and server folders) to a GitHub repository.

2️⃣ Deploy the Backend

- Go to Vercel Dashboard → Click Add New Project
- Import your GitHub repository
- Set the Root Directory to: server
- Add the following Environment Variables in Vercel:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=4000

- Click Deploy
- Vercel will automatically detect the configuration and use the vercel.json file (if provided).
- After deployment, you will get a backend URL like: https://your-backend-name.vercel.app

3️⃣ Deploy the Frontend

- Create another New Project in Vercel
- Import the same GitHub repository
- Set the Root Directory to:
- client
- Add the following environment variable:

VITE_API_URL=https://your-backend-name.vercel.app/api

- Click Deploy