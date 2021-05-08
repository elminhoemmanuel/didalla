import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
    return (
        <>

            <Head>
                <title>Didalla | NotFound</title>
                <meta name="keywords" content="didalla, a content-creators marketplace content"/>
            </Head>

            <div className='flex items-center justify-center pt-52'>
                <div>
                    <div className='my-3 flex items-center justify-center'>
                        <svg className="w-20 h-20 text-didalla " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h1>Oops!, we couldnt find this page.</h1>
                    <div className='my-3'>
                        <Link className='block w-full' href="/">
                            <a className='text-lg text-center block rounded-full whitespace-nowrap w-full py-4 px-12 text-white border-2 border-didalla bg-didalla hover:bg-green-600 hover:border-green-600 font-bold'>
                                Go Home
                            </a>
                        </Link>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default NotFound
