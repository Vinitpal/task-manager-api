const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", require("./routes/tasks"));
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_URL);
    app.listen(PORT, console.log(`Server is listening on port ${PORT} ....`));
  } catch (error) {
    console.log(error);
  }
};

start();
