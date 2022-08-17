const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = 3000;

// middleware
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.send("Task Manager API");
});

// routes
app.use("/api/v1/tasks", require("./routes/tasks"));

//  app.get('/api/v1/tasks')        // - get all tasks
//  app.post('/api/v1/tasks')       // - create a new task
//  app.get('/api/v1/tasks/:id')    // - get single task
//  app.patch('/api/v1/tasks/:id')  // - update task
//  app.delete('/api/v1/tasks/:id') // - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_URL);
    app.listen(PORT, console.log(`Server is listening on port ${PORT} ....`));
  } catch (error) {
    console.log(error);
  }
};

start();
