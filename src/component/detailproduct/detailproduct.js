import { useState } from "react"
import style from "../../styles/detailproduct/DetailProduct.module.css"
import { useRouter } from "next/router"

export default function DetailProduct({ data }) {
    const [count, setCount] = useState(0)
    const result = data?.data[0]
    return (
        <div className={`${style['detail-product']} flex`}>
            <div className={`${style['detail-left']}`}>
                <div>
                    <img className={style.image} src={`${process.env.URL_BE}/uploads/${result.product_image}`}></img>
                    <p className={style.text5}>Delivery only on <b>Monday to <br /> friday</b> at <b>1 - 7 pm</b></p>
                </div>
            </div>
            <div className={`${style['detail-right']}`}>
                <div className={`${style['detail-right-content']}`}>
                    <div>
                        <h1 className={style.text1}>{`${result.product_name}`}</h1>
                        <p className={style.price}>{`IDR ${result.price}`}</p>
                        <p className={style.details}>{`${result.product_details}`}</p>
                    </div>
                    <div className={`${style['select-option']}`}>
                        <select className={`${style['select']} select-bordered w-full max-w-xs`}>
                            <option disabled selected>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <select className={`${style['select']} select-bordered w-full max-w-xs`}>
                            <option disabled selected>Select Delivery Method</option>
                            <option>Dine in</option>
                            <option>Door Delivery</option>
                            <option>Pick up</option>
                        </select>
                    </div>
                    <div className={`${style['count-order-box ']} flex`}>
                        <div className={`${style['count-order']} flex`}>
                            <button 
                                onClick={() => setCount(count + 1)}
                                className={`${style['btn-order']} ${style['btn-order:hover']} text-black bg-white px-4 py-2 rounded `}>
                                +
                            </button>
                            <span className={`${style['text2']} m-5 text-black`}>{count}</span>
                            <button
                                onClick={() => setCount(count - 1)}
                                className={`${style['btn-order']} ${style['btn-order:hover']} text-black bg-white px-4 py-2 rounded `} 
                                disabled={count == 0}>
                                -
                            </button>
                        </div>
                        <button className={`${style['btn']} ${style['btn:hover']}`}>Add to Cart</button>
                    </div>
                    <button className={`${style['btn-checkout']} ${style['btn-checkout:hover']} w-full max-w-xs`}>Checkout</button>
                </div>

            </div>
        </div>

    )
}