import style from './Cart.module.css'
import Link from 'next/link'

export default function Cart() {
    return (

        <div className={style.cart}>

            <div className={style.content}>
                <div className={`${style['content-left']}`}>
                    <div>
                        <h1 className={style.text1}>Checkout your <br /> item now!</h1>
                    </div>
                    <div className={`${style['box-card']}`}>
                        <h2 className={style.text3}>Order Summary</h2>
                        <div className={`${style['card-order']}`}>
                            <div className={`${style['card-order-sub']}`}>
                                <div>
                                    <img src='/image/order1.png'></img>
                                </div>
                                <div className={style.text}>
                                    <div className={`${style['text-left']}`}>
                                        <h3>Hazelnut Latte</h3>
                                        <h3>x 1</h3>
                                        <h3>Regular</h3>
                                    </div>
                                    <div className={`${style['text-right']}`}>
                                        <h3>IDR 24.0</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style['card-order-sub']}`}>
                                <div><img src='/image/order2.png'></img></div>
                                <div className={style.text}>
                                    <div className={`${style['text-left']}`}>
                                        <h3>Chicken Fire Wings</h3>
                                        <h3>x 2</h3>
                                        <h3>Regular</h3>
                                    </div>
                                    <div className={`${style['text-right']}`}>
                                        <h3>IDR 30.0</h3>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={style.boxpay}>
                                <div className={`${style['text-left']}`}>
                                    <h3>SUBTOTAL</h3>
                                    <h3>TAX & FEES</h3>
                                    <h3>SHIPPING</h3>
                                </div>
                                <div className={`${style['text-right']}`}>
                                    <h3>IDR 120.000</h3>
                                    <h3>IDR 20.000</h3>
                                    <h3>IDR 10.000</h3>
                                </div>
                            </div>

                            <div className={style.textbottom}>
                                <div>TOTAL</div>
                                <div>IDR 150.000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style['content-right']}`}>
                    <div>
                        <div className={style.text2}>Address details</div>
                        <div className={style.boxright}>
                            <div className={style.text4}><b>Delivery</b> to Iskandar Street</div>
                            <hr />
                            <div className={style.text4}>Km 5 refinery road opposite re <br /> public road, effurun, Jakarta</div>
                            <hr />
                            <div className={style.text4}>+62 81348287878</div>
                        </div>
                    </div>
                    <div>
                        <div className={style.text2}>Payment method</div>
                        <div className={style.boxright}>
                            <div className={style.partpay}>
                                <div className={style.img}><img src='/image/card.png'></img></div>
                                <div>Card</div>
                            </div>
                            <hr />
                            <div className={style.partpay}>
                                <div className={style.img}><img src='/image/bank.png'></img></div>
                                <div>Bank account</div>
                            </div>
                            <hr />
                            <div className={style.partpay}>
                                <div className={style.img}><img src='/image/delivery.png'></img></div>
                                <div>Cash on Delivery</div>
                            </div>
                        </div>
                    </div>
                    <Link href={'/history'}><button className={`${style['btn']} ${style['btn']} w-full max-w-xm`}>Confirm and Pay</button></Link>
                </div>
            </div>
        </div>

    )
}


// <div>
//                 <img className={style.image} src="/image/payment.png"></img>
//             </div>