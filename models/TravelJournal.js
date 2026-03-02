const mongoose = require("mongoose");

const travelJournalSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
    },
    content: { type: String, required: true },
    travel_date: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TravelJournal", travelJournalSchema);