const express = require("express");
const router = express.Router();

const {
  addDoctorDetails,
  verifyDoctorToken,
  getAvailableDoctors,
} = require("../controllers/doctors");

router.post("/add-details", addDoctorDetails);
router.post("/verify", verifyDoctorToken);
router.get("/available-list", getAvailableDoctors);

module.exports = router;