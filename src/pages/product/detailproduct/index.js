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