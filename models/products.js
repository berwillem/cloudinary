const mongoose = require("mongoose");
const productShema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("product", productShema);
