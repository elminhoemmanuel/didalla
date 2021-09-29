import React , { useState, useEffect} from 'react'
import Head from 'next/head';
import VendorDashHome from '../../../components/VendorDashHome';
import { useRouter } from 'next/router';
import { getCountries } from "../../../redux/actions/misc";
import { useSelector, useDispatch } from 'react-redux'


const index = () => {

    const dispatch = useDispatch();
    const { loadCountries, errorCountries, countries } = useSelector(state => state.misc);
    const router = useRouter();

    useEffect(() => {
        if(countries === []){
            dispatch(getCountries());
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
                <VendorDashHome />

            </div>
        </>
    )
}

export default index
