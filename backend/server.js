const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const dotenv = require("dotenv");
const { router } = require("./routes");
dotenv.config();

mongoose.connect(process.env.DATABASE , () => console.log(`connected to DB`));
const port = 3000;
const app = express();



app.use(express.json())
app.use(cors())
app.use("/signup", router)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, async function () {
	try {
		await console.log(`listening on port ${port}`);
	} catch (e) {
		console.log(e.message).status(501);
	}
});
