import router from 'next/router';
import React , { useState, useEffect} from 'react'
import VendorCampaigns from '../../../../components/VendorCampaigns'
import { useRouter } from 'next/router';

const campaigns = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(!userToken){
            router.replace('/login')
        }
        
    }, [])

    return (
        <div>
            <VendorCampaigns />
        </div>
    )
}

export default campaigns
