import Cart from '../../../model/cart.model'

export default function handler(req:any, res:any) {
if (req.method === 'POST') {
    Cart.create(req.body, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
  }
else if (req.method === 'GET'){
Cart.find({}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });}
  else if (req.method === 'DELETE'){
     Cart.deleteMany({  }, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
  }
}