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
    const result = await insertTask(req.body);
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "New tasks has been added successfully.",
        })
      : res.json({
          status: "error",
          message: "Unable to add tasks, try again later!.",
        });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: "error",
      message: error.message + "xxxxxxxxxxxxxxxxxx",
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

  try {
    const { _id, ...rest } = req.body;

    const result = await updateTask(_id, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "Your task has been updated",
        })
      : res.json({
          status: "Error",
          message: "Unable to update the task, try again later !",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message + "xxxxxxxxxxxxxxxxxx",
    });
  }
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
