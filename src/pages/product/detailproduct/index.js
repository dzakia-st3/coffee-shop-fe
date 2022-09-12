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
  const res = await fetch(`https://urchin-app-dga4h.ondigitalocean.app/api/v1/product/17`)
  const data = await res.json()
  return {
    props:
    {
      data:data, 
    }
  }
}