const transport = require("../emailService/nodeMailer");
const applicationsDb = require("../Models/db");
console.log(applicationsDb);
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
const creatingMailOptions = function(data) {
  let value = "";

  if (data.status == "Rejected") {
    value =
      "Sorry we could not move you to next round .Thank you for applying.Donot be upset preapare yourself and reapply";
  } else {
    value =
      "We move you to the next round of interview proccess.See you in the next round of interview process";
  }
  let mailOptions = {
    from: "hello.hr.portal@gmail.com",
    to: data.email,
    subject: "Your application Status",
    text: `
    Hello ${data.firstName} ${data.lastName} 
    thank for applying to  project code.After careful review of your application 
     ${value}. If you have any questions and confusion please ask .
    
    Thank you
    
    Project Code 
    
    HR Head
    Mobile Number : 01797588727; 
    
    `,
  };
  return mailOptions;
};
exports.changeStatus = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  try {
    const result = await applicationsDb
      .updateStatus(id, value)
      .then((result) => {
        return creatingMailOptions(result);
      })
      .then((mailOptions) => {
        transport(mailOptions);
      });

    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log("The error is ", error);
  }
};
exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = { email, password };
    const result = await applicationsDb.createUser(user);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log("the error is", error);
  }
};
exports.allUsers = async (req, res) => {
  try {
    const result = await applicationsDb.getAllUsers();
    res.status(200);
    res.send(result);
  } catch (error) {
    res.status(500);
    console.log("the error is", error);
  }
};
