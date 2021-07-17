import Head from 'next/head'
import React , { useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const cancel = () => {

    const router = useRouter();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        const hasLogged = localStorage.getItem('fromDashboard');

        const checker = userToken && hasLogged

        if(!checker ){
            router.replace('/login')
        }
        
    }, [])

    return (
        <>

            <Head>
                <title>Didalla | NotFound</title>
                <meta name="keywords" content="didalla, a content-creators marketplace content"/>
            </Head>

            <div className='flex items-center justify-center pt-52'>
                <div>
                    <div className='my-3 flex items-center justify-center'>
                        <img className='w-64' src="/images/PaymentCancel.svg" alt="payment cancel image" />
                    </div>
                    <h1 className='text-center my-3'>Oops!, something went wrong. Go back to dashboard and try again</h1>
                    <div className='my-3'>
                        <Link className='block w-full' href="/dashboard/vendor">
                            <a className='text-lg text-center block rounded-full whitespace-nowrap w-full py-3 px-6 text-white border-2 border-didalla bg-didalla hover:bg-green-600 hover:border-green-600 font-bold'>
                                Go Back
                            </a>
                        </Link>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default cancel
