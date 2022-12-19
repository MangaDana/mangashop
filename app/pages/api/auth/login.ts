import User from '../../../model/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default async function handler(req:any, res:any) {
if (req.method === 'POST') {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ email }, "my_security_key", {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user
      res.status(200).json(token);
    }
     res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here

}}