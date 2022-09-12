import Layout from '../../../layouts/layouts'
import {Footer, FormForgot} from '../../../component/auth/index'

export default function Forgot() {
    return (
       <Layout>
          <div className='auth'>
          <div className='image-left'>
              <img src='/image/forgot.png'></img>
          </div>
          <div>
              <FormForgot/>
              <Footer/>
          </div>
        </div>
       </Layout>  
    )
  }