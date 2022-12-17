const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UserSchema=require ('./usermodel')
const ProductsSchema=require ('./products.model')
const CartSchema=require ('./cart.model')

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://root:root@cluster0.ysomcku.mongodb.net/manga", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected ..");
  })
  .catch((err) => console.log(err));
const Product = mongoose.model("Product", ProductsSchema);
const Cart = mongoose.model("Cart", CartSchema);

const User = mongoose.model("User", UserSchema);
module.exports = {User,Product,Cart}