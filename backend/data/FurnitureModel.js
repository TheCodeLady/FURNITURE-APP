const { furnitureSchema } = require("./FurnitureSchema");
const mongoose = require("mongoose");

const furniture = mongoose.model("furniture", furnitureSchema);

module.exports = { furniture };