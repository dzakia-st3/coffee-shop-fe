import style from '../../styles/profile/Profile.module.css'

export default function Profile () {
    return (
        <div>
            <p>User Profile</p>
            <div className={style.user}>
                <div className={`${style['profile-left']}`}>
                    <img className={style.image} src="/image/userprofile.png"></img>
                    <p className={style.text1}>Zulaikha</p>
                    <p className={style.text2}>zulaikha17@gmail.com</p>
                    <button className={`${style['btn1']} ${style['btn1:hover']}`}>Choose photo</button>
                    <br/>
                    <button className={`${style['btn2']} ${style['btn2:hover']}`}>Remove photo</button>
                    <br/>
                    <button className={`${style['btn3']} ${style['btn3:hover']}`}>Edit Password</button>
                    <p className={style.text1}>Do you want to save <br/>  the change?</p>
                    <button className={`${style['btn2']} ${style['btn2:hover']}`}>Save Change</button>
                    <br/>
                    <button className={`${style['btn1']} ${style['btn1:hover']}`}>Cancel</button>
                    <br/>
                    <button className={`${style['btn3']} ${style['btn3:hover']}`}>Log out</button>
                </div>
                <div className='profile-right'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}