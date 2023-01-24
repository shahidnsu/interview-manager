const router = require("express").Router();
const { application } = require("express");
const applicant = require("./controllers/application");
const userController = require("./controllers/user");
router.post("/all/success", applicant.postOne);

router.get("/all/:id", applicant.getOneApplicant);
router.get("/all", applicant.getApplicants);
router.post("/all/new", applicant.createApplicant);
router.put("/all/:id", applicant.changeStatus);
router.delete("/all/:id", applicant.deleteOneUser);

// router.get("/login/user", applicant.allUsers);
// router.post("/login/user", applicant.createUser);
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
