const mongoose = require("mongoose");

const modalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const scma = mongoose.model("nots", modalSchema);

module.exports = scma;
