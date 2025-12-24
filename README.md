# 🚀 BeyondChats Article Enhancer

An end-to-end full-stack application that fetches original articles from the database, enhances them using AI (Gemini), and displays both original and enhanced versions in a clean frontend UI.

Built using **Laravel (Backend API)** + **React (Frontend)** + **Node.js (AI Service)**.

---

## 📌 Features

- Fetch original articles stored in the database
- Enhance articles using AI (Gemini API)
- View original & enhanced content side-by-side
- Robust error handling for API failures
- Clean dark-mode UI
- Modular and scalable architecture

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)

**Backend**
- Laravel (REST APIs)
- SQLite

**AI Service**
- Node.js
- Gemini API (Google)

---

## ⚙️ Local Setup Instructions

Follow these steps to run the project locally:

---

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd beyondchats-article-enhancer
```

### 2️⃣ Backend Setup (Laravel API)
```bash
cd laravel-api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
***📍 Backend will run at:***
```bash 
http://127.0.0.1:8000 
```

### 3️⃣ AI Service Setup (Node + Gemini)
```bash
cd backend-script
npm i
```

***Create .env file :*** GEMINI_API_KEY=your_gemini_api_key

***Start server :*** node index.js

### 4️⃣ Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev
```
***📍 Frontend will run at:***
```bash
http://localhost:5173
```

## 🏗️ System Architecture / Data Flow

The system follows a **service-oriented architecture** with a dedicated AI service for content enhancement.

<table>
<tr>
<td width="25%" align="center" style="background:#1f2937;color:white;padding:14px;border-radius:10px">

### 🎨 Frontend  
**React + Vite**

UI Rendering  
User Interaction  
Axios API Calls  

</td>

<td width="25%" align="center" style="background:#111827;color:white;padding:14px;border-radius:10px">

### 🧠 Backend  
**Laravel API**

Business Logic  
Data Validation  
API Orchestration  

</td>

<td width="25%" align="center" style="background:#312e81;color:white;padding:14px;border-radius:10px">

### 🤖 AI Service  
**Node.js + Gemini**

Prompt Construction  
AI Enhancement  
Secure API Keys  

</td>

<td width="25%" align="center" style="background:#064e3b;color:white;padding:14px;border-radius:10px">

### 🗄️ Database  
**SQLite**

Original Articles  
Enhanced Articles  

</td>
</tr>
</table>

---

### 🔄 Data Flow Overview

```text
User
 │
 ▼
React Frontend
 │  (Axios HTTP)
 ▼
Laravel Backend API
 │
 ├── Fetch / Store Articles (Database)
 │
 └── Send Article Content
        │
        ▼
   Node.js AI Service
        │
        ▼
     Gemini LLM
        │
        ▼
   Enhanced Article Content
```


## 🌐 Live Frontend Link

👉 **Live Demo:** https://your-frontend-deployment-link.vercel.app


### ⚠️ Important Note (Please Read)

Before accessing the enhanced article content on the frontend, make sure the **backend services are running locally**.

#### Required Services:
***Laravel API*** 
  ```bash
  php artisan serve
 ```

### 📌 Content Enhancement Behavior (Important)

The frontend fetches article data **exclusively through the Laravel API**.  
AI-enhanced content is generated **on demand** via a dedicated **Node.js (Gemini) service** and then stored in the database.

As per the assignment requirements:

- **Only articles that have been enhanced using the Node.js (Gemini) service will display updated (AI-enhanced) content**
- Articles that were previously stored in the database but **not passed through the AI enhancement flow** will show only their original content
- AI processing is applied **only to newly requested or explicitly enhanced articles**, not retroactively to all existing records

This design ensures controlled AI usage, avoids unnecessary reprocessing, and aligns strictly with the assignment specification.
