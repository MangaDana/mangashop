const { Product } = require("../model/index.js");
const addProduct= async(req, res)=>{
    Product.create(req.body,(err, result)=>{
        if(err)return res.status(500).json(err)
        else res.status(200).json(result)
    })
}
const getAllProducts = async (req, res) => {
  Product.find({}, (err, result) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
};const getOneProduct = async (req, res) => {
  Product.find({name:req.params.name}, (err, result) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
};





module.exports ={addProduct, getAllProducts,getOneProduct}
