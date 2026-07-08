const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require(
  "../services/productService"
);

const getAllProducts =
async (req, res) => {

  try {

    const products =
      await getProducts();

    res.status(200).json(
      products
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
};

const getProduct =
async (req, res) => {

  try {

    const product =
      await getProductById(
        req.params.id
      );

    res.status(200).json(
      product
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }
};

const createNewProduct =
async (req, res) => {

  try {

    const product =
      await createProduct(
        req.body
      );

    res.status(201).json({
      success: true,
      product
    });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message:
//         error.message
//     });

//   }
// };

  }catch (error) {

  console.log(error);

  res.status(500).json({
    success: false,
    message: error.message,
    errors: error.errors
  });

}
}

const updateExistingProduct =
async (req, res) => {

  try {

    const product =
      await updateProduct(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    });

  }
};

const removeProduct =
async (req, res) => {

  try {

    await deleteProduct(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Product deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    });

  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createNewProduct,
  updateExistingProduct,
  removeProduct
};