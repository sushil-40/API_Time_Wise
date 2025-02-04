import express from "express";
import taskRouter from "./src/routers/taskRouter.js";
import morgan from "morgan";
const app = express();

const PORT = 8000;

// app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`You are running at http://localhost:${PORT}`);
});
