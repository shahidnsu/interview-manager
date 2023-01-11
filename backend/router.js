const router = require("express").Router();
const { application } = require("express");
const applicant = require("./controllers/application");

router.post("/sucess", applicant.postOne);

router.get("/all/:id", applicant.getOneApplicant);
router.get("/all", applicant.getApplicants);
router.post("/all/new", applicant.createApplicant);
module.exports = router;
