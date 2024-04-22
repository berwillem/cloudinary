const Product = require("./../models/products");
exports.createProdcut = async (req, res) => {
  const { title } = req.body;
  const image = req.image;
  const product = new Product({
    title,
    image,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
