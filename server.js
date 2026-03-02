const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const destinationRoutes = require("./routes/destinationRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const travelJournalRoutes = require("./routes/travelJournalRoutes");
const tripPlanRoutes = require("./routes/tripPlanRoutes");
const userPreferencesRoutes = require("./routes/userPreferencesRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/destinations", destinationRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/journals", travelJournalRoutes);
app.use("/api/trips", tripPlanRoutes);
app.use("/api/preferences", userPreferencesRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Wanderly API Running 🚀");
});

//404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(errorHandler);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
