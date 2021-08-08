import Head from 'next/head'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
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
            <Faqs />
          </div>
        <Footer />

      </div>
    </>
  )
}
