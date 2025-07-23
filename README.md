# 💸 Wallet – Full-Stack Expense Tracker App

A modern cross-platform mobile app for tracking expenses, built with **React Native**, **Expo**, **Express.js**, and **PostgreSQL**.

> ✅ Supports Android & iOS | 🔐 Auth with Clerk | ☁️ Backend on Render | 🛡️ Rate Limited with Redis

---

## 🚀 Features

- 🔐 **Authentication** with Clerk (email + password + email verification)
- 📦 **Full-Stack App**: React Native frontend + Express backend + PostgreSQL database
- 🔧 **Raw SQL Queries** (no ORM) for direct control and learning
- 🛡️ **Rate Limiting** using Upstash Redis middleware
- ☁️ **Backend Deployment** on Render with cron-based keep-alive
- 📱 **Cross-platform UI** built with Expo & React Native
- 🔁 **Pull-to-refresh**, FlatList, and keyboard-aware scrolling
- 📁 **Organized Folder Structure** for scalability and maintainability

---

## 🖼️ Screens

- 📲 **Sign Up**
- 🔐 **Login**
- ✅ **Email Verification**
- 🏠 **Home** (Balance + Transactions)
- ➕ **Create Transaction**

---

## 🧱 Tech Stack

### 🖥️ Frontend
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Clerk React Native SDK](https://clerk.dev/docs/react-native)
- FlatList, custom hooks, refresh control, keyboard-aware scroll view

### 🔧 Backend
- [Express.js (v4)](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/) (hosted on [Neon](https://neon.tech/))
- Raw SQL (no ORM like Prisma or Sequelize)
- [Upstash Redis](https://upstash.com/) for rate limiting
- [Render](https://render.com/) for cloud hosting
- `cron` job for backend keep-alive
- Environment variables managed via `dotenv`

## ⚙️ Setup Instructions

### 🔙 Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Add environment variables to a .env file
DATABASE_URL=your_postgres_url
REDIS_URL=your_upstash_url

# Start the backend server
npm run dev 
```

### 📱 Frontend

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Configure Clerk credentials
# Update ClerkProvider with frontendApi and publishableKey

# Start app
npx expo start
```

## 📸 Demo

<p align="center">
  <img src="https://github.com/user-attachments/assets/c1759122-b148-477f-9736-b1c6cff6bce9" width="220" height="470" />
  <img src="https://github.com/user-attachments/assets/e0fe06bb-78a1-4fc4-aeae-1b81ea303f24" width="220" height="470" />
  <img src="https://github.com/user-attachments/assets/8b35c119-6ef5-444e-821e-a4fd1a29da26" width="220" height="470" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1177b6d7-5587-4e39-9110-0a400817d4bf" width="220" height="470" />
  <img src="https://github.com/user-attachments/assets/c13fa7ec-a312-4284-9dc3-d74bd1fae509" width="220" height="470" />
  <img src="https://github.com/user-attachments/assets/d8238765-36fc-4c69-a035-a451678a7037" width="220" height="470" />
</p>

<p align="center">
  <em>Figure: Screenshots of Wallet app – login, dashboard, transactions, and more.</em>
</p>

## 🙌 Acknowledgements

- [Clerk.dev](https://clerk.dev/) – Authentication platform
- [Render.com](https://render.com/) – Free backend hosting
- [Neon.tech](https://neon.tech/) – Serverless PostgreSQL hosting
- [Upstash Redis](https://upstash.com/) – Rate limiting and Redis on the edge
- [Expo](https://expo.dev/) – Build once, deploy everywhere

---

> _Built with ❤️ to learn and teach full-stack mobile development._
