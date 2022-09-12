import style from "../../styles/home/Cover1.module.css"

export default function Cover() {
    return (
        <div className={style.homepage}>
            <img className={style.image} src='/image/coverHero1.png'></img>
            <div className={`${style['content-hp']}`}>
                <div className={`${style['image-content-top']}`}>
                    <div className={`${style['image-content-top-left']}`}>
                        <h1 className={style.text1}>Start Your Day with <br /> Coffee and Good Meals</h1>
                        <h2 className={style.text2}>We provide high quality beans, good taste, and healthy <br/> meals made by love just for you. Start your day with us <br /> for a bigger smile!</h2>
                        <button className={`${style['content-btn']} ${style['content-btn:hover']}`}>Get Started</button>
                    </div>
                    <div className={`${style['image-content-top-right']}`}>
                    </div>
                </div>
                <div className={`${style['box-cover']} mx-auto`}>
                    <div className="box-inner">
                        <div>
                            <img src='/image/user.png'></img>
                        </div>
                        <div>
                            <h3>90+</h3>
                            <h4>Staff</h4>
                        </div>
                    </div>
                    <hr/>
                    <div className="box-inner">
                        <div>
                            <img src='/image/location.png'></img>    
                        </div>
                        <div>
                            <h3>800+</h3>
                            <h4>Stores</h4>
                        </div>
                    </div>
                    <hr/>
                    <div className="box-inner">
                        <div>
                            <img src='/image/like.png'></img>
                        </div>
                        <div>
                            <h3>30+</h3>
                            <h4>Customers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}