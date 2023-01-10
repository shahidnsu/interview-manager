const applicationsDb = require("../Models/db");

exports.getApplicants = async (req, res) => {
  try {
    const applicants = await applicationsDb.getAllApplicants();
    res.status(200);
    res.send(applicants);
  } catch (e) {
    console.log("the error is ", e);
    res.status(500).send("cannot get the data");
  }
};
exports.postOne = async (req, res) => {
  try {
    await applicationsDb.applyOneApplicant(req.body);
    res.status(200);
    res.send(req.body);
  } catch (error) {
    console.log("error is:", error);
    res.status(500).send("Data could not be saved");
  }
};
