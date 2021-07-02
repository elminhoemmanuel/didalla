import React , { useState, useEffect} from 'react'
import BoosterEarnings from '../../../components/BoosterEarnings'
import { useRouter } from 'next/router';

const earnings = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(!userToken){
            router.push('/login')
        }
        
    }, [])

    return (
        <div>
            <BoosterEarnings />
        </div>
    )
}

export default earnings
