const express = require("express");

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  createNewOrder,
  myOrders,
  getSingleOrder
} = require("../controllers/orderController");

const router = express.Router();

router.post(
  "/",
  createNewOrder
);


router.get(
  "/my-orders",
  authMiddleware,
  myOrders
);

router.get(
  "/:id",
  authMiddleware,
  getSingleOrder
);

module.exports = router;