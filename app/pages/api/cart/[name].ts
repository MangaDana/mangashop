import Cart from '../../../model/cart.model'

export default function handler(req:any, res:any) {
console.log( req.body);
if (req.method === 'GET') {
 Cart.find({name:req.query.name}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}if (req.method === 'DELETE') {
 Cart.deleteOne({ name: req.query.name }, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}
if(req.method === 'PUT'){
    try {
     Cart.findOneAndUpdate(
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