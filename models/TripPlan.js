const mongoose = require("mongoose");

const tripPlanSchema = new mongoose.Schema(
  {
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    budget: { type: Number },
    travelers: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TripPlan", tripPlanSchema);