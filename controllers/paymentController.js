const Stripe = require("stripe");

console.log(
  process.env.STRIPE_SECRET_KEY
);

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY
);

const createPaymentIntent = async (
  req,
  res
) => {
  try {

    const {
      amount,
      currency = "usd",
      customerName,
      email
    } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment amount."
      });
    }

    const paymentIntent =
      await stripe.paymentIntents.create({

        amount: Math.round(amount * 100),

        currency: currency.toLowerCase(),

        automatic_payment_methods: {
          enabled: true
        },

        receipt_email: email,

        metadata: {
          customerName:
            customerName || "",
          email:
            email || ""
        }

      });

    res.status(200).json({

      success: true,

      clientSecret:
        paymentIntent.client_secret,

      paymentIntentId:
        paymentIntent.id

    });

  } catch (error) {

    console.error(
      "Stripe Error:",
      error
    );

    res.status(500).json({

      success: false,

      message:
        error.message ||
        "Unable to create payment intent."

    });

  }
};

module.exports = {
  createPaymentIntent
};