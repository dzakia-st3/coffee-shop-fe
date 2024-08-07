import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useState } from "react"
import { AuthLogout } from "../redux/actions/Auth"
import style from "../styles/Navbar.module.css"
import Swal from "sweetalert2"

export default function Navbar() {
  // const { data, error, loading, isLogin } = useSelector((state) => state.auth)

  let dtlogin = JSON.parse(localStorage.getItem('dtl'))

  const dispatch = useDispatch()
  const router = useRouter()

  const [open, setOpen] = useState(false)

  return (
    <div className={style.navbar}>
      <Link href={'/home'}>
        <div className={`${style['navbar-left']}`}>
          <img src='/image/coffee 1.png'></img>
          <h1>Coffee Shop</h1>
        </div>
      </Link>
      <div className={`${style['navbar-middle']}`}>
        <div>
          <Link href={'/home'}>Home</Link>
        </div>
        <div>
          <Link href={'/product'}>Product</Link>
        </div>
        <div>
          <Link href={'/cart'}>Your Cart</Link>
        </div>
        <div>
          <Link href={'history'}>History</Link>
        </div>
      </div>
      <div className={`${style['navbar-right']}`}>
        {/* isLogin ? ( */}
        {dtlogin && dtlogin.isactive == true ? (
          <>
            <div className={`${style['container-nav']}`}>
              <img className={style.image2} src='/image/chat.png'></img>
              <div className={style.profile}>
                <div>
                  <img
                    className={style.image}
                    src="/image/userprofile.png"
                    onClick={() => open == false ? setOpen(true) : setOpen(false)}
                    onDoubleClick={() => setOpen(false)}
                  ></img>
                </div>
                <div className={`${style['dropdown-menu']}`}>
                  {open ? (
                    <ul onClick={() => setOpen(true)}>
                      <li>
                        <Link href={'/profile'}>
                          Profile</Link></li>
                      <hr />
                      <li onClick={() => {
                        // dispatch(AuthLogout())
                        // Swal.fire({
                        //   icon: 'success',
                        //   title: '',
                        //   text: 'Logout Success',
                        // })
                        dtlogin.isactive = false
                        localStorage.setItem('dtl', JSON.stringify(dtlogin))
                        router.push('/home')
                      }}><Link href={'/home'}>
                          Logout</Link></li>
                    </ul>)
                    : ''}
                </div>
              </div>
              {/* <div onClick={() => {
                dispatch(AuthLogout())
                Swal.fire({
                  icon: 'success',
                  title: '',
                  text: 'Logout Success',
                })
              }}>
                <img className={style.image} src='/image/profil1.png'></img>
              </div> */}
            </div>
          </>
        ) : (
          <>
            <div>
              <Link href={'/auth/login'}>
                <button className={`${style['btn-navbar']} ${style['btn-navbar:hover']}`}>Login</button>
              </Link>
            </div>
            <div>
              <Link href={'/auth/register'}>
                <button className={`${style['btn-navbar']} ${style['btn-navbar:hover']}`}>Sign Up</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}



{/* <div className='nav-right'>
{isLogin ? (
  <>
    <SearchBar/>
    <div className='profile'>
      <div>
        <img src={profile} onClick={() => setOpen(true)} />
      </div>
      <div className='dropdown-menu'>
        {open ? (
          <ul onClick={() => setOpen(false)}>
            <li>
              <Link to={'/movies'}>
                <img src={logoUser}></img>
                Profile</Link></li>
            <hr />
            <li onClick={() => {dispatch(AuthLogout())
            Swal.fire({
              icon: 'success',
              title: '',
              text: 'Logout Success',
            })
            navigate('/')
            }}><Link to={'/movies'}>
              <img src={logout}></img>
              Logout</Link></li>
          </ul>)
          : ''}
      </div>
    </div>
  </>
) : (
  <button className='btn1'><Link to={'/login'}>Sign Up</Link></button>
)}
</div> */}
