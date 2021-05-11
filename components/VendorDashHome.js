import React, { useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import {DashboardInterests} from './DashboardInterestsData'
import Link from 'next/link';
import { useRouter } from 'next/router'


const VendorDashHome = ({
    searchtext,
    errors,
    dirty,
    handleOnChange
}) => {

    const router = useRouter()

    return (
        <div>
            <VendorDashNav 
            homeColour='text-didalla' 
            campaignColour =""
            creatorsColour = ""
            messagesColour = ""
            />

            <div  className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20 flex flex-col-reverse md:flex-row '>
                {/* discover box */}
                <div className='w-4/5 pt-6'>
                    <form 
                    onSubmit={(e) =>{
                        e.preventDefault()
                        if(!errors.searchtext && dirty.searchtext){
                            router.push(`/dashboard/vendor/result/${searchtext}`)
                        }
                    }}
                    action="" className='flex flex-col md:flex-row items-center justify-start w-full pr-10 mb-16'>
                        <div className='pl-0 md:pl-5 w-full md:w-1/5'>
                            <h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-3xl'>Discover</h1>
                        </div>

                        <div className='w-full md:w-4/5' >
                            <input type="text" name="searchtext" id="searchtext"
                            placeholder='Search by keyword'
                            value={searchtext}
                            onChange={handleOnChange}
                            className='p-3 border border-grayscale rounded bg-grayscale w-full focus:outline-none focus:border-didalla'
                            />
                            {errors.searchtext && dirty.searchtext && (
                                    <p className='text-red-500 text-xs'>{errors.searchtext}</p>
                                )}
                        </div>

                    </form>

                    <div className='pl-0 md:pl-5'>
                        <p className='text-lg md:text-xl text-didallablack font-bold mb-10'>Popular Topics <span className='text-didallabody text-sm'>Based on popular searches</span></p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                            {
                                DashboardInterests.map(item =>(
                                    
                                        <button key={item.id} onClick={
                                            () =>{
                                                router.push(`/dashboard/vendor/result/${item.link}`)
                                            }
                                        } type='button' className='block focus:outline-none'>
                                            <div className='mb-2'>
                                                <img className='h-48 w-full' src={item.img} alt={item.alt}/>
                                            </div>

                                            <div className='mb-3 text-left'>
                                                <h2 className='text-didallablack text-base font-bold '>{item.name}</h2>
                                                <p className='text-didallablack text-sm'>{item.creatorsNum} creators</p>
                                            </div>
                                        </button>
                                    
                                ))
                            }

                        </div>

                    </div>

                </div>
                <div className='w-full  md:w-1/5 mb-3'>
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
