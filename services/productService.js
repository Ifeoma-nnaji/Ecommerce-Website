const Product =
require("../models/product");

const getProducts = async () => {
  return await Product.findAll();
};

const getProductById = async (
  id
) => {
  return await Product.findByPk(id);
};

const createProduct = async (
  productData
) => {
  return await Product.create(
    productData
  );
};

const updateProduct = async (
  id,
  productData
) => {

  const product =
    await Product.findByPk(id);

  if (!product) {
    throw new Error(
      "Product not found"
    );
  }

  await product.update(
    productData
  );

  return product;
};

const deleteProduct = async (
  id
) => {

  const product =
    await Product.findByPk(id);

  if (!product) {
    throw new Error(
      "Product not found"
    );
  }

  await product.destroy();

  return true;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};