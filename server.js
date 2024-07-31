const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./connectDB");
const router = require("./routes/userRoutes");
const app = express();

const port = process.env.PORT || 5000;
//Eastablish connection for mongoose
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use("/api", router);
