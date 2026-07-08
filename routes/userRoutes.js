const express = require("express");
const authMiddleware =
require("../middleware/authMiddleware");
const adminMiddleware =
require("../middleware/adminMiddleware");

const {
  getUsers,
  getUser,
  updateRole
} = require(
  "../controllers/userController"
);

const router =
express.Router();

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getUsers
);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.status(200).json({
      success: true,
      user: req.user
    });
  }
);

router.get(
  "/:id",
  getUser
);

router.put(
  "/:id/role",
  authMiddleware,
  adminMiddleware,
  updateRole
);

module.exports = router;