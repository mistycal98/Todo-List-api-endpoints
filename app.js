// Inbuilt Functions
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Config file import path
dotenv.config({ path: "./config.env" });

// Create Server
const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const todoRoutes = require("./routes/todoRoute");

// Routes
app.use("/todos", todoRoutes);

//Default route (Home Page)
app.get("/", (req, res) => {
	res.send("we are on home page");
});

//If Route not found
app.get("*", (req, res) => {
	res.send("<h1>404 Page not Found</h1>");
});

// DB connection
try {
	mongoose.connect(
		process.env.DB_CONNECTION,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => {
			console.log("Connected to DB!");
		}
	);
} catch (error) {
	console.log("Error Occured", error);
}

app.listen(process.env.PORT, () => {
	console.log(`Server started on http://localhost:${process.env.PORT}`);
});
