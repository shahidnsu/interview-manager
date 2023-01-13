const applicationsDb = require("../Models/db");

exports.getApplicants = async (req, res) => {
  try {
    const applicants = await applicationsDb.getAllApplicants();
    res.status(200);
    res.send(applicants);
  } catch (error) {
    console.log("the error is ", error);
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
exports.getOneApplicant = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);
    const single = await applicationsDb.findOneApplicant(id);
    res.status(200);
    res.send(single);
  } catch (error) {
    console.log("error is: ", error);
    res.status(500).send("Data could not be saved");
  }
};
exports.createApplicant = async (req, res) => {
  try {
    const {
      batchName,
      email,
      githubUserName,
      phoneNumber,
      firstName,
      lastName,
    } = req.body;

    const appliedDate = new Date();
    const deatils = {
      email,
      githubUserName,
      phoneNumber,
      firstName,
      lastName,
      appliedDate,
      batchName,
    };
    const result = await applicationsDb.createApplication(deatils);
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log("error is ", error);
  }
};
exports.changeStatus = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;
  try {
    const result = await applicationsDb.updateStatus(id, value);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log("The error is ", error);
  }
};
