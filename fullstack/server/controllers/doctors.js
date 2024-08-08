const Doctor = require("../models/Doctor");

const addDoctorDetails = async (req, res) => {
  console.log(req.body);
  res.send("got the msg from server");
}

const verifyDoctorToken = async (req, res) => {
  // req.user contains the payload of jwt
  res.status(200).json({ status: "success", payload: req.user });
};

const getAvailableDoctors = async (req, res) => {
  console.log("getting available doctors");
  try {
    // change query obj -> available: true
    const results = await Doctor.find({});
    res.status(200).json({ status: "success", data: results });
  } catch(err) {
    console.log(err);
  }
};

module.exports = { addDoctorDetails, verifyDoctorToken, getAvailableDoctors };