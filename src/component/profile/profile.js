import style from '../../styles/profile/Profile.module.css'
import { useRouter } from 'next/router'

export default function Profile() {
    const router = useRouter()
    let dtlogin = JSON.parse(localStorage.getItem('dtl'))

    let logoutClick = () => {
        console.log(dtlogin)
        dtlogin.isactive = false
        localStorage.setItem('dtl', JSON.stringify(dtlogin))
        router.push('/home')
    }

    return (
        <div className={`${style['main-container']}`}>
            <div>
                {/* <img className={style.images} src="/image/profile.png"></img> */}
            </div>
            <div className={style.profile}>
                <p className='text-white font-semibold text-2xl py-6'>User Profile</p>
                <div className={style.user}>
                    <div className={`${style['profile-left']}`}>
                        <img className={style.image} src="/image/userprofile.png"></img>
                        <p className={style.text1}>{dtlogin?.name ? dtlogin.name : 'Your Name'}</p>
                        <p className={style.text2}>{dtlogin?.email ? dtlogin.email : 'Your Email'}</p>
                        <button className={`${style['btn1']} ${style['btn1:hover']}`}>Choose photo</button>
                        <br />
                        <button className={`${style['btn2']} ${style['btn2:hover']}`}>Remove photo</button>
                        <br />
                        <button className={`${style['btn3']} ${style['btn3:hover']}`}>Edit Password</button>
                        <p className={style.text1}>Do you want to save <br />  the change?</p>
                        <button className={`${style['btn2']} ${style['btn2:hover']}`}>Save Change</button>
                        <br />
                        <button className={`${style['btn1']} ${style['btn1:hover']}`}>Cancel</button>
                        <br />
                        <button className={`${style['btn3']} ${style['btn3:hover']}`} onClick={logoutClick}>Log out</button>
                    </div>
                    <div className={`${style['profile-right']}`}>
                        <div className={`${style['sub-main-container']}`}>
                            <div className={`${style['box-right']}`}>
                                <div className={style.card}>
                                    <h1 className={style.text4}>Contacts</h1>
                                    <div className={`${style['box-inner']}`}>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Email adress :</h3>
                                                <input className={style.input} type='text' placeholder='your-email@gmail.com'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Delivery adress :</h3>
                                                <input className={style.input} type='text' placeholder='Whatever street'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Mobile number :</h3>
                                                <input className={style.input} type='text' placeholder='+62812xxxxx'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <h1 className={style.text4}>Details</h1>
                                    <div className={`${style['box-inner']}`}>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Display Name :</h3>
                                                <input className={style.input} type='text' placeholder='display name'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>First name :</h3>
                                                <input className={style.input} type='text' placeholder='first name'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Last name :</h3>
                                                <input className={style.input} type='text' placeholder='last name'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>DD/MM/YY</h3>
                                                <input className={style.input} type='date' placeholder='03/04/20'></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.button}>
                                <div className='flex'>
                                    <div className={`${style['button-option']}`}></div>
                                    <h3 className={`${style['text3']} pl-2`}>Male</h3>
                                </div>
                                <div className='flex text-center'>
                                    <div className={`${style['button-option']}`}></div>
                                    <h3 className={`${style['text3']} pl-2`}>Female</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`${style['line-bottom']}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}