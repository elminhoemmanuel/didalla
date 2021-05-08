import React from 'react'
import VendorDashNav from './VendorDashNav'

const VendorDashHome = () => {
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
                    <form action="" className='flex flex-row items-center justify-start w-full pr-10 mb-16'>
                        <div className='pl-5 w-1/5'>
                            <h1 className='font-bold text-didallablack text-3xl'>Discover</h1>
                        </div>

                        <div className='w-4/5' >
                            <input type="text" name="discover" id="discover"
                            placeholder='Search by keyword'
                            className='p-3 border border-grayscale rounded bg-grayscale w-full focus:outline-none focus:border-didalla'
                            />
                        </div>

                    </form>

                    <div className='pl-5'>
                        <p className='text-xl text-didallablack font-bold mb-10'>Popular Topics <span className='text-didallabody text-sm'>Based on popular searches</span></p>


                    </div>

                </div>
                <div className='w-1/5'>
                    <div className='bg-didallablack rounded p-6'>
                        <h1 className=' text-2xl text-white mb-6'>Start a campaign</h1>
                        <button className='text-white p-3 rounded font-bold text-sm text-center block w-full bg-didalla hover:bg-green-600 whitespace-nowrap'>
                            Get Started
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default VendorDashHome
