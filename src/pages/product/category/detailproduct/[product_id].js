import Layout from '../../../../layouts/layouts'
import DetailProduct from '../../../../component/detailproduct/detailproduct'
import { useRouter } from 'next/router'
import dataProduct from '../../../../../public/product.json'

export default function DetailProductpage({ products }) {
  return (
    <>
      <Layout title='Detail Product' withNavbar withFooter>
        <DetailProduct data={products} />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  // const result = await fetch(`${process.env.URL_BE}/api/v1/product/`);
  // const product = await result.json();
  const paths = dataProduct?.data?.map((product) => (
    { params: { product_id: product.product_id.toString() } }
  ))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`${process.env.URL_BE}/api/v1/product/${params.product_id}`)
  // const products = await res.json()
  const products = dataProduct.data.filter((e) => e.product_id == params.product_id)
  return {
    props:
    {
      products,
    }
  }
}