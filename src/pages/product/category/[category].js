import Sidebar from '../../../component/product/sidebar'
import Product from '../../../component/product/product'
import Layout from '../../../layouts/layouts'
import Link from "next/link"

export default function ProductPage({products}) {
    console.log(products, 'cek category id')
  return (
    <>
    <Layout title='Product' withNavbar withFooter>
    <div className='flex'>
    <Sidebar/>
    <Link href={'/detailproduct/' + data.product_id}>
      <Product data={products} />
    </Link>
    </div>
    </Layout>
    </>
  )
}

export async function getStaticPaths () {
    const result = await fetch(`${process.env.URL_BE}/api/v1/product/`)
    const product = await result.json()
    const paths = product?.data?.map((product) => (
        {params: {category_id: product.category_id.toString()}}
    ))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`${process.env.URL_BE}/api/v1/product/${params.category_id}`)
    const products = await res.json()
    return {
        props: 
        {
            products,
        }
    }
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.URL_BE}/api/v1/product/`)
//   const res1 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=1`)
//   const res2 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=2`)
//   const res3 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=3`)
//   const data = await res.json()
//   const data1 = await res1.json()
//   const data2 = await res2.json()
//   const data3 = await res3.json()
//   return {
//     props:
//     {
//       data:data, 
//       data1: data1, 
//       data2: data2, 
//       data3: data3,
//     }
//   }
// }