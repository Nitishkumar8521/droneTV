# 🌟 DroneTV React Developer Assignment  

### 👨‍💻 Submitted by: **Your Full Name**  
📞 **Phone:** +91 XXXXX XXXXX  
🎓 **Education:** B.Tech in Computer Science, [Your College Name], [Year of Graduation]  
📅 **Submission Date:** DD/MM/YYYY  

---

## 🧭 Overview  

This repository contains **two full-stack React projects** built as part of the **DroneTV React Developer Internship Assessment** for **IPAGE UM Services Pvt. Ltd.**  

Both applications are developed using **React (Vite)** and **Express.js**, styled with **Chakra UI**, and use `.env` configuration for flexible deployment.  

---

## 🗂️ Project Structure  

```bash
DroneTV/
│
├── property-listing/ # Assignment 1: Property Listing App
│ ├── frontend/
│ └── backend/
│
└── portfolio-generator/ # Assignment 2: Portfolio Generator App
├── frontend/
└── backend/
```


---

# 🏠 Assignment 1: Property Listing App  

### 🎯 Objective  
Build a React app that fetches, displays, filters, and manages property listings using an Express.js backend API.

---

## ✨ Key Features  
✅ Fetch all properties (GET `/api/properties`)  
✅ Add a new property (POST `/api/properties`)  
✅ Search & filter by name or location  
✅ Modal view for full property details  
✅ Responsive Chakra UI design  
✅ Uses `.env` for backend API base URL  

---

## 💻 Tech Stack  

| Category | Technology Used |
|-----------|----------------|
| Frontend | React (Vite), Chakra UI, Axios, React Router |
| Backend | Node.js, Express.js |
| Styling | Chakra UI |
| State Management | React Hooks |
| API Handling | Axios |
| Environment | .env Configuration |

---

## 🧩 Folder Structure  

```bash
property-listing/
│
├── frontend/
│ ├── src/
│ │ ├── components/ # PropertyCard, PropertyForm, PropertyModal
│ │ ├── pages/ # Home Page
│ │ ├── services/ # Axios setup (api.js)
│ │ └── App.jsx, main.jsx
│ ├── .env # Frontend base URL
│ └── package.json
│
└── backend/
├── server.js # Express server
├── .env # Backend PORT
└── package.json
```

---

## ⚙️ Setup Instructions  

### 🧱 Backend Setup  
```bash
cd property-listing/backend
npm install
echo "PORT=5000" > .env
node server.js
```

### 💡 Frontend Setup
```bash
cd property-listing/frontend
npm install
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
```

### 📸 Screenshots
- #### ➕ Add Product
![App Screenshot]()

- #### 📋 Product List
![App Screenshot]()

- #### 📦 Order List
![App Screenshot]()
