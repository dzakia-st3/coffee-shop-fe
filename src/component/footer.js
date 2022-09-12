import style from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className={`${style['footer-bottom']} flex`}>
                <div className={`${style['footer-left']} flex`}>
                    <div className={`${style['footer-left-top']} flex row items-center`}>
                        <img src='/image/coffee 1.png'></img>
                        <h1 className={style.text1}>Coffee Shop</h1>
                    </div>
                    <p className={style.text2}>Coffee Shop is a store that sells some good <br/> meals, and especially coffee. We provide <br/> high quality beans</p>
                    <div className={`${style['medsos-footer']} flex`}>
                        <img src="/image/facebook.png"></img>
                        <img src="/image/twitter.png"></img>
                        <img src="/image/instagram.png"></img>
                    </div>
                    <p className={style.text2}>©2020CoffeeStore</p>
                </div>
                <div className={`${style['footer-right']} flex`}>
                    <div className={`${style['footer-text-cover']}`}>
                        <h1 className={style.text3}>Product</h1>
                        <p>Download</p>
                        <p>Pricing</p>
                        <p>Locations</p>
                        <p>Countries</p>
                        <p>Blog</p>
                    </div>
                    <div className={`${style['footer-text-cover']}`}>
                        <h1 className={style.text3}>Engage</h1>
                        <p>Coffe Shop?</p>
                        <p>FAQ</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>   
        </div>
    </>    
    )
}