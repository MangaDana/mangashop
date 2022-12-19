import User from '../../../model/user.model'

export default function handler(req:any, res:any) {
console.log( req.body);
if (req.method === 'GET') {
 User.find({username:req.query.name}, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}if (req.method === 'DELETE') {
 User.deleteOne({ username: req.query.name }, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
}
if(req.method === 'PUT'){
    try {
     User.findOneAndUpdate(
      { username: req.query.name },
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