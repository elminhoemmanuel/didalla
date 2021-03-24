import Head from 'next/head'
import ForVendors from '../components/ForVendors'
import ForBoosters from '../components/ForBoosters'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Didalla</title>
        <meta name="keywords" content="didalla content-creators marketplace content"/>
      </Head>

      <div className='mt-32'>
        <Hero />
        <ForVendors />
        <ForBoosters />
      </div>
    </>
  )
}
