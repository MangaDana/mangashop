import  mongoose from "mongoose";

const Product = mongoose.Schema({
  name: { type: String, required: true, unique: true },

  price: { type: Number, required: true },
  categorie: { type: String, required: true },

  anime: { type: String, default: "other" },
  image: {
    type: String,
    required: true,
  },
  description: { type: String },
  size: { type: Array, required: true },
  stock: { type: Number, default: 10 },
});

export default  mongoose.models.Product ||mongoose.model("Product", Product);;
