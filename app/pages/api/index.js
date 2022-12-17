import connectDB from "../../utils/connectMongodb"
import Demo from "../../models/demo"

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default function handler(req, res) {
    console.log("connecting db")
    connectDB();
    console.log('DB connected')
    res.status(200).json({ name: 'John Doe' })
  }