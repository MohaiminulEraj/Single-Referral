import nc from 'next-connect'
import dbConnect from '@/server/config/dbConnect'
import { getUserDetails } from '@/server/controllers/authControllers'
import { isAuthenticatedUser } from '@/server/middlewares/auth'
import onError from '@/server/middlewares/errors'

const handler = nc({ onError });

// dbConnect();

handler.use(isAuthenticatedUser).get(getUserDetails)

export default handler;