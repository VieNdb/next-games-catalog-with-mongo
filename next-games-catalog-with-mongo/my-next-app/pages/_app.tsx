import Footer from '../components/footer'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
