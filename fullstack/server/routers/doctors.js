const express = require("express");
const router = express.Router();

const { addDoctorDetails, verifyDoctorToken } = require("../controllers/doctors");

router.post("/add-details", addDoctorDetails);
router.post("/verify", verifyDoctorToken);

module.exports = router;