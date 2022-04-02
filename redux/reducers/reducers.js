import { combineReducers } from 'redux'
import {
    authReducer,
    // userReducer,
    // loadedUserReducer,
    // forgotPasswordReducer,
    // allUsersReducer,
    // userDetailsReducer
} from './userReducers'

const reducer = combineReducers({
    auth: authReducer,
    // user: userReducer,
})

export default reducer