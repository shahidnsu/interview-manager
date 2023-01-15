const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://127.0.0.1:27017/Application");
} catch (error) {
  console.log(error);
}
const { Schema, model } = mongoose;
const applicationSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
  githubUserName: {
    type: String,
    required: true,
  },
  batchName: {
    type: String,
    required: true,
  },
  appliedDate: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    default: "pending",
  },
});


const adminUser = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserDatas = model("adminUser", adminUser);
const ApplicationDetails = model("ApplicantData", applicationSchema); 

exports.getAllApplicants = async () => {
  return await ApplicationDetails.find({}).sort({ createdAt: "asc" });
};
exports.applyOneApplicant = async (applicationDetails) => {
  return await ApplicationDetails.create(applicationDetails);
};
exports.findOneApplicant = async (id) => {
  return await ApplicationDetails.findById(id);
};

exports.createApplication = async (deatils) => {
  return await ApplicationDetails.create(deatils);
};

exports.updateStatus = async (id, value) => {
  return await ApplicationDetalis.findByIdAndUpdate(
    id,
    {
      $set: { status: value },
    },
    { new: true }
  );
};

exports.getAllUsers = async () => {
  return await UserDatas.find({});
};

exports.createUser = async (userInfo) => {
  return await UserDatas.create(userInfo);
};

exports.getOneUser = async (userInfo) => {
  return await UserDatas.findOne({email:userInfo.email})
}


