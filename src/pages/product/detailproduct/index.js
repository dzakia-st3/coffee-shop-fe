import Layout from '../../../layouts/layouts'
import DetailProduct from '../../../component/detailproduct/detailproduct'

export default function detailproductpage({data}) {
  console.log(data, 'cek isi slug')
  return (
    <>
    <Layout title='Detail Product' withNavbar withFooter>
    <DetailProduct data={data}/>
    </Layout>
    </>
  )
}

// export async function getServerSideProps({params}) {
//   const res = await fetch(`${process.env.URL_BE}/api/v1/product/${params.product_id}`)
//   const data = await res.json()
//   return {
//     props:
//     {
//       data:data, 
//     }
//   }
// }