import style from "../../styles/home/Favorite.module.css"

export default function Favorite() {
    return (
        <div className={style.favorite}>
            <p className={`${style['favorite-p1']}`}>{`Here is People's Favorite`}</p>
            <p className={`${style['favorite-p2']}`}>{`Let's choose and have a bit taste of people's favorite. It might be yours too!`}</p>
            <div className={`${style['content-favorite']}`}>
                <div className={`${style['card-cover']}`}>
                    <div className={`${style['image-card']}`}>
                        <img className={style.image} src="/image/hazelnut.png"></img>
                    </div>
                    <div className={`${style['card-content']} ${style['card-content:hover']}`}>
                        <div>
                            <h4 className={style.text1}>Hazelnut Latte</h4>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Hazelnut Syrup</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Vanilla Whipped Cream</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Ice / Hot</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Sliced Banana on Top</h5>
                                </div>
                            </div>
                        </div>
                        <div className={`${style['footer-card']}`}>
                            <h1>IDR 25.000</h1>
                            <button className={`${style['btn-1']} ${style['btn-1:hover']}`}>Order Now</button>
                        </div>
                    </div>    
                </div>
                <div className={`${style['card-cover']}`}>
                    <div className={`${style['image-card']}`}>
                        <img className={style.image} src="/image/pinkyPromise.png"></img>
                    </div>
                    <div className={`${style['card-content']} ${style['card-content:hover']}`}>
                        <div>
                            <h4 className={style.text1}>Pinky Promise</h4>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>1 Shot of Coffee</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Vanilla Whipped Cream</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Chocolate Biscuits</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Strawberry Syrup</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Sliced strawberry on Top</h5>
                                </div>
                            </div>
                        </div>
                        <div className={`${style['footer-card']}`}>
                            <h1>IDR 30.000</h1>
                            <button className={`${style['btn-1']} ${style['btn-1:hover']}`}>Select</button>
                        </div>
                    </div>    
                </div>
                <div className={`${style['card-cover']}`}>
                    <div className={`${style['image-card']}`}>
                        <img className={style.image} src="/image/chickenWings.png"></img>
                    </div>
                    <div className={`${style['card-content']} ${style['card-content:hover']}`}>
                        <div>
                            <h4 className={style.text1}>Chicken Wings</h4>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Wings</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Drum Sticks</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Mayonaise and Lemon</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Hot Fried</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Secret Recipe</h5>
                                </div>
                            </div>
                            <div className={`${style['card-content-text']}`}>
                                <div className={style.ceklis2}>
                                    <img src="/image/ceklis2.png"></img>
                                </div>
                                <div>
                                    <h5>Buy 1 Get 1 only for Dine in</h5>
                                </div>
                            </div>
                        </div>
                        <div className={`${style['footer-card']}`}>
                            <h1>IDR 40.000</h1>
                            <button className={`${style['btn-1']} ${style['btn-1:hover']}`}>Select</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}