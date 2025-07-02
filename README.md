# ⚡️ Uptime Ninja

A powerful, full-stack **website uptime monitoring platform**, built with Next.js (TypeScript), Express.js (TypeScript), and PostgreSQL (via Prisma).  

> 🚀 Monitor your sites. Get instant alerts. Stay one step ahead!

---

## ✨ Features

- ✅ **URL Monitoring** — Add and manage multiple websites to track.
- 📡 **Scheduled Health Checks** — Automatic periodic checks using Node cron.
- ⚡ **Status Detection** — HTTP status code monitoring, response time tracking, and error detection.
- 📧 **Email Alerts** — Get notified when a site goes down or comes back online.
- 📈 **Response Time Analytics** — View historical performance data.
- 🌐 **Public Status Page** — Share your uptime data transparently.
- 🔒 **Dashboard Authentication** — Secure your monitoring dashboard.

---

## 🧑‍💻 Tech Stack

### 🌟 Frontend

- **Next.js** (TypeScript)
- Tailwind CSS & Shadcn UI
- Framer Motion (animations)

### ⚙ Backend

- **Express.js** (TypeScript)
- Node cron (for scheduling checks)
- Nodemailer (email notifications)
- Prisma ORM

### 🗄 Database

- PostgreSQL
- Prisma Client & Migrations

---

## 🗂️ Monorepo Structure

/frontend # Next.js application (dashboard, status pages, UI)
/server # Express API server (scheduler, health checks, alerts)


---

## ⚙️ Setup & Installation

### 1️⃣ Clone this repository

```bash
git clone https://github.com/your-username/uptime-ninja.git

cd uptime-ninja
```
### 2️⃣ Install dependencies
```bash
Copy code
# For frontend
cd frontend
yarn install


# For server
cd ../server
yarn install

```
### 3️⃣ Configure environment variables
Frontend (frontend/.env.local)
```ini Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000/api
CLERK_PUBLISHABLE_KEY=your_clerk_key
```
Server (server/.env)
```ini Copy code
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
FRONTEND_URL=http://localhost:3000

```
### 4️⃣ Run database migrations
```bash
Copy code
cd server
npx prisma migrate dev
```
### 5️⃣ Start both apps
Start frontend
```bash
Copy code
cd frontend
yarn dev
```
Start backend server
```bash Copy code
cd ../server
yarn dev


```
💡 Scripts
 Command         | Location         | Description
----------------------|------------------|--------------------------------------------
`yarn dev`            | frontend/server | Start dev server (watch mode)
`yarn build`          | frontend        | Build Next.js for production
`yarn start`          | frontend/server | Start production build
`npx prisma`         | server          | Prisma CLI commands
