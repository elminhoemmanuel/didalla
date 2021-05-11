import React, { useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import {DashboardInterests} from './DashboardInterestsData'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import {campaignObjOne} from './CampaignData'


const VendorCampaigns = ({
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
                <div className='w-full md:w-4/5 flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4 px-0 md:px-5'>
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

                <div className='flex flex-col-reverse md:flex-row p-0 md:p-5'>
                    <div className='w-full md:w-4/5 '>
                        <div className='flex flex-row items-center'>
                            <div className='pr-2 md:pr-5'>
                                <button 
                                className='focus:outline-none block whitespace-nowrap border-b-2 border-didalla py-2 ' type='button'>
                                    Active campaigns (4)
                                </button>
                            </div>
                            <div>
                                <button onClick={() =>{router.push('/dashboard/vendor/drafts')}} className='focus:outline-none block whitespace-nowrap py-2 ' type='button'>
                                    Drafts (2)
                                </button>
                            </div>

                        </div>

                        <div className='mt-2'>
                            {
                                campaignObjOne.map(item =>(
                                    <Link href={item.url} key={item.id}>
                                        <a  className='bg-white rounded p-4 mb-5 block'>
                                            <div className='flex items-center justify-between mb-2'>
                                                <div>
                                                    <h1 className='text-xl text-didallablack font-bold'>{item.goal}</h1>
                                                </div>
                                                <div>
                                                    <svg className="w-6 h-6 text-didallablack" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                </div>
                                            </div>
                                                
                                            <div className='mb-3'>
                                                <p className='text-sm text-didallablack font-bold'>{item.brandName} - 
                                                    <span className='text-didallabody'>posted 12 min ago</span>
                                                </p>
                                            </div>

                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                                <div>
                                                    <p className='text-didallabody text-sm mb-1'>Networks</p>
                                                    <div className='flex flex-row flex-nowrap items-center'>
                                                        {item.facebook && <div><img src="/images/DashboardFacebook.svg" alt="facebook logo"/></div>}
                                                        {item.twitter && <div><img src="/images/DashboardTwitter.svg" alt="Twitter logo"/></div>}
                                                        {item.youtube && <div><img src="/images/DashboardYoutube.svg" alt="Youtube logo"/></div>}
                                                    </div>
                                                </div>

                                                <div className='flex flex-row flex-nowrap items-center'>
                                                    <div className='mr-4'>
                                                        <p className='text-didallabody text-sm mb-1'>Start date</p>
                                                        <p className='text-didallablack text-base font-bold'>{item.startDate}</p>
                                                    </div>
                                                    <div>
                                                        <p className='text-didallabody text-sm mb-1'>End date</p>
                                                        <p className='text-didallablack text-base font-bold'>{item.endDate}</p>
                                                    </div>

                                                </div>

                                                <div className=''>
                                                    <p className='text-didallabody text-sm mb-1 lg:text-right'>Creators engaged</p>
                                                    <p className='text-didallablack text-base lg:text-right'>{item.creatorsEngaged}</p>
                                                </div>

                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-1/5 pl-0 md:pl-3 mt-12'>
                        <button className='text-black mb-3 p-2 lg:p-4 rounded font-bold text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
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

export default VendorCampaigns
