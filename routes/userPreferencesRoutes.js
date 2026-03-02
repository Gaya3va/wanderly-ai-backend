const express = require("express");
const UserPreferences = require("../models/UserPreferences");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const preferences = await UserPreferences.find();
    res.json(preferences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPref = new UserPreferences(req.body);
    const saved = await newPref.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Destination
router.put("/:id", async (req, res) => {
  try {
    const updated = await UserPreferences.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "User preferences not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await UserPreferences.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "User preferences not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;