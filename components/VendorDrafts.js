import React, { useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import {DashboardInterests} from './DashboardInterestsData'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';


const VendorDrafts = ({
    searchtext,
    errors,
    dirty,
    handleOnChange
}) => {

    const router = useRouter()

    return (
        <div>
            <VendorDashNav 
            homeColour='' 
            campaignColour ="text-didalla"
            creatorsColour = ""
            messagesColour = ""
            />

            <div className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20'>
                <div className='w-full md:w-4/5 flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4 px-5'>
                    <div className='mb-3 md:mb-0'>
                        <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-3xl'>Campaigns</h1></div>
                    </div>
                    <div className=''>
                        <button type='button' className="text-sm md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none ">
                            Start a campaign
                        </button>
                    </div>                                                                                                        
                </div>

                <div className='flex flex-col-reverse md:flex-row p-5'>
                    <div className='w-full md:w-4/5 '>
                        <div className='flex flex-row items-center'>
                        <div className='pr-5'>
                                <button  onClick={() =>{router.push('/dashboard/vendor/campaigns')}}
                                className='focus:outline-none block whitespace-nowrap  py-2 ' type='button'>
                                    Active campaigns (4)
                                </button>
                            </div>
                            <div>
                                <button className='focus:outline-none block whitespace-nowrap border-b-2 border-didalla py-2 ' type='button'>
                                    Drafts (2)
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='w-full md:w-1/5 px-3'>
                        <button className='text-black mb-3 p-4 rounded font-bold text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                            <div>
                                Creator bids (4)
                            </div> 
                            <div>
                                <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </button>

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default VendorDrafts
