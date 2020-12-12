// Inbuilt Functions
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Config file import path
dotenv.config({ path: "./config.env" });

// Create Server
const app = express();
app.use(express.json());

// Import Routes
const todoRoutes = require("./routes/todoRoute");

// Routes
app.use("/todos", todoRoutes);
app.get("/", (req, res) => {
  res.send("we are on home page");
});

// DB connection
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

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
