const express =
require("express");

const {
  addOrderItem,
  getItems
} = require(
  "../controllers/orderItemController"
);

const router =
express.Router();

router.post(
  "/",
  addOrderItem
);

router.get(
  "/:orderId",
  getItems
);

module.exports =
router;