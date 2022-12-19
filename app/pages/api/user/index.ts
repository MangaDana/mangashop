import User from '../../../model/user.model'

export default async function handler(req:any, res:any) {
if (req.method === 'POST') {
    User.create(req.body, (err:any, result:any) => {
    if (err) return res.status(500).json(err);
    else res.status(200).json(result);
  });
  }
else if (req.method === 'GET'){
  
await User.find({}).then(result=> {
  console.log(result);
  
  res.status(200).json(result)}
  ).catch(err=>res.status(500).json(err)
  );}
}