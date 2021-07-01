import React , { useState, useEffect} from 'react'
import Head from 'next/head';
import VendorDashHome from '../../../components/VendorDashHome';
import { useRouter } from 'next/router';

const index = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(!userToken){
            router.push('/login')
        }
        
    }, [])

    return (
        <>
            <Head>
                <title>Didalla | Dashboard</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className=''>
                <VendorDashHome 
                />

            </div>
        </>
    )
}

export default index
