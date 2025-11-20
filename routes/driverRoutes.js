const express = require("express");
const Driver = require("../models/Driver");
const router = express.Router();

// Get all drivers
router.get("/", async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

// Add driver
router.post("/", async (req, res) => {
  const newDriver = new Driver(req.body);
  await newDriver.save();
  res.json(newDriver);
});

// Get driver by ID
router.get("/:id", async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  res.json(driver);
});

// Update driver
router.put("/:id", async (req, res) => {
  const updated = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete driver
router.delete("/:id", async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ message: "Driver deleted" });
});

module.exports = router;
