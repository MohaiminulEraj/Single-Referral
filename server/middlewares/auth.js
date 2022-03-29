import ErrorHandler from '../utils/errorHandler'
import { getSession } from 'next-auth/client'

const isAuthenticatedUser = async (req, res, next) => {
    try {
        const session = await getSession({ req });
        if (!session) {
            // return next(new ErrorHandler('Login first to access this resource', 401));
            return next(new ErrorHandler());
        }
        req.user = session.user;
        next();
    } catch (error) {

    }
}

// Handling user roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403));
        }
        next()
    }
}

export {
    isAuthenticatedUser,
    authorizeRoles
}