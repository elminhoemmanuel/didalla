import React , { useState, useEffect} from 'react'
import BoosterMessages from '../../../components/BoosterMessages'
import { useRouter } from 'next/router';

const messages = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if(!userToken){
            router.replace('/login')
        }
        
    }, [])

    return (
        <div>
            <BoosterMessages />
        </div>
    )
}

export default messages
