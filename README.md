# 🌟 DroneTV React Developer Assignment  

### 👨‍💻 Submitted by: Nitish Kumar Singh 
📞 **Phone:** +91 73670 95470 <br />
🎓 **Education:** B.Tech in Computer Science, [Nalanda College of Engineering, Chandi], [Year of Graduation:May 2025]  

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
- ####  📦 Home Page
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/property-listing/frontend/screenshots/home.jpg?raw=true)

- #### ➕ Add Property Form
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/property-listing/frontend/screenshots/add%20Property%20form.jpg?raw=true)

- #### 📦 View Modal
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/property-listing/frontend/screenshots/model%20view.jpg?raw=true)

### 🔧 API Endpoints
| Method	| Endpoint	| Description |
|---------|-----------|-------------|
| GET	    |/api/properties	| Fetch all property listings
| POST	  |/api/properties	| Add a new property


### 🧠 Environment Variables
- #### Frontend (.env)
```bash
VITE_API_URL=http://localhost:5000/api
```

- #### Backend (.env)
```bash
PORT=5000
```



# 🎨 Assignment 2: Portfolio Generator App
### 🎯 Objective

Build a dynamic portfolio generator where users can select a template, fill out a multi-section form, and view a live-generated portfolio profile page.

## ✨ Features  
- ✅ Multi-section portfolio form (Hero, About, Skills, Projects, etc.)
- ✅ Choose between 2 templates (TemplateOne & TemplateTwo)
- ✅ Profile cards displayed dynamically
- ✅ Full portfolio pages at /portfolio/:id
- ✅ Edit/Update support via PUT API
- ✅ Real-time data via Express backend
- ✅ Chakra UI for design and layout

## 💻 Tech Stack
| Category	| Technology Used |
|-----------|-----------------|
| Frontend	| React (Vite), Chakra UI, React Router |
| Backend	  | Node.js, Express.js |
| API Handling |	Axios |
| Environment	 | .env |
| Design	| Chakra Components, Responsive Layout |

## 🧩 Folder Structure
```bash
portfolio-generator/
│
├── frontend/
│   ├── src/
│   │   ├── components/        # Navbar, PortfolioForm, Templates
│   │   ├── pages/             # Home, PortfolioPage
│   │   ├── services/          # api.js
│   │   └── App.jsx, main.jsx
│   ├── .env
│   └── package.json
│
└── backend/
    ├── server.js
    ├── .env
    └── package.json
```

## ⚙️ Setup Instructions
### 🧱 Backend Setup
```bash
cd portfolio-generator/backend
npm install
echo "PORT=5001" > .env
node server.js
```

### 💡 Frontend Setup
```bash
cd portfolio-generator/frontend
npm install
echo "VITE_API_URL=http://localhost:5001/api" > .env
npm run dev
```

### 🖼️ UI Preview
- #### Home (Profile List)	
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/portfolio-generator/frontend/screenshots/home.jpg?raw=true)
- #### Add Portfolio Form	
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/portfolio-generator/frontend/screenshots/add%20portfolio.jpg?raw=true)
- #### Template One	
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/portfolio-generator/frontend/screenshots/template%20one.jpg?raw=true)
- #### Template Two	
![App Screenshot](https://github.com/Nitishkumar8521/droneTV/blob/main/portfolio-generator/frontend/screenshots/template%20two.jpg?raw=true)


### 🔧 API Endpoints
| Method	| Endpoint	| Description |
|---------|-----------|-------------|
| GET	| /api/portfolios	| Fetch all portfolios |
| POST |	/api/portfolios	| Add a new portfolio |
| PUT	| /api/portfolios/:id	| Update an existing portfolio |

### 🧠 Environment Variables
- #### Frontend (.env)
```bash
VITE_API_URL=http://localhost:5001/api
```
- #### Backend (.env)
```bash
PORT=5001
```

## 🌐 Deployment
| Project	| Frontend URL	| Backend URL |
|---------|---------------|-------------|
| Property Listing	| https://drone-tv-t975.vercel.app |	https://drone-tv.vercel.app |
| Portfolio Generator	| https://drone-tv-portfolio-frontend.vercel.app | https://drone-tv-tpzi.vercel.app |

## 🧰 Scripts Reference
### Command	Description
| Command | Description |
|---------|-------------|
| npm install	| Install dependencies |
| npm run dev	| Start frontend development server |
| node server.js	| Run backend server |
| npm run build	 | Build frontend for production |

### 👤Author

Developed by **Nitish Kumar Singh.** Feel free to contribute or provide feedback!
