import Head from 'next/head'
import Navbar from '../component/navbar'
import Footer from '../component/footer'

const Layout = ({ title = "Home", withNavbar = false, withFooter = false, children }) => {
    return (
        <>
            <Head>
                {/* Link Font */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

                <title>{title} - Coffee Shop</title>
            </Head>
            {withNavbar && (
                <Navbar />
            )}
            <main>{children}</main>
            {withFooter && (
                <Footer />
            )}
        </>
    )
}

export default Layout