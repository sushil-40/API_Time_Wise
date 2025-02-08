import express from "express";
import taskRouter from "./src/routers/taskRouter.js";
import morgan from "morgan";
import cors from "cors";
//connect mongoDB here   [below is inline import]
import { connectMongoDb } from "./src/config/dbConfig.js";
connectMongoDb();
const app = express();

const PORT = 8000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`You are running at http://localhost:${PORT}`);
});
