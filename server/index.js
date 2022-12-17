
const express = require("express");
const cors = require("cors");
const db=require ('./model/index')
const User = require('./routes/user.routes')
const Product = require('./routes/products.routes')
const mongoose=require ('mongoose')
const app = express();
const port = 5000;
app.use(express.json())
app.use(cors())
 app.use('/user',User)
 app.use('/products',Product)
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running  at http://localhost:${port}`);
});