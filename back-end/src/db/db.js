const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function conacodb(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected")
  } catch (e) {
    console.log(e)
  }
}
module.exports = conacodb;