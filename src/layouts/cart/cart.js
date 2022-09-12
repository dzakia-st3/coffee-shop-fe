import Cart from '../../component/cart/cart'
import Layout from '../layouts'

export default function CartLayout() {
    return (
      <>
      <Layout title='Cart' withNavbar withFooter>
      <Cart />
      </Layout>
      </>
    )
  }