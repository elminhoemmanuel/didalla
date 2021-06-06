import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const BoosterBodySocial = ({
    activeStep,
    handleBack,
    handleNext,
    errors,
    dirty,
    handleOnChange,
    basicGross,
    standardGross,
    premiumGross,

}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        handleNext();
        
    }

    return (
        <div className='col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-3 border-b border-gray-200 py-4'>
                    <p className='text-black text-xs md:text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Project rates</h1>
                </div>

                <div className='pb-6'>
                    <p className='text-didallabody'>Select the pricing ranges and deliverables you offer for your service. Please note that the plans wouls apply to each campaign. Didalla charges a service fee of 7% per project.</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

                        <div className='mb-8  lg:mb-0'>
                            <div className='bg-downloadgray text-center p-2 mb-4'>
                                Basic
                            </div>

                            <div >
                                <h1 className='text-xl text-black font-bold'>Project rate</h1>
                                <p className='mb-4 text-sm text-didallabody'>What you charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <input type="number" name='basicGross' id='basicGross' className='w-full border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'
                                        value={basicGross} onChange={handleOnChange} placeholder='100'
                                        />
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold'>Didalla charge</h1>
                                <p className='mb-4 text-sm text-didallabody'>What we charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                Math.round(0.07*basicGross)
                                            }
                                        </div>
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold'>You get</h1>
                                <p className='mb-4 text-sm text-didallabody'>This is the estimated amount you get per project based on this pricing</p>
                                
                                <div className='flex flex-row justify-start items-center '>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                basicGross-Math.round(0.07*basicGross)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mb-8  lg:mb-0'>
                            <div className='bg-downloadgray text-center p-2 mb-4'>
                                Standard
                            </div>

                            <div >
                                <h1 className='text-xl text-black font-bold opacity-100 md:opacity-0'>Project rate</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 md:opacity-0'>What you charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <input type="number" name='standardGross' id='standardGross' className='w-full border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'
                                        value={standardGross} onChange={handleOnChange} placeholder='100'
                                        />
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold opacity-100 md:opacity-0'>Didalla charge</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 md:opacity-0'>What we charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                Math.round(0.07*standardGross)
                                            }
                                        </div>
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold opacity-100 md:opacity-0'>You get</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 md:opacity-0'>This is the estimated amount you get per project based on this pricing</p>
                                
                                <div className='flex flex-row justify-start items-center '>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                standardGross-Math.round(0.07*standardGross)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 md:col-span-2 lg:col-span-1 mb-8  lg:mb-0'>
                            <div className='bg-downloadgray text-center p-2 mb-4'>
                                Premium
                            </div>

                            <div >
                                <h1 className='text-xl text-black font-bold opacity-100 lg:opacity-0'>Project rate</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 lg:opacity-0'>What you charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <input type="number" name='premiumGross' id='premiumGross' className='w-full border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'
                                        value={premiumGross} onChange={handleOnChange} placeholder='100'
                                        />
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold opacity-100 lg:opacity-0'>Didalla charge</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 lg:opacity-0'>What we charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center mb-6'>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                Math.round(0.07*premiumGross)
                                            }
                                        </div>
                                    </div>
                                </div>

                                <h1 className='text-xl text-black font-bold opacity-100 lg:opacity-0'>You get</h1>
                                <p className='mb-4 text-sm text-didallabody opacity-100 lg:opacity-0'>This is the estimated amount you get per project based on this pricing</p>
                                
                                <div className='flex flex-row justify-start items-center '>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <div className='w-44 border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'>
                                            {
                                                premiumGross-Math.round(0.07*premiumGross)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='pt-6 flex flex-row items-center flex-nowrap justify-end'>
                                <div className='mr-2'>
                                    <button type='button' className="text-xs md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                            font-bold hover:text-white hover:bg-didalla focus:outline-none "  
                                            onClick={handleBack}
                                            >
                                                Back
                                    </button>
                                </div>

                                {basicGross <=0 || standardGross <=0 || premiumGross<=0 
                                            ? (<div>
                                                <button type='submit' className="text-xs md:text-base block pointer-events-none opacity-50 w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        Next: Professional Overview
                                                </button>
                                            </div>) : 
                                            (<div>
                                                <button type='submit' className="text-xs md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        Next: Professional Overview
                                                </button>
                                            </div>)}
                    </div>

                </form>


            </div>
            
        </div>
    )
}

export default BoosterBodySocial