import express from "express";
import Bug from "../models/Bug.js";

const router = express.Router();

// CREATE a bug
router.post("/", async (req, res) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all bugs
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a single bug
router.get("/:id", async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.json(bug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a bug
router.put("/:id", async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBug) return res.status(404).json({ message: "Bug not found" });
    res.json(updatedBug);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE a bug
router.delete("/:id", async (req, res) => {
  try {
    const deletedBug = await Bug.findByIdAndDelete(req.params.id);
    if (!deletedBug) return res.status(404).json({ message: "Bug not found" });
    res.json({ message: "Bug deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
