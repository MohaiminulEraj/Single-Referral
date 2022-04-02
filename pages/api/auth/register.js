import nc from 'next-connect'
// import dbConnect from '@/server/config/dbConnect'
import { registerUser } from '@/server/controllers/authControllers'
import onError from '@/server/middlewares/errors'

const handler = nc({ onError });

// dbConnect();

handler.post(registerUser);

export default handler;