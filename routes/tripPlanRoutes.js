const express = require("express");
const TripPlan = require("../models/TripPlan");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trips = await TripPlan.find().populate("destination");
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTrip = new TripPlan(req.body);
    const saved = await newTrip.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE 
router.put("/:id", async (req, res) => {
  try {
    const updated = await TripPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Trip plan not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await TripPlan.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Trip plan not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;