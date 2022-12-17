const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: { type: String, required: true,unique:true },

  price: { type: Number, required: true },
  categorie: { type: Array, required: true },
color:{type:Array, },
  anime: { type: String , default:  'other'},
  image: {
    type: String,
   required: true
  },
  description: { type: String },
  size:{ type: Array, required: true},
  stock: { type: Number, default: 10}
});

module.exports = Product;
