import Layout from '../../../layouts/layouts'
import DetailProduct from '../../../component/detailproduct/detailproduct'

export default function detailproductpage({data}) {
  return (
    <>
    <Layout title='Detail Product' withNavbar withFooter>
    <DetailProduct data={data}/>
    </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3008/api/v1/product/${product_id}`)
  const data = await res.json()
  return {
    props:
    {
      data:data, 
    }
  }
}