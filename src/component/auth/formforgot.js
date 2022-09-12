import style from '../../styles/auth/Forgot.module.css'

export default function FormForgot () {
    return (
        <div className={style.formforgot}>
            <div className={style.top}>
                <img src='/image/coffee 1.png'></img>
                <p>Coffee Shop</p>
            </div>
            <div className={style.text}>
                <p className={style.text1}>Forgot your password?</p>
                <p className={style.text2}>Don't worry, we got your back!</p>
            </div>
            <div className={style.forgotinput}>
                <input type="text" className={`${style.form} w-full max-w-xs`} placeholder="Enter your email address to get link"/>
                <button className={`${style['btn']} ${style['btn:hover']} w-full max-w-xs`}>Send</button>
            </div>
            <p className={style.text3}>Click here if you didn’t receive any link in 2 minutes <br/><b>01:52</b></p>
            <button className={`${style['btn2']} ${style['btn2:hover']} w-full max-w-xs`}>Resend Link</button>
        </div>
    )
}