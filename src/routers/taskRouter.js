import express from "express";

const router = express.Router();
let fakeDB = [];
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

export default router;
