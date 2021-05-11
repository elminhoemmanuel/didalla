import React,{ useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import VendorSearchResult from '../../../../components/VendorSearchResult';

const search = () => {
    return (
        <>
            <Head>
                <title>Didalla | Dashboard</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className=''>
                <VendorSearchResult />

            </div>
        </>
    )
}

export default search