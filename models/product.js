const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  slug: {
    type: DataTypes.STRING,
    unique: true
  },

  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  image: {
    type: DataTypes.STRING
  },

  category: {
    type: DataTypes.STRING
  },

  description: {
    type: DataTypes.TEXT
  }
});

module.exports = Product;