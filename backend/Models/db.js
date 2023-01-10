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

  Email: {
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
});

const ApplicationDeatis = model("ApplicationDeatis", applicationSchema);

exports.getAllApplicants = async () => {
  return await ApplicationDeatis.find({}).sort({ createdAt: "asc" });
};
exports.applyOneApplicant = async (applicationDetails) => {
  return await ApplicationDeatis.create(applicationDetails);
};
