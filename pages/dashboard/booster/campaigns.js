import React , { useState, useEffect} from 'react'
import BoosterCampaigns from '../../../components/BoosterCampaigns';
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
            <BoosterCampaigns />
        </div>
    )
}

export default campaigns
