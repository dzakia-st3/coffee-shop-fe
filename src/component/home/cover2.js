import style from "../../styles/home/Cover2.module.css"

export default function Cover2() {   
    return (
        <div className={style.cover2}>
            <div>
                <img className={style.image} src='/image/coverHero2.png'></img>
            </div>
            <div className={`${style['cover2-text']}`}>
                <div>
                    <h3 className={style.text1}>We Provide Good Coffee <br/>and Healthy Meals</h3>
                </div>
                <div>
                    <h4 className={style.text2}>You can explore the menu that we provide with fun and <br />have their own taste and make your day better.</h4>
                </div>
                <div className={style.box1}>
                    <div className={`${style['text-cover2']}`}>
                        <img className={style.image2} src='/image/ceklis.png'></img>
                        <h5>High quality beans</h5>
                    </div>
                    <div className={`${style['text-cover2']}`}>
                        <img className={style.image2} src='/image/ceklis.png'></img>
                        <h5>Healthy meals, you can request the ingredients</h5>
                    </div>
                    <div className={`${style['text-cover2']}`}>
                        <img className={style.image2} src='/image/ceklis.png'></img>
                        <h5>Chat with our staff to get better experience for ordering</h5>
                    </div>
                    <div className={`${style['text-cover2']}`}>
                        <img className={style.image2} src='/image/ceklis.png'></img>
                        <h5>Chat with our staff to get better experience for ordering</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}