import Product from '../../../model/product.mpdel'

export default function handler(req:any, res:any) {
if (req.method === 'POST') {
    Product.create(req.body, (err:any, result:any) => {
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