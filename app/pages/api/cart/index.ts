import Cart from '../../../model/cart.model'

export default function handler(req:any, res:any) {
if (req.method === 'POST') {
    Cart.create(req.body, (err:any, result:any) => {
    if (err) return res.send(err);
    else res.send(result);
  });
  }
else if (req.method === 'GET'){
Cart.find({}, (err:any, result:any) => {
    if (err) return res.send(err);
    else res.send(result);
  });}
  else if (req.method === 'DELETE'){
     Cart.deleteMany({  }, (err:any, result:any) => {
    if (err) return res.send(err);
    else res.send(result);
  });
  }
}