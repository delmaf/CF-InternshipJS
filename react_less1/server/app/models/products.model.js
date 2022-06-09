const mongoose = require("mongoose");

const products = mongoose.model(
  "products",
  new mongoose.Schema({
    category: String,
    name: String,
    price: Number,
    currency: String,
    urlImg: String,
    inCart: Boolean,
  })
);

module.exports = products;
