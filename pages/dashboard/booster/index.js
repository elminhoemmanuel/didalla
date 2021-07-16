import React,{ useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import BoosterDashHome from '../../../components/BoosterDashHome';
import { useRouter } from 'next/router';

const index = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(!userToken){
            router.replace('/login')
        }
        
    }, [])

    return (
        <>
            <Head>
                <title>Didalla | Onboarding</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className=''>
                <BoosterDashHome />

            </div>
        </>
    )
}

export default index
