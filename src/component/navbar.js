import Link from "next/link"
import style from "../styles/Navbar.module.css"

export default function Navbar() {
  //     useEffect(()=>{
  //         import("bootstrap/dist/js/bootstrap");
  // },[])  

  return (
    <div className={style.navbar}>
      <div className={`${style['navbar-left']}`}>
        <img src='/image/coffee 1.png'></img>
        <h1>Coffe Shop</h1>
      </div>
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
          <Link href={'#'}>History</Link>
        </div>
      </div>
      <div className={`${style['navbar-right']}`}>
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
      </div>
    </div>
  )
}
