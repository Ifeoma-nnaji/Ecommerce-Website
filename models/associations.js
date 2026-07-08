const User = require("./user");
const Product = require("./product");
const Order = require("./order");
const OrderItem = require("./orderItem");

// User ↔ Order
User.hasMany(Order, {
  foreignKey: "userId"
});

Order.belongsTo(User, {
  foreignKey: "userId"
});

// Order ↔ OrderItem
Order.hasMany(OrderItem, {
  foreignKey: "orderId"
});

OrderItem.belongsTo(Order, {
  foreignKey: "orderId"
});

// Product ↔ OrderItem
Product.hasMany(OrderItem, {
  foreignKey: "productId"
});

OrderItem.belongsTo(Product, {
  foreignKey: "productId"
});

module.exports = {
  User,
  Product,
  Order,
  OrderItem
};