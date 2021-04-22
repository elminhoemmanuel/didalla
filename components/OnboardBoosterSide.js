import React from 'react'
import {onboardOne} from './OnBoardData';
import Link from 'next/link';

const OboardBoosterSide = ({activeStep}) => {
    
    return (
        <div className='hidden md:block col-span-3 bg-white pt-6 pl-6 md:pl-10 lg:pl-16'>
            <div className='pl-0 pb-8'>
                <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='pl-0 h-10 w-28 md:h-12 md:w-40 
                ' /></a>
                </Link>
            </div>
            <div className='p-4 flex flex-col '>
                {
                    onboardOne.map(item =>{
                        return <div key={item.id} className=''>
                            {
                                activeStep === item.id ? 
                                <div className='p-4 border-l-4 border-didalla flex flex-row flex-nowrap justify-between items-center'>
                                    <div className='flex flex-row flex-nowrap justify-start items-center'>
                                        <div className='mr-3'>{item.greenIcon}</div>
                                        <div className='whitespace-nowrap'>{item.text}</div>
                                    </div>
                                    <div>{item.greenTick}</div>
                                </div> :
                                <div className='p-4 flex flex-row flex-nowrap justify-between items-center'>
                                    <div className='flex flex-row flex-nowrap justify-start items-center'>
                                        <div className='mr-3'>{item.greyIcon}</div>
                                        <div className='whitespace-nowrap'>{item.text}</div>
                                    </div>
                                    <div>{item.greyTick}</div>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div> 
    )
}

export default OboardBoosterSide
