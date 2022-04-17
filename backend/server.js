const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
const { SignUprouter } = require("./Routes/signupRoute");
const { HomeRouter } = require("./Routes/FlatRoute");
dotenv.config();

mongoose.connect(process.env.DATABASE, () => console.log(`connected to DB`));
const port = process.env.PORT  || 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/signup", SignUprouter);



app.use("/home",HomeRouter);

app.listen(port, async function () {
	try {
		await console.log(`listening on port ${port}`);
	} catch (e) {
		console.log(e.message).status(501);
	}
});
