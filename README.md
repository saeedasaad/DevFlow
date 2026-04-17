# DevFlow — AI-Powered Task Manager

A full-stack task management application built with 
the MERN stack, featuring AI-powered smart suggestions, 
role-based access control, and real-time analytics.

## Features
- JWT Authentication with role-based access (Admin, Member)
- Smart task suggestions powered by AI
- Priority auto-detection based on deadlines
- Analytics dashboard with productivity charts
- Protected routes and secure API endpoints

## Tech Stack
| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| HTTP Client | Axios |
| Deployment | Vercel (frontend), Render (backend) |

## Project Structure

```
devflow/
├── backend/
│   ├── config/          → Database connection
│   ├── controllers/     → Business logic
│   ├── middleware/      → Auth protection
│   ├── models/          → MongoDB schemas
│   ├── routes/          → API endpoints
│   └── server.js        → Entry point
│
└── frontend/
└── src/
├── components/  → Reusable UI components
├── context/     → AuthContext global state
├── pages/       → LoginPage, Dashboard, Register
├── services/    → Axios API calls
└── App.jsx      → Routes setup
```
## Setup Instructions

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create `.env` in backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```

## Current Status
-  Backend authentication complete
-  Frontend structure and routing complete
-  Login form API connection in progress
-  AI integration coming soon
-  Analytics dashboard coming soon

