const router = require("express").Router();
const applicant = require("./controllers/application");

router.post("/LoginAdmin", (req, res) => {
  res.send("Hello world");
});
router.post("/sucess", applicant.postOne);
router.get("/all", applicant.getApplicants);

router.put("/:id", (req, res) => {
  //here i will update my single data
  res.send("Updating one data");
});

module.exports = router;
