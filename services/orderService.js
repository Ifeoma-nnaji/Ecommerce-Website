const sequelize = require("../database/sequelize");

const Order = require("../models/order");
const OrderItem = require("../models/orderItem");
const Product = require("../models/product");

const createOrder = async (orderData) => {

  const transaction =
    await sequelize.transaction();

  try {

    const {
      customerName,
      email,
      phone,
      deliveryAddress,
      totalAmount,
      userId,
      items
    } = orderData;

    const order =
      await Order.create(
        {
          orderNumber: `ZN-${Date.now()}`,

          customerName,

          email,

          phone,

          deliveryAddress,

          totalAmount,

          userId
        },
        { transaction }
      );

    if (
      items &&
      items.length > 0
    ) {

      const orderItems =
        items.map((item) => ({
          orderId: order.id,

          productId: item.id,

          quantity: item.quantity,

          price: item.price
        }));

      await OrderItem.bulkCreate(
        orderItems,
        { transaction }
      );

    }

    await transaction.commit();

    return await Order.findByPk(
      order.id,
      {
        include: [
          {
            model: OrderItem,
            include: [Product]
          }
        ]
      }
    );

  } catch (error) {

    await transaction.rollback();

    throw error;

  }

};

const getUserOrders = async (
  userId
) => {

  return await Order.findAll({

    where: {
      userId
    },

    include: [
      {
        model: OrderItem,
        include: [Product]
      }
    ],

    order: [
      ["createdAt", "DESC"]
    ]

  });

};

const getOrderById = async (
  orderId
) => {

  return await Order.findByPk(
    orderId,
    {
      include: [
        {
          model: OrderItem,
          include: [Product]
        }
      ]
    }
  );

};

module.exports = {

  createOrder,

  getUserOrders,

  getOrderById

};