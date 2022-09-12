import style from '../../styles/product/Product.module.css'
import { useState } from 'react'
import Link from "next/link"

function Product ({data, data1, data2, data3}) {
    console.log (data1, 'ini data product')
    const result = data.data
    const result1 = data1.data
    const result2 = data2.data
    const result3 = data3.data
    const [toggleState, setToggleState] = useState(1); 
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className={style.product}>
            <div className='container'>
                <div className='bloc-tabs flex'>
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(1)}>Favorite & Promo</div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(2)}>Coffee</div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(3)}>Non Coffee</div>
                    <div className={toggleState === 4 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(4)}>Food</div>
                    <div className={toggleState === 5 ? "tabs active-tabs" : "tabs" } onClick={() => toggleTab(5)}>Add- on</div>
                </div>
                <div className='content-tabs'>
                    <div className={toggleState === 1 ? "content active-content" : "content" } onClick={() => toggleTab(1)}>
                    {result.map((item, index) => {
                        return (
                            <div className={`${style['card-food']}`}>
                                <Link href={`/detailproduct`}>
                                    <div>
                                        <img className={style.image} src={`https://urchin-app-dga4h.ondigitalocean.app/uploads/${item.product_image}`}></img>
                                    </div>
                                </Link>
                                <h1 className={style.text1}>{`${item.product_name}`}</h1>
                                <h2 className={style.text2}>{`IDR ${item.price}`}</h2>
                            </div> 
                        )
                    })}
                    </div>
                    <div className={toggleState === 2 ? "content active-content" : "content" } onClick={() => toggleTab(1)}>
                    {result1.map((item, index) => {
                        return (
                            <div className={`${style['card-food']}`}>
                                <Link href={`/detailproduct`}>
                                    <div>
                                        <img className={style.image} src={`https://urchin-app-dga4h.ondigitalocean.app/uploads/${item.product_image}`}></img>
                                    </div>
                                </Link>
                                <h1 className={style.text1}>{`${item.product_name}`}</h1>
                                <h2 className={style.text2}>{`IDR ${item.price}`}</h2>
                            </div> 
                        )
                    })}
                    </div>
                    <div className={toggleState === 3 ? "content active-content" : "content" } onClick={() => toggleTab(1)}>
                    {result2.map((item, index) => {
                        return (
                            <div className={`${style['card-food']}`}>
                                <Link href={`/detailproduct/${item.product_id}`}>
                                    <div>
                                        <img className={style.image} src={`https://urchin-app-dga4h.ondigitalocean.app/uploads/${item.product_image}`}></img>
                                    </div>
                                </Link>
                                <h1 className={style.text1}>{`${item.product_name}`}</h1>
                                <h2 className={style.text2}>{`IDR ${item.price}`}</h2>
                            </div> 
                        )
                    })}
                    </div>
                    <div className={toggleState === 4 ? "content active-content" : "content" } onClick={() => toggleTab(1)}>
                    {result3.map((item, index) => {
                        return (
                            <div className={`${style['card-food']}`}>
                                <Link href={`/detailproduct`}>
                                    <div>
                                        <img className={style.image} src={`https://urchin-app-dga4h.ondigitalocean.app/uploads/${item.product_image}`}></img>
                                    </div>
                                </Link>
                                <h1 className={style.text1}>{`${item.product_name}`}</h1>
                                <h2 className={style.text2}>{`IDR ${item.price}`}</h2>
                            </div> 
                        )
                    })}
                    </div>
                    <div className={toggleState === 5 ? "content active-content" : "content" }>
                        <div className={`${style['card-food']}`}>
                            <div>
                                <img className={style.image} src='/image/pinkyPromise.png'></img>
                            </div>
                            <h1 className={style.text1}>Veggie Tomato Mix</h1>
                            <h2 className={style.text2}>IDR 34.000</h2>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Product