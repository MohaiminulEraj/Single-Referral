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

// var job = new CronJob('* 1 * * * *', function () {
//     console.log('You will see this message every minute');
// }, null, true, 'America/Los_Angeles');
// job.start();

const registerUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const checkEmail = await User.findOne({ email: email });
        if (checkEmail) {
            throw new Error(`User ${email} already exists!`)
        }

        let refferal_code = Math.random().toString(36).substr(2, 7);

        const checkRefStatus = await User.find({ refferal_code });

        if (checkRefStatus.length > 0) {
            refferal_code = Math.random().toString(36).substr(2, 8);
        }

        const user = await User.create({
            email,
            password,
            role,
            refferal_code,
        });


        res.status(200).json({
            success: true,
            message: 'Account Registered successfully.'
        })

    }
    catch (error) {
        console.error(error);
        throw new Error(error.message);
        // res.status(500).json({
        //     success: false,
        //     message: error.message
        // })
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