const mongoose = require("mongoose");
const axios = require("axios");
const Doctor = require("../models/Doctor");

const addDoctorDetails = async (req, res) => {
  const details = req.body;
  console.log(details);
  try {
    const foundDoctor = await Doctor.findOne({ _id: req.user.id });
    foundDoctor.details = details;
    await foundDoctor.save();
    res.status(201).json("details added");
  } catch (err) {
    console.log(err);
  }
};

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