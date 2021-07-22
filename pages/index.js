import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ForVendors from '../components/ForVendors'
import ForBoosters from '../components/ForBoosters'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import React, { useState, useEffect } from 'react'


export default function Home() {

  //dropdown code
  const [exploreclicklarge, setExploreClickLarge] = useState(false);
  const [creatorclicklarge, setCreatorClickLarge] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setShowCookie(true)
    }, 3000);
    
  }, [])

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
            <Testimonials />
            <CTA />
          </div>
        <Footer />
        {
          showCookie && 
          <div className='fixed bg-gray-800 bottom-0 left-0 w-screen h-auto px-6 md:px-10 lg:px-16 py-8'>
            <p className='mb-6 text-white'>We use cookies to deliver the best experience on didalla, to provide our services
              , for advertising and analytics and to personalize content. You can edit your settings to adjust this.By using
              our website you are agreeing to out cookie policy.

            </p>
            <div className='mb-4'>
              <button  type='button' className='w-full md:w-auto whitespace-nowrap py-3 px-12 bg-didalla
                border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                focus:outline-none shadow-2xl'
                onClick={()=>{setShowCookie(false)}}
                >Accept
              </button>
            </div>
          </div>
        }
      </div>
    </>
  )
}
