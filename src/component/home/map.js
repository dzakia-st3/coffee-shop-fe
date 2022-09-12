import style from "../../styles/home/Map.module.css"

export default function Map() {
    return (
        <div className={style.map}>
            <div className={`${style['map-text']}`}>
                <p className={`${style['map-p1']}`}>Visit Our Store in The <br/>Spot on the Map Below</p>
                <p className={`${style['map-p2']}`}>See our store in every city on the spot and spen your good day there. See <br/>you soon!</p>
            </div>
            <div className={`${style['map-image']}`}>
                <img src='/image/Huge Global.png'></img>
                <p className={`${style['map-image-text']}`}>Our Partner</p>
                <img src="/image/Sponsored.png"></img>
            </div>
        </div>
    )
}