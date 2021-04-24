import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const BoosterBodySocial = ({
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
                <div className=' mb-3 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
                    <h1 className='text-2xl text-black'>Social Media</h1>
                </div>

                <div className='pb-6'>
                    <p className='text-didallabody'>Enter your username for the social networks you use. </p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    
                    <div className='grid grid-cols-1 w-full border-gray-200 border-b pb-6'>
                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-2 flex items-center w-1/5'>
                                <div><img src="/images/InstagramLogoGreen.svg" alt="instagram logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-sm' htmlFor="instagram"> Instagram</label>
                                </div>
                            </div>
                            <div className='w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="instagram" id="instagram" placeholder='@johndoe'/>
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-2 flex items-center w-1/5'>
                                <div><img src="/images/TwitterLogoGreen.svg" alt="Twitter logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-sm' htmlFor="twitter"> Twitter</label>
                                </div>
                            </div>
                            <div className='w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="twitter" id="twitter" placeholder='@johndoe'/>
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-2 flex items-center w-1/5'>
                                <div><img src="/images/YoutubeLogo.svg" alt="Youtube logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-sm' htmlFor="youtube"> Youtube</label>
                                </div>
                            </div>
                            <div className='w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="youtube" id="youtube" placeholder='@johndoe'/>
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-2 flex items-center w-1/5'>
                                <div><img src="/images/LinkedInLogo.svg" alt="Linkedin logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-sm' htmlFor="linkedin"> LinkedIn</label>
                                </div>
                            </div>
                            <div className='w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="linkedin" id="linkedin" placeholder='@johndoe'/>
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-2 flex items-center w-1/5'>
                                <div><img src="/images/Link.svg" alt="Substack logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-sm' htmlFor="substack"> Substack</label>
                                </div>
                            </div>
                            <div className='w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="substack" id="substack" placeholder='@johndoe'/>
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

export default BoosterBodySocial