const Product = require("../models/product");
const User = require("../models/user");
const Order = require("../models/order");

const getDashboardStats = async () => {

  const totalProducts =
    await Product.count();

  const totalCustomers =
    await User.count({
      where: {
        role: "customer"
      }
    });

  const totalOrders =
    await Order.count();

  const revenue =
    await Order.sum(
      "totalAmount",
      {
        where: {
          status: [
            "paid",
            "processing",
            "shipped",
            "delivered"
          ]
        }
      }
    );

  const recentOrders =
    await Order.findAll({

      limit: 5,

      order: [
        ["createdAt", "DESC"]
      ]

    });

  return {

    totalProducts,

    totalCustomers,

    totalOrders,

    totalRevenue:
      Number(revenue || 0),

    recentOrders

  };

};

module.exports = {
  getDashboardStats
};