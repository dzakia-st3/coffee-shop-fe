import style from "../../styles/home/Testimoni.module.css"

export default function Testimoni() {
    return (
        <div className={style.testimoni}>
            <div>
            <p className={`${style['map-p1']}`}>Loved by Thousands of <br/>Happy Customer</p>
            <p className={`${style['map-p2']}`}>These are the stories of our customers who have visited us with great <br/> pleasure.</p>
            </div>
            <div className={`${style['card2-testimoni']} flex`}>
                <div className={`${style['card2']}`}>
                    <div className={`${style['card2-text-top']} flex`}>
                        <div className={`${style['card2-profil-left']} flex`}>
                            <img src="/image/profil1.png"></img>
                            <div className="ml-4">
                                <h6 className={style.text1}>Viezh Robert</h6>
                                <h7>Warsaw, Poland</h7>
                            </div>
                        </div>
                        <div className={`${style['card2-profil-right']} flex items-center`}>
                            <h8>4.5</h8>
                            <div>
                                <img src="/image/star.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className={`${style['card2-content']}`}>
                        <p>“Wow... I am very happy to spend my whole <br/> day here. the Wi-fi is good, and the coffee and <br/> meals tho. I like it here!! Very recommended!</p>
                    </div>
                </div>
                <div className={`${style['card2']}`}>
                    <div className={`${style['card2-text-top']} flex`}>
                        <div className={`${style['card2-profil-left']} flex`}>
                            <img src="/image/profil2.png"></img>
                            <div className="ml-4">
                                <h6 className={style.text1}>Yessica Christy</h6>
                                <h7>Shanxi, China</h7>
                            </div>
                        </div>
                        <div className={`${style['card2-profil-right']} flex items-center`}>
                            <h8>4.5</h8>
                            <div>
                                <img src="/image/star.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className={`${style['card2-content']}`}>
                        <p>“I like it because I like to travel far and still can <br/> make my day better just by drinking their <br/> Hazelnut Latte</p>
                    </div>
                </div>
                <div className={`${style['card2']}`}>
                    <div className={`${style['card2-text-top']} flex`}>
                        <div className={`${style['card2-profil-left']} flex`}>
                            <img src="/image/profil3.png"></img>
                            <div className="ml-4">
                                <h6 className={style.text1}>Kim Young Jou</h6>
                                <h7>Seoul, South Korea</h7>
                            </div>
                        </div>
                        <div className={`${style['card2-profil-right']} flex items-center`}>
                            <h8>4.5</h8>
                            <div>
                                <img src="/image/star.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className={`${style['card2-content']}`}>
                        <p>“This is very unusual for my taste, I haven’t <br/> liked coffee before but their coffee is the <br/> best! and yup, you have to order the chicken <br/> wings, the best in town!</p>
                    </div>
                </div>
            </div>
            <div className={`${style['box-cover']} ${style['box-cover-content']} mx-auto`}>
                <div>
                    <h1 className={style.text2}>Check our promo <br/> today!</h1>
                    <h4>{`Let's see the deals and pick yours!`}</h4>
                </div>
                <button className={`${style['btn3']} ${style['btn3:hover']}`}>See Promo</button>
            </div>
            
        </div>
        
    )
}