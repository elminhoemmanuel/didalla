import React , { useState, useEffect} from 'react'
import VendorMessages from '../../../components/VendorMessages'
import { useRouter } from 'next/router';

const messages = () => {

    const router = useRouter();

    // useEffect(() => {
    //     const userToken = localStorage.getItem('userToken');

    //     if(!userToken){
    //         router.push('/login')
    //     }
        
    // }, [])

    return (
        <div>
            <VendorMessages />
        </div>
    )
}

export default messages
