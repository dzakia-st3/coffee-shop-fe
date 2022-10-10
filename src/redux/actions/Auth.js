import axios from "axios"

const LoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

const LoginSucces = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

export const AuthLogin = (formData) => {
    return (dispatch) => {
        dispatch(LoginRequest())
        axios({
            method: "POST",
            url: `${process.env.URL_BE}/api/v1/auth/login`,
            data: {
                email: formData.email,
                password: formData.password
            }
        })
        .then ((res) => {
            dispatch(LoginSucces(res.data.data))
        })
        .catch((err)=> {
            dispatch(LoginError(err.response.data))
        })
    }
}

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}


const RegisterRequest = () => {
    return {
        type: "REGISTER_REQUEST"
    }
}

const RegisterSucces = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: data
    }
}

const RegisterError = (error) => {
    return {
        type: "REGISTER_ERROR",
        payload: error
    }
}

export const AuthRegister = (formData) => {
    return (dispatch) => {
        dispatch(RegisterRequest())
        axios({
            method: "POST",
            url: `${process.env.URL_BE}/api/v1/auth/register`,
            data: {
                email: formData.email,
                password: formData.password,
                phone_number: formData.phone_number
            }
        })
        .then ((res) => {
            dispatch(RegisterSucces(res.data.data))
        })
        .catch((err)=> {
            dispatch(RegisterError(err.response.data))
        })
    }
}

