import style from "../../styles/auth/Login.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { AuthLogin } from "../../redux/actions/Auth"
import Swal from "sweetalert2"

export default function FormLogin() {
    const { data, error, loading, isLogin } = useSelector((state) => state.auth)
    // console.log(error.message, 'cek isi error di login')
    const dispatch = useDispatch()
    const router = useRouter()

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(AuthLogin(formLogin))

        if (isLogin === true) {
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Login Success',
            })
            router.replace('/home')
        } else {
            Swal.fire({
                icon: 'error',
                title: '',
                text: 'Wrong email/password',
            })
            router.replace('/auth/login')
        }
    }

    return (
        <div className={style.login}>
            <div className={`${style['container-image']}`}>
                <img className={style.image} src='/image/Auth.png'></img>
            </div>
            <div className={`${style['container-form']}`}>
                <div className={`${style['form-navbar']}`}>
                    <div className={style.top}>
                        <img src='/image/coffee 1.png'></img>
                        <h1 className={style.text1}>Coffe Shop</h1>
                    </div>
                    <Link href={'/auth/register'}><button className={style.btn}>Sign Up</button></Link>
                </div>
                <h1 className={style.text2}>Login</h1>
                <form className={`${style['form-submit']}`} onSubmit={handleLogin}>
                    <div className={style.form}>
                        <p className={style.text3}>Email Adress:</p>
                        <input
                            type="text"
                            placeholder="Enter your email adress"
                            className={style.input}
                            onChange={(e) => setFormLogin((prevData) => ({
                                ...prevData,
                                email: e.target.value
                            }))} />
                    </div>
                    <div className={style.form}>
                        <p className={style.text3}>Password:</p>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className={style.input}
                            onChange={(e) => setFormLogin((prevData) => ({
                                ...prevData,
                                password: e.target.value
                            }))} />
                    </div>
                </form>
                <h2 className={style.text4}>Forgot Password?</h2>
                <button className={style.btn2} onClick={handleLogin}>Login</button>
                <div className={style.btn3}>
                    <img className={style.image2} src='/image/google.png' />
                    <h3>Login with Google</h3>
                </div>
            </div>
        </div>
    )
}