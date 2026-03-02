const express = require("express");
const TravelJournal = require("../models/TravelJournal");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const journals = await TravelJournal.find().populate("destination");
    res.json(journals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newJournal = new TravelJournal(req.body);
    const saved = await newJournal.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Destination
router.put("/:id", async (req, res) => {
  try {
    const updated = await TravelJournal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Travel journal not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Destination
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await TravelJournal.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Travel journal not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;