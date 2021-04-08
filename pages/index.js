import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ForVendors from '../components/ForVendors'
import ForBoosters from '../components/ForBoosters'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Testimonials from '../components/Testimonials'
import DownloadApp from '../components/DownloadApp'
import CTA from '../components/CTA'


export default function Home() {
  return (
    <>
      <Head>
        <title>Didalla</title>
        <meta name="keywords" content="didalla content-creators marketplace content"/>
      </Head>

      <Navbar />
        <div className=''>
          <Hero />
          <ForVendors />
          <ForBoosters />
          <Testimonials />
          <DownloadApp />
          <CTA />
        </div>
      <Footer />
    </>
  )
}
