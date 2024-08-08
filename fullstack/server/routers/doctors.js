const express = require("express");
const router = express.Router();

const {
  addDoctorDetails,
  verifyDoctorToken,
  getAvailableDoctors,
} = require("../controllers/doctors");

router.get("/demo", (req, res) => {
  res.send("msg from the server");
})
// router.post("/add-details", addDoctorDetails);
router.post("/demo", (req, res) => {
  console.log(req.body);
})
router.post("/verify", verifyDoctorToken);
router.get("/available-list", getAvailableDoctors);

module.exports = router;