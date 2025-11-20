const express = require("express");
const Assignment = require("../models/Assignment");
const router = express.Router();

router.get("/", async (req, res) => {
  const assignments = await Assignment.find()
    .populate("vehicleId")
    .populate("driverId");
  res.json(assignments);
});

router.post("/", async (req, res) => {
  const newAssign = new Assignment(req.body);
  await newAssign.save();
  res.json(newAssign);
});

module.exports = router;
