// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  userType: {
    type: String,
    required: true,
    default: "Client",
  },
  fullname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ["male", "female", "other"],
    // required: true,
  },
  dob: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
    // validate: {
    //   validator: function (v) {
    //     // Validate phone number format (10 digits)
    //     return /^\d{10}$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid phone number!`,
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: true,
  },
  pregnant: {
    type: Boolean,
    default: false,
  },
  termsAndConditions: {
    type: Boolean,
    default: true,
  },
});

const workerSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  userType: {
    type: String,
    required: true,
    default: "Worker",
  },
  fullname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (v) {
    //     // Validate phone number format (10 digits)
    //     return /^\d{10}$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid phone number!`,
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  termsAndConditions: {
    type: Boolean,
    required: true,
  },
});

const organisationSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  userType: {
    type: String,
    required: true,
    default: "Organisation",
  },
  organisationName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (v) {
    //     // Validate phone number format (10 digits)
    //     return /^\d{10}$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid phone number!`,
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: true,
  },
  termsAndConditions: {
    type: Boolean,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);
const Worker = mongoose.model("Worker", workerSchema);
const Organisation = mongoose.model("Organisation", organisationSchema);

// eslint-disable-next-line no-undef
module.exports = { Client, Worker, Organisation };
