import  mongoose from "mongoose";
mongoose.Promise = global.Promise;

// import  UserSchema from ("./usermodel");
// import  ProductsSchema from ("./products.model");
import  CartSchema from "../model/cart.model";

mongoose.set("strictQuery", true);
const connection=( mongoose
  .connect("mongodb+srv://root:root@cluster0.ysomcku.mongodb.net/manga", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected ..");
  })
  .catch((err) => console.log(err)))
// const Product = mongoose.model("Product", ProductsSchema);


// const User = mongoose.model("User", UserSchema);
export default  connection;
