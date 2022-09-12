// import Product from '../../component/product/product'

// function ProductByCategory ({product, category_id}) {
//     return (
//         <>
//         <Product product={product} category_id={category_id}/> 
//         </>
//     )
// }

// export default ProductByCategory

// export async function getServerSideProps(context) {
//     const { params } = context
//     const {category_id} = params
//     const res = await fetch(`http://localhost:3000/api/v1/product/?category_id=${category_id}`)
//     const data = await res.json()
//     return {
//         props: {
//             product: data,
//             category_id
//         }
        
//     }
// }

<input type="password" class="form-control form-control-lg no-b" placeholder="Password" id="pass" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Password harus berjumlah 6 karakter terdiri dari huruf kecil, huruf besar, dan angka!" required=""></input>