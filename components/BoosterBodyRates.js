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
    basicGross
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(basicGross);
        // handleNext();
        
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
                        <div>
                            <div className='bg-downloadgray text-center p-2 mb-4'>
                                Basic
                            </div>

                            <div >
                                <h1 className='text-xl text-black font-bold'>Project rate</h1>
                                <p className='mb-4 text-sm text-didallabody'>What you charge per post</p>
                                
                                <div className='flex flex-row justify-start items-center '>
                                    <div className='text-black bg-downloadgray p-2'>
                                        $
                                    </div>
                                    <div className=''>
                                        <input type="number" name='basicGross' id='basicGross' className='w-full border border-downloadgray p-2 focus:outline-none focus:border-darkdidalla'
                                        value={basicGross} onChange={handleOnChange} placeholder='100'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-6 flex flex-col-reverse md:flex-row flex-nowrap justify-start md:justify-end'>
                                <div>
                                    <button type='button' className="block w-full md:w-auto py-3 px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                            font-bold hover:text-white hover:bg-didalla focus:outline-none mr-2 "  
                                            onClick={handleBack}
                                            >
                                                Back
                                    </button>
                                </div>

                                <div>
                                        <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                                Submit
                                        </button>
                                </div>
                                
                                {/* {fileUrl===""
                                    ? (<div>
                                        <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                                Next
                                        </button>
                                    </div>) : 
                                    (<div>
                                        <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                                Next
                                        </button>
                                    </div>)} */}
                    </div>

                </form>


            </div>
            
        </div>
    )
}

export default BoosterBodySocial