// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {data} from "./data/data"
export default function handler(req, res) {
  if(req.method=='GET'){
    res.status(200).json({'id': '1', name: 2, 'value': 3})
    
  }
}


