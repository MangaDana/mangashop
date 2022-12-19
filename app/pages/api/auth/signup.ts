import User from '../../../model/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default async function handler(req:any, res:any) {
if (req.method === 'POST') {
  try {
    // Get user input
    const { username, email, password } = req.body;

    // Validate user input
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
      //return console.log("user mawjoud");
    }

    //Encrypt user password
   var encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign({ email }, "my_security_key", {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;

    // return new user
    res.status(200).json(token);
  } catch (err) {
    console.log(err);
  }

}}