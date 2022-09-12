import style from "../../styles/auth/Login.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { AuthRegister } from "../../redux/actions/Auth"
import Swal from "sweetalert2"

export default function FormRegister() {
    const register = useSelector((state) => state.register)
    const dispatch = useDispatch()
    const router = useRouter()

    const [formRegist, setFormRegist] = useState({
        email: '',
        password: '',
        phone_number: '',
    })

    const handleRegist = (e) => {
        e.preventDefault()
        dispatch(AuthRegister(formRegist))

        if (register.isRegister == true) {
            Swal.fire({
                icon: 'success',
                title: '',
                text: 'Register Success',
            })
            router.push('/auth/login')
        } 
        // else {
        //     Swal.fire({
        //         icon: 'error',
        //         title: '',
        //         text: 'Oops, something wrong',
        //     })
        // }
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
                    <Link href={'/auth/login'}><button className={style.btn}>Login</button></Link>
                </div>
                <h1 className={style.text2}>Sign Up</h1>
                <form className={`${style['form-submit']}`} onSubmit={handleRegist}>
                    <div className={style.form}>
                        <p className={style.text3}>Email Adress:</p>
                        <input
                            type="text"
                            placeholder="Enter your email adress"
                            className={style.input}
                            onChange={(e) => setFormRegist((prevData) => ({
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
                            onChange={(e) => setFormRegist((prevData) => ({
                                ...prevData,
                                password: e.target.value
                            }))} />
                    </div>
                    <div className={style.form}>
                        <p className={style.text3}>Phone Number:</p>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            className={style.input}
                            onChange={(e) => setFormRegist((prevData) => ({
                                ...prevData,
                                phone_number: e.target.value
                            }))} />
                    </div>
                </form>
                <button className={style.btn2} onClick={handleRegist}>Sign Up</button>
                <div className={style.btn3}>
                    <img className={style.image2} src='/image/google.png' />
                    <h3>Sign Up with Google</h3>
                </div>
            </div>
        </div>
    )
}