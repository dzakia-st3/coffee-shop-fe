import style from '../../styles/product/Sidebar.module.css'

export default function Sidebar () {
    return (
        <div className='Sidebar-product'>
            <div className='Sidebar-Promo'>
                <div className='sidebar-top'>
                    <h4>Promo Today</h4>
                    <h5>Coupons will be updated every weeks.<br/> Check them out! </h5>
                </div>
                <div className='card-promo mother flex items-center'>
                    <div>
                        <img src="/image/mother.png"></img>
                    </div>
                    <div>
                        <h4><b>HAPPY MOTHER’S DAY!</b> <br/> Get one of our favorite <br/> menu for free!</h4>
                    </div>
                </div>
                <div className='card-promo father flex items-center'>
                    <div>
                        <img src="/image/father.png"></img>
                    </div>
                    <div>
                        <h4><b>Get a cup of coffee for free <br/> on sunday morning <br/></b> Only at 7 to 9 AM</h4>
                    </div>
                </div>
                <div className='card-promo mother flex items-center'>
                    <div>
                        <img src="/image/mother.png"></img>
                    </div>
                    <div>
                        <h4><b>HAPPY MOTHER’S DAY!</b><br/> Get one of our favorite <br/> menu for free!</h4>
                    </div>
                </div>
                <div className='card-promo grandfa flex items-center'>
                    <div>
                        <img src="/image/grandfa.png"></img>
                    </div>
                    <div>
                        <h4><b>HAPPY HALLOWEEN!</b><br/> free only if you buy pinky promise</h4>
                    </div>
                </div>
                <button className='apply w-full max-w-xs'>Apply Coupon</button>
                <div className='text-promo'>
                    <h1>Terms and Condition</h1>
                    <h2>1. You can only apply 1 coupon per day</h2>
                    <h2>2. It only for dine in</h2>
                    <h2>3. Buy 1 get 1 only for new user</h2>
                    <h2>4. Should make member card to apply coupon</h2>
                </div>
            </div>
        </div>
    )
}