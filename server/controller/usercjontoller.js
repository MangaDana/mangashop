const {User} =require ('../model/index.js')
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const createAUser=async(req,res)=>{
   
  const body=await req.body
  console.log(body);
 try {
   await User.create(body, (err, result) => {
     if (err) res.json(err);
    res.status(201).json(result);
   });
 } catch (err) {
   res.status(500).json(error);
 }

}

const getUser = async(req, res)=>{
  try{
     User.find({email:req.params.email},(err,result)=>{
      if (err) console.log(err);
      else res.status(200).json(result);
    })
  }catch(err){
    res.status(500).json(err);
  }
}
const getAllUser = async (req, res) => {
  try {
    User.find({  }, (err, result) => {
      if (err) console.log(err);
      else res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
const signUp = async function (req, res, next) {
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
    encryptedPassword = await bcrypt.hash(password, 10);

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
};
const login = async function (req, res) {
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
    // res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};


module.exports = {createAUser,getUser,getAllUser,signUp,login}


