const express = require("express");
const app = express();
const PORT = 3000;

const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager API");
});

app.use("/api/v1/tasks", tasks);

//  app.get('/api/v1/tasks')        // - get all tasks
//  app.post('/api/v1/tasks')       // - create a new task
//  app.get('/api/v1/tasks/:id')    // - get single task
//  app.patch('/api/v1/tasks/:id')  // - update task
//  app.delete('/api/v1/tasks/:id') // - delete task

app.listen(PORT, console.log(`Server is listening on port ${PORT} ....`));