import React,{ useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import VendorDashHome from '../../../components/VendorDashHome';

const vendor = () => {
    return (
        <>
            <Head>
                <title>Didalla | Onboarding</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className=''>
                <VendorDashHome />

            </div>
        </>
    )
}

export default vendor
