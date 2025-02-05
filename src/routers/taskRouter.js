import express from "express";
import mongoose from "mongoose";
const router = express.Router();
// let fakeDB = [
//   { id: 3, task: "Gaming", hr: 20, type: "entry" },
//   { id: 2, task: "Cookng", hr: 10, type: "entry" },
//   { id: 1, task: "Coding", hr: 40, type: "entry" },
// ];
// router.all("/", (req, res, next) => {
//   res.json({
//     status: "success",
//     message: "Hello Server",
//   });
// });

// Database table selecting
const taskSchema = new mongoose.Schema({}, { strict: false });
const TaskCollection = mongoose.model("Task", taskSchema); //tasks
router.post("/", async (req, res, next) => {
  //do your code

  console.log(req.body, "===========");
  //insert task
  const result = await TaskCollection(req.body).save();
  console.log(result);

  res.json({
    status: "success",
    message: "New tasks has been added successfully.",
  });
});
router.get("/", async (req, res, next) => {
  //do your code
  const tasks = await TaskCollection.find();
  res.json({
    status: "success",
    message: "Here are the tasks list.",
    tasks,
  });
});
router.patch("/", (req, res, next) => {
  //do your code
  // console.log(req.body);
  const { id, type } = req.body;
  console.log(id, type);
  // fakeDB = fakeDB.map((item) => {
  //   if (item.id === id) {
  //     item.type = type;
  //     return item;
  //   } else {
  //     return item;
  //   }
  // });
  res.json({
    status: "success",
    message: "Your task has been updated",
  });
});

// Delete taks
router.delete("/:id?", (req, res, next) => {
  //do your code
  const { id } = req.params;

  console.log(id);
  // fakeDB = fakeDB.filter((item) => item.id !== Number(id));
  res.json({
    status: "success",
    message: "Your task has been deleted",
  });
});
export default router;
