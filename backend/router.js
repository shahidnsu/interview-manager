const router = require("express").Router();
const applicant = require("./controllers/application");

router.post("/all/success", applicant.postOne);

router.get("/all/:id", applicant.getOneApplicant);
router.get("/all", applicant.getApplicants);
router.post("/all/new", applicant.createApplicant);
router.put("/all/:id", applicant.changeStatus);

module.exports = router;
