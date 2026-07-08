const {
  createOrder,
  getUserOrders,
  getOrderById
} = require("../services/orderService");

const jwt = require("jsonwebtoken");

const createNewOrder = async (req, res) => {

  try {

    let userId = null;

    const authHeader =
      req.headers.authorization;

    if (
      authHeader &&
      authHeader.startsWith("Bearer ")
    ) {

      try {

        const token =
          authHeader.split(" ")[1];

        const decoded =
          jwt.verify(
            token,
            process.env.JWT_SECRET
          );

        userId =
          decoded.userId;

      } catch (error) {

        userId = null;

      }

    }

    const {

      customerName,
      email,
      phone,
      deliveryAddress,
      totalAmount,
      items

    } = req.body;

    if (
      !customerName ||
      !email ||
      !phone ||
      !deliveryAddress ||
      !items ||
      items.length === 0
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Please provide complete order information."

      });

    }

    const order =
      await createOrder({

        customerName,

        email,

        phone,

        deliveryAddress,

        totalAmount,

        items,

        userId

      });

    return res.status(201).json({

      success: true,

      message:
        "Order placed successfully.",

      order

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message:
        "Unable to create order."

    });

  }

};

const myOrders = async (
  req,
  res
) => {

  try {

    const orders =
      await getUserOrders(
        req.user.userId
      );

    return res.status(200).json({

      success: true,

      orders

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message:
        error.message

    });

  }

};

const getSingleOrder = async (
  req,
  res
) => {

  try {

    const order =
      await getOrderById(
        req.params.id
      );

    if (!order) {

      return res.status(404).json({

        success: false,

        message:
          "Order not found"

      });

    }

    return res.status(200).json({

      success: true,

      order

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message:
        error.message

    });

  }

};

module.exports = {

  createNewOrder,

  myOrders,

  getSingleOrder

};