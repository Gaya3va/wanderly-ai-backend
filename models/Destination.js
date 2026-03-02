const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String,
  continent: String,
  description: String,
  image_url: String,
  avg_budget_per_day: Number,
  climate: String
}, { timestamps: true });

module.exports = mongoose.model("Destination", destinationSchema);