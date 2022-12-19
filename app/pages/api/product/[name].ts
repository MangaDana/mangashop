import Product from '../../../model/product.mpdel'


export default function handler(req:any, res:any) {
console.log( req.body);
if (req.method === 'GET') {
 Product.find({name:req.query.name}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}if (req.method === 'DELETE') {
 Product.deleteOne({ name: req.query.name }, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}
if(req.method === 'PUT'){
    try {
     Product.findOneAndUpdate(
      { name: req.query.name },
     req.body,
      (err:any, result:any) => {
        if (err) console.log(err);
        res.json(result);
      }
    );
  } catch (err) {
    res.json(err);
  }
}

}