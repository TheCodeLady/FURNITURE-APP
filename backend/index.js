require("dotenv").config()
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { furniture } = require("./data/FurnitureModel");
const port = process.env.PORT || 3002;
const app = express();
const mongoDBString = process.env.mongoDBString;
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(mongoDBString);

app.get("/", async (req, res) => {
	const furnitureData = await furniture.find({});
	console.log(furnitureData);
	res.json({ furnitureData });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
