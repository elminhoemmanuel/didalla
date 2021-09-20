import React , { useState, useEffect} from 'react'
import Head from 'next/head';
import BoosterDashHome from '../../../components/BoosterDashHome';
import { useRouter } from 'next/router';

const index = () => {

    const router = useRouter();


    return (
        <>
            <Head>
                <title>Didalla | Dashboard</title>
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
