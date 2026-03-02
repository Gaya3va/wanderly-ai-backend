# wanderly-backend
Backend API for Wanderly Travel Inspiration App using Express and MongoDB.

# 🌍 Wanderly – Travel Planning Backend API

A RESTful backend API for a travel inspiration and trip planning application.  
Built using **Node.js, Express, MongoDB, and Mongoose**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## 📂 Project Structure
wanderly-backend/ │ ├── models/ │   ├── Destination.js │   ├── Review.js │   ├── TravelJournal.js │   ├── TripPlan.js │   └── UserPreferences.js │ ├── routes/ │   ├── destinationRoutes.js │   ├── reviewRoutes.js │   ├── travelJournalRoutes.js │   ├── tripPlanRoutes.js │   └── userPreferencesRoutes.js │ ├── middleware/ │   └── errorHandler.js │ ├── server.js ├── .env └── package.json


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
git clone  cd wanderly-backend

### 2️⃣ Install Dependencies
npm install


### 3️⃣ Create .env File
PORT=5000 MONGO_URI=your_mongodb_connection_string


### 4️⃣ Run Server
npm run dev


Server runs at:
http://localhost:5000⁠�


---

## 📌 API Endpoints

### 🏝 Destinations

| Method | Endpoint |
|--------|----------|
| GET    | /api/destinations |
| POST   | /api/destinations |
| PUT    | /api/destinations/:id |
| DELETE | /api/destinations/:id |

Supports Pagination:
GET /api/destinations?page=1&limit=5


---

### 📝 Reviews

| Method | Endpoint |
|--------|----------|
| GET    | /api/reviews |
| POST   | /api/reviews |
| PUT    | /api/reviews/:id |
| DELETE | /api/reviews/:id |

Reviews are linked to a Destination via ObjectId reference.

---

### 📖 Travel Journals

| Method | Endpoint |
|--------|----------|
| GET    | /api/journals |
| POST   | /api/journals |
| PUT    | /api/journals/:id |
| DELETE | /api/journals/:id |

---

### 🧳 Trip Plans

| Method | Endpoint |
|--------|----------|
| GET    | /api/trips |
| POST   | /api/trips |
| PUT    | /api/trips/:id |
| DELETE | /api/trips/:id |

TripPlan references Destination using MongoDB ObjectId.

---

### ⚙️ User Preferences

| Method | Endpoint |
|--------|----------|
| GET    | /api/preferences |
| POST   | /api/preferences |
| PUT    | /api/preferences/:id |
| DELETE | /api/preferences/:id |

---

## 🔗 Relationships

- TripPlan → references Destination
- Review → references Destination

Uses Mongoose ObjectId with `ref` for relational data handling.

---

## 🛡 Features Implemented

- RESTful API design
- MongoDB Atlas integration
- Schema validation
- Pagination support
- CRUD operations
- Central error handling middleware
- Timestamp tracking (createdAt, updatedAt)

---

## 📌 Future Improvements

- Authentication (JWT)
- Role-based access control
- Advanced filtering & search
- API documentation (Swagger)
- Deployment (Render / Railway)

---

## 👩‍💻 Author

Gayatri Akalwadi  
Full Stack Developer (MERN)

---

## 📄 License

This project is for educational purposes.