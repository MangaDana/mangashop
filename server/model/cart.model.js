const mongoose = require("mongoose");

const Cart = mongoose.Schema({
  name: { type: String, required: true },

  Quantity: { type: Number, default:1 },
  price: { type: Number, required: true },

 
  image: {
    type: String,
   required:true
  },
 
});

module.exports = Cart;
