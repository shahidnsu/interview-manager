const router = require("express").Router();
//const message = require("./controllers/message");

router.post("/LoginAdmin", (req, res) => {
  res.send("Hello world");
});
router.post("/sucess", (req, res) => {
  //there i will save my form data to database
  res.send("Hello world");
});
router.get("/all", (req, res) => {
  res.send("get all data");
});
router.put("/:id", (req, res) => {
  //here i will update my single data
  res.send("Updating one data");
});

module.exports = router;
