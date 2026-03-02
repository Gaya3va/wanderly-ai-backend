const mongoose = require("mongoose");

const userPreferencesSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    preferred_climate: { type: String },
    budget_range: { type: String },
    favorite_continent: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserPreferences", userPreferencesSchema);