import  mongoose from "mongoose";
import connection from "../utils/database"
console.log(connection);
const Cart = mongoose.Schema({
  name: { type: String, required: true },

  Quantity: { type: Number, default: 1 },
  price: { type: Number, required: true },

  image: {
    type: String,
    required: true,
  },
});

export default  mongoose.models.Cart ||mongoose.model("Cart", Cart);;
