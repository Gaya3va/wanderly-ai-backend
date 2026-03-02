const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
     const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;
    
        const data = await Review.find()
          .sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit);
          
        const total = await Review.countDocuments();
        const totalPages = Math.ceil(total / limit);
    
        res.json({
          data,
          page,
          totalPages,
          total
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST review
router.post("/", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// UPDATE Destination
router.put("/:id", async (req, res) => {
  try {
    const updated = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE review
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;