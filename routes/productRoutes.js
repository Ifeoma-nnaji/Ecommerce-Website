const express = require("express");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const {
  getAllProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  removeProduct
} = require(
  "../controllers/productController"
);

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.post("/", createNewProduct);

router.put("/:id", updateExistingProduct);

router.delete("/:id", removeProduct);

router.post( "/",
  authMiddleware,
  adminMiddleware,
  createNewProduct
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateExistingProduct
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  removeProduct
);

module.exports = router;