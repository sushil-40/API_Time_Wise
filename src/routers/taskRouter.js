import express from "express";
import {
  deleteTask,
  getTasks,
  insertTask,
  updateTask,
} from "../models/taskModel/TaskSchema.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  //do your code

  try {
    console.log(req.body, "===========");
    //insert task
    // const result = await insertTask(req.body);
    console.log(req.body);

    res.json({
      status: "success",
      message: "New tasks has been added successfully.",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
router.get("/", async (req, res, next) => {
  //do your code
  const tasks = await getTasks();

  res.json({
    status: "success",
    message: "Here are the tasks list.",
    tasks,
  });
});
router.patch("/", async (req, res, next) => {
  //do your code
  // console.log(req.body);
  const { _id, ...rest } = req.body;
  // console.log(req.body);
  const result = await updateTask(_id, rest);
  console.log(result);

  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});

// Delete taks
router.delete("/:_id?", async (req, res, next) => {
  //do your code
  const { _id } = req.params;

  console.log(_id);

  const result = await deleteTask(_id); // fakeDB = fakeDB.filter((item) => item.id !== Number(id));
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});
export default router;
