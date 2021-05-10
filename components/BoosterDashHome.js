import React from 'react'
import VendorDashNav from './VendorDashNav'

const BoosterDashHome = () => {
    return (
        <div>
            <VendorDashNav 
            homeColour='text-didalla' 
            campaignColour =""
            creatorsColour = ""
            messagesColour = ""
            />

            <div  className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20 flex flex-row '>
                <div className='w-4/5 pt-6'>
                    <h1 className='text-didallablack text-2xl mb-6 font-bold'>My Feed</h1>

                </div>
                <div className='w-1/5'>
                    <div className='p-4'>
                        <button className='text-black mb-3 p-4 rounded font-bold text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                            <div>
                                Offers (4)
                            </div> 
                            <div>
                                <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </button>
                        <button className='text-black p-4 rounded font-bold text-sm text-center flex flex-row items-center justify-between w-full bg-white hover:bg-gray-300 whitespace-nowrap'>
                            <div>
                                My proposals
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

export default BoosterDashHome
