import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const BoosterBodyInterests = ({
    activeStep,
    handleBack,
    handleNext
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        handleNext();
        
    }

    return (
        <div className=' col-span-5 px-6 pt-6 md:pt-20 pb-4'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
                    <h1 className='text-2xl text-black'>Interests</h1>
                </div>

                <div className='py-2'>
                    <p className='text-didallabody'>What kind of products are you interested in promotiing? You can select up to five(5)</p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 pb-6 border-b border-gray-200'>
                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="arts">Arts and Culture</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="arts" id="arts"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="auto">Automobile &amp; Industry</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="auto" id="auto"/></div>
                            </div>
                        </div>

                        
                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="fintech">Fintech</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="fintech" id="fintech"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="crypto">Cryptocurrency</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="crypto" id="crypto"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="food">Food</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="food" id="food"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="fashion">Fashion</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="fashion" id="fashion"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="lifestyle">Lifestyle</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="lifestyle" id="lifestyle"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="politics">Politics</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="politics" id="politics"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="tech">Technology</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="tech" id="tech"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="agric">Agriculture</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="agric" id="agric"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="tourism">Tourism</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="tourism" id="tourism"/></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="others">Others</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="others" id="others"/></div>
                            </div>
                        </div>



                    </div>

                    <div className='pt-6 flex flex-row flex-nowrap justify-end'>
                        <div>
                            <button type='text' className="block py-3 px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                    font-bold hover:text-white hover:bg-didalla focus:outline-none mr-2"  
                                    onClick={handleBack}
                                    >
                                        Back
                            </button>
                        </div>
                        <div>
                            <button type='submit' className="block py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none"  
                                    
                                    >
                                        Next
                            </button>
                        </div>
                    </div>

                </form>

                

            </div>
            
        </div>
    )
}

export default BoosterBodyInterests