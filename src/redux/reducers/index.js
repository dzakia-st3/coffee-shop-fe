import { combineReducers } from "redux"
import Auth from './Auth'
import AuthRegister from './AuthRegister'

const rootReducer = combineReducers ({
    auth: Auth,
    register: AuthRegister
})
export default rootReducer