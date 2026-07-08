const OrderItem =
require("../models/orderItem");

const createOrderItem = async (
  itemData
) => {
  return await OrderItem.create(
    itemData
  );
};

const getOrderItems = async (
  orderId
) => {
  return await OrderItem.findAll({
    where: { orderId }
  });
};

module.exports = {
  createOrderItem,
  getOrderItems
};