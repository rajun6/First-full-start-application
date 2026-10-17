const express = require("express");
const scma = require("./models/nots.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/nots", async (req, res) => {
  try {
    const data = await scma.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/nots", async (req, res) => {
  try {
    const data = await scma.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/nots/:id", async (req, res) => {
  try {
    const data = await scma.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.patch("/nots/:id", async (req, res) => {
  try {
    const data = await scma.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;