const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", require("./routes/tasks"));

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_URL);
    app.listen(PORT, console.log(`Server is listening on port ${PORT} ....`));
  } catch (error) {
    console.log(error);
  }
};

start();
