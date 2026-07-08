const express = require("express");

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  dashboard
} = require("../controllers/adminController");

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  dashboard
);

module.exports = router;