import User from '../models/user';
import Member from '../models/member';
import Affiliate from '../models/affiliate';
import cloudinary from 'cloudinary';
import { CronJob } from 'cron';

// Setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// var job = new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
// job.start();

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.create({
            email,
            password,

        });

        res.status(200).json({
            success: true,
            message: 'Account Registered successfully.'
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Get user details  =>   /api/admin/users/:id
const getUserDetails = async (req, res, next) => {
    try {
        const user = await User.findById(req.query.id);

        if (!user) {
            return next(new ErrorHandler('User not found with this ID.', 400))
        }

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.query.id);

        if (!user) {
            return next(new ErrorHandler('User not found with this ID.', 400))
        }

        // Remove avatar 
        const image_id = user.avatar.public_id;
        if (image_id) await cloudinary.v2.uploader.destroy(image_id)


        await user.remove();

        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {
    registerUser,
    getUserDetails,
    deleteUser
}