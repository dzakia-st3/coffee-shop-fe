import style from '../../styles/profile/Profile.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function Profile() {
    const router = useRouter()
    let dtlogin = JSON.parse(localStorage.getItem('dtl'))

    let logoutClick = () => {
        console.log(dtlogin)
        dtlogin.isactive = false
        localStorage.setItem('dtl', JSON.stringify(dtlogin))
        router.push('/home')
    }

    const [ischoosemale, setischoosemale] = useState(dtlogin.gender == 'male' ? true : false)
    const [ischoosefemale, setischoosefemale] = useState(dtlogin.gender == 'female' ? true : false)

    const [dtUser, setDtUser] = useState({
        img: '',
        email: dtlogin.email,
        phone_number: dtlogin.phone_number,
        password: dtlogin.password,
        isactive: dtlogin.isactive,
        address: dtlogin.address,
        displayname: dtlogin.display_name,
        firstname: dtlogin.firstname,
        lastname: dtlogin.lastname,
        datebirth: dtlogin.datebirth,
        gender: dtlogin.gender,
    })

    return (
        <div className={`${style['main-container']}`}>
            <div>
                {/* <img className={style.images} src="/image/profile.png"></img> */}
            </div>
            <div className={style.profile}>
                <p className='text-white font-semibold text-2xl py-6'>User Profile</p>
                <div className={style.user}>
                    <div className={`${style['profile-left']}`}>
                        <img className={style.image} src="/image/userprofile.png" />
                        <p className={style.text1}>{dtlogin?.displayname ? dtlogin.displayname : 'Your Name'}</p>
                        <p className={style.text2}>{dtlogin?.email ? dtlogin.email : 'Your Email'}</p>
                        <button className={`${style['btn1']} ${style['btn1:hover']}`}>Choose photo</button>
                        <br />
                        <button className={`${style['btn2']} ${style['btn2:hover']}`}>Remove photo</button>
                        <br />
                        <button className={`${style['btn1']} ${style['btn1:hover']}`}>Edit Password</button>
                        <br />
                        <button className={`${style['btn2']} ${style['btn2:hover']}`} onClick={() => {
                            localStorage.setItem('dtl', JSON.stringify(dtUser))

                            Swal.fire({
                                icon: 'success',
                                title: '',
                                text: 'Data updated successfully'
                            })
                        }}>Save Change</button>
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
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='your-email@gmail.com'
                                                    defaultValue={dtlogin.email ? dtlogin.email : ''}
                                                    onChange={(e) => setDtUser((prevData) => ({
                                                        ...prevData,
                                                        email: e.target.value
                                                    }))}
                                                />
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Delivery adress :</h3>
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='Whatever street'
                                                    defaultValue={dtlogin.address ? dtlogin.address : ''}
                                                    onChange={(e) => setDtUser((prevData) => ({
                                                        ...prevData,
                                                        address: e.target.value
                                                    }))}
                                                />
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Mobile number :</h3>
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='+62812xxxxx'
                                                    defaultValue={dtlogin.phone_number ? dtlogin.phone_number : ""}
                                                    onChange={(e) => setDtUser(prevData => ({
                                                        ...prevData,
                                                        phone_number: e.target.value
                                                    }))}
                                                ></input>
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
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='display name'
                                                    defaultValue={dtlogin.displayname ? dtlogin.displayname : ''}
                                                    onChange={(e) => setDtUser(prevData => ({
                                                        ...prevData,
                                                        displayname: e.target.value
                                                    }))}
                                                ></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>First name :</h3>
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='first name'
                                                    defaultValue={dtlogin.firstname ? dtlogin.firstname : ''}
                                                    onChange={(e) => setDtUser(prevData => ({
                                                        ...prevData,
                                                        firstname: e.target.value
                                                    }))}
                                                ></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Last name :</h3>
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder='last name'
                                                    defaultValue={dtlogin.lastname ? dtlogin.lastname : ''}
                                                    onChange={(e) => setDtUser(prevData => ({
                                                        ...prevData,
                                                        lastname: e.target.value
                                                    }))}
                                                ></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                        <div className={`${style['sub-box-inner']}`}>
                                            <div className={style.form}>
                                                <h3 className={style.text3}>Date Birth</h3>
                                                <input
                                                    className={style.input}
                                                    type='date'
                                                    placeholder='03/04/20'
                                                    defaultValue={dtlogin.datebirth ? dtlogin.datebirth : ''}
                                                    onChange={(e) => setDtUser(prevData => ({
                                                        ...prevData,
                                                        datebirth: e.target.value
                                                    }))}
                                                ></input>
                                                <hr className={style.line}></hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.button}>
                                <div className='flex'>
                                    {ischoosemale == false ? (
                                        <>
                                            <div className={`${style['button-option']}`} onClick={() => {
                                                setDtUser(prevData => ({ ...prevData, gender: 'male' }))
                                                setischoosemale(true)
                                                setischoosefemale(false)
                                            }}></div>
                                            <h3 className={`${style['text3']} pl-2`}>Male</h3>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`${style['button-option-selected']}`} onClick={() => setischoosemale(false)}></div>
                                            <h3 className={`${style['text3']} pl-2`}>Male</h3>
                                        </>
                                    )}
                                </div>
                                <div className='flex text-center'>
                                    {ischoosefemale == false ? (
                                        <>
                                            <div className={`${style['button-option']}`} onClick={() => {
                                                setDtUser(prevData => ({ ...prevData, gender: 'female' }))
                                                setischoosefemale(true)
                                                setischoosemale(false)

                                            }}></div>
                                            <h3 className={`${style['text3']} pl-2`}>Female</h3>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`${style['button-option-selected']}`} onClick={() => setischoosefemale(false)}></div>
                                            <h3 className={`${style['text3']} pl-2`}>Female</h3>
                                        </>
                                    )}
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