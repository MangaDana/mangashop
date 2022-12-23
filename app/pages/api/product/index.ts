import {Cloudinary} from "@cloudinary/url-gen";
import Product from '../../../model/product.mpdel'

export default async function handler(req:any, res:any) {
if (req.method === 'POST') {
  const {name,price,categorie,anime,image,description,size,stock}=req.body
  
    Product.create({name,price,categorie,anime,image,description,size,stock}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
  }
else if (req.method === 'GET'){
Product.find({}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });}
 
}
