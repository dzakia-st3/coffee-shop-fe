import Sidebar from '../../component/product/sidebar'
import Product from '../../component/product/product'
import Layout from '../../layouts/layouts'
import Link from "next/link"
import dataProduct from '../../../public/product.json'

export default function ProductPage({ data, data1, data2, data3 }) {
  return (
    <>
      <Layout title='Product' withNavbar withFooter>
        <div className='flex'>
          <Sidebar />
          <Link href={'/detailproduct/' + data.product_id}>
            <Product data={data} />
          </Link>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  // const res = await fetch(`${process.env.URL_BE}/api/v1/product/`)
  // const res1 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=1`)
  // const res2 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=2`)
  // const res3 = await fetch(`${process.env.URL_BE}/api/v1/product/?category_id=3`)
  // const data = await res.json()
  // const data1 = await res1.json()
  // const data2 = await res2.json()
  // const data3 = await res3.json()

  console.log(dataProduct, 'cek isi res')


  return {
    props:
    {
      data: dataProduct.data,
      data1: dataProduct.data.filter((e) => e.category_id == 1),
      data2: dataProduct.data.filter((e) => e.category_id == 2),
      data3: dataProduct.data.filter((e) => e.category_id == 3),
    }
  }
}
