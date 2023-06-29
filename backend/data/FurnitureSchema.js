const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
	name: String,
	price: Number,
	image: String,
	colors: Array,
	company: String,
	description: String,
	category: String,
	shipping: Boolean,
});

module.exports = { furnitureSchema };
