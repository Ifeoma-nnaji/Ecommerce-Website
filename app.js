const express = require("express");
const cors = require("cors");

const productRoutes =
require("./routes/productRoutes");

const userRoutes =
require("./routes/userRoutes");

const authRoutes =
require("./routes/authRoutes");

const orderRoutes =
require("./routes/orderRoutes");

const orderItemRoutes =
require("./routes/orderItemRoutes");

const paymentRoutes =
require("./routes/paymentRoutes");

const adminRoutes =
require("./routes/adminRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/order-items",
  orderItemRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

app.get("/", (req, res) => {
  res.send("Zidora Backend Running...");
});

module.exports = app;