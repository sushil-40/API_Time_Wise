import express from "express";

const router = express.Router();
let fakeDB = [
  { id: 3, task: "Gaming", hr: 20, type: "entry" },
  { id: 2, task: "Cookng", hr: 10, type: "entry" },
  { id: 1, task: "Coding", hr: 40, type: "entry" },
];
// router.all("/", (req, res, next) => {
//   res.json({
//     status: "success",
//     message: "Hello Server",
//   });
// });
router.post("/", (req, res, next) => {
  //do your code
  fakeDB.push(req.body);
  console.log(fakeDB);
  res.json({
    status: "success",
    message: "New tasks has been added successfully.",
  });
});
router.get("/", (req, res, next) => {
  //do your code

  res.json({
    status: "success",
    message: "Here are the tasks list.",
    tasks: fakeDB,
  });
});
router.patch("/", (req, res, next) => {
  //do your code
  // console.log(req.body);
  const { id, type } = req.body;

  fakeDB = fakeDB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
  res.json({
    status: "success",
    message: "Your task has been updated",
    tasks: fakeDB,
  });
});

// Delete taks
router.delete("/:id?", (req, res, next) => {
  //do your code
  const { id } = req.params;

  console.log(id);
  fakeDB = fakeDB.filter((item) => item.id !== Number(id));
  res.json({
    status: "success",
    message: "Your task has been deleted",
    tasks: fakeDB,
  });
});
export default router;
