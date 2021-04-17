import React , {useState} from 'react'

const OnboardingNav = ({ activeStep }) => {

    return (
        <div className="mx-auto hidden md:flex flex-row flex-nowrap justify-start items-center w-4/5">
            {
                activeStep === 1 || activeStep===2 ||activeStep===3 ||activeStep===4 ?<div className='w-1/4 border-b-4 border-didalla flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/one.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Brand details</p>
                </div>
            </div> :<div className='w-1/4 border-b-4 border-gray-200 flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/one.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Brand details</p>
                </div>
            </div>
            }
            {
                activeStep === 2 ||activeStep===3 ||activeStep===4?<div className='w-1/4 border-b-4 border-didalla flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/two.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Campaign details</p>
                </div>
            </div> :<div className='w-1/4 border-b-4 border-gray-200 flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/two.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Campaign details</p>
                </div>
            </div>
            }
            {
                activeStep === 3||activeStep===4 ?<div className='w-1/4 border-b-4 border-didalla flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/three.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Target Audience</p>
                </div>
            </div> :<div className='w-1/4 border-b-4 border-gray-200 flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/three.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Target Audience</p>
                </div>
            </div>
            }
            {
                activeStep === 4 ?<div className='w-1/4 border-b-4 border-didalla flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/four.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Find Creators</p>
                </div>
            </div> :<div className='w-1/4 border-b-4 border-gray-200 flex flex-col flex-nowrap justify-center items-center'>
                <div className='mb-2'>
                    <img src="/images/four.svg" alt="first step"/>
                </div>
                <div className='mb-2'>
                    <p className='text-didallabody '>Find Creators</p>
                </div>
            </div>
            }

        </div>
    )
}

export default OnboardingNav
