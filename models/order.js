const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },

  deliveryAddress: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM(
      "pending",
      "paid",
      "processing",
      "shipped",
      "delivered",
      "cancelled"
    ),
    defaultValue: "pending"
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "Users",
      key: "id"
    }
  }

});

module.exports = Order;