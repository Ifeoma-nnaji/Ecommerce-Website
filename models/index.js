require("./associations");

const User = require("./user");
const Product = require("./product");
const Order = require("./order");
const OrderItem = require("./orderItem");

module.exports = {
  User,
  Product,
  Order,
  OrderItem
};