import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ForVendors from '../components/ForVendors'
import ForBoosters from '../components/ForBoosters'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import React, { useState } from 'react'


export default function Home() {

  //dropdown code
  const [exploreclicklarge, setExploreClickLarge] = useState(false);
  const [creatorclicklarge, setCreatorClickLarge] = useState(false);

  const handleCreatorLarge = () =>{
    setCreatorClickLarge(!creatorclicklarge);
  }
  const handleExploreLarge = () =>{
    setExploreClickLarge(!exploreclicklarge);
  }

  const removeDropdown = () =>{
    if(creatorclicklarge){
      handleCreatorLarge();
      
    }else if(exploreclicklarge){
      handleExploreLarge();
    }
  }

  return (
    <>
      <Head>
        <title>Didalla</title>
        <meta name="keywords" content="didalla, a content-creators marketplace content"/>
      </Head>

      <div onClick={removeDropdown}>
        <Navbar handleCreatorLarge={handleCreatorLarge} creatorclicklarge={creatorclicklarge}
        exploreclicklarge={exploreclicklarge} handleExploreLarge={handleExploreLarge} removeDropdown={removeDropdown}/>
          <div className='parent' >
            <Hero />
            <ForVendors />
            <ForBoosters />
            {/* <Testimonials /> */}
            <CTA />
          </div>
        <Footer />
      </div>
    </>
  )
}
