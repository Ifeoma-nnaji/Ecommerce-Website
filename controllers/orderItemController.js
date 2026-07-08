const {
  createOrderItem,
  getOrderItems
} = require(
  "../services/orderItemService"
);

const addOrderItem = async (
  req,
  res
) => {
  try {

    const item =
      await createOrderItem(
        req.body
      );

    res.status(201).json({
      success: true,
      item
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getItems = async (
  req,
  res
) => {
  try {

    const items =
      await getOrderItems(
        req.params.orderId
      );

    res.status(200).json({
      success: true,
      items
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  addOrderItem,
  getItems
};