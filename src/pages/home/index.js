import Layout from '../../layouts/layouts'
import {Cover, Cover2, Favorite, Map, Testimoni} from '../../component/home'

export default function Home() {
  return (
    <>
    <Layout withNavbar withFooter>
    <Cover/>
    <Cover2/>
    <Favorite/>
    <Map/>
    <Testimoni/>
    </Layout>
    </>

  )
}