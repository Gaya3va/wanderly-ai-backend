const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

// CREATE
router.post("/", async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const data = await Destination.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
      
    const total = await Destination.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.json({
      data,
      page,
      totalPages,
      total
    });
   
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const saved = await newDestination.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({message: error.message });
  }
});

// UPDATE Destination
router.put("/:id", async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Destination
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Destination.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;