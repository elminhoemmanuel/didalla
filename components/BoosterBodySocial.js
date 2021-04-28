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
    instagram, twitter, youtube, linkedIn, substack
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(instagram)
        console.log(twitter)
        console.log(youtube)
        console.log(linkedIn)
        console.log(substack)
        handleNext();
        
    }

    return (
        <div className='col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-3 border-b border-gray-200 py-4'>
                    <p className='text-black text-xs md:text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Social Media</h1>
                </div>

                <div className='pb-6'>
                    <p className='text-didallabody'>Enter your username for the social networks you use. </p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    
                    <div className='grid grid-cols-1 w-full border-gray-200 border-b pb-6'>
                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-1 md:p-2 flex items-center w-2/5 md:w-1/5'>
                                <div><img className='' src="/images/InstagramLogoGreen.svg" alt="instagram logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-xs md:text-sm' htmlFor="instagram"> Instagram</label>
                                </div>
                            </div>
                            <div className='w-3/5 md:w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="instagram" id="instagram"
                                value={instagram} 
                                onChange={handleOnChange}
                                placeholder='@johndoe'/>
                                {errors.instagram && dirty.instagram && (
                                        <p className='text-red-500 text-xs'>{errors.instagram}</p>
                                )}
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-1 md:p-2 flex items-center w-2/5 md:w-1/5'>
                                <div><img src="/images/TwitterLogoGreen.svg" alt="Twitter logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-xs md:text-sm' htmlFor="twitter"> Twitter</label>
                                </div>
                            </div>
                            <div className='w-3/5 md:w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="twitter" id="twitter" placeholder='@johndoe'
                                value={twitter} onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-1 md:p-2 flex items-center w-2/5 md:w-1/5'>
                                <div><img src="/images/YoutubeLogo.svg" alt="Youtube logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-xs md:text-sm' htmlFor="youtube"> Youtube</label>
                                </div>
                            </div>
                            <div className='w-3/5 md:w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="youtube" id="youtube" placeholder='@johndoe'
                                value={youtube} onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-1 md:p-2 flex items-center w-2/5 md:w-1/5'>
                                <div><img src="/images/LinkedinLogo.svg" alt="Linkedin logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-xs md:text-sm' htmlFor="linkedIn"> LinkedIn</label>
                                </div>
                            </div>
                            <div className='w-3/5 md:w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="linkedIn" id="linkedIn" placeholder='@johndoe'
                                value={linkedIn} onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div className='flex w-full mb-2'>
                            <div className='bg-downloadgray p-1 md:p-2 flex items-center w-2/5 md:w-1/5'>
                                <div><img src="/images/Link.svg" alt="Substack logo"/></div>
                                <div>
                                    <label className='text-darkdidalla text-xs md:text-sm' htmlFor="substack"> Substack</label>
                                </div>
                            </div>
                            <div className='w-3/5 md:w-4/5'>
                                <input className='block p-4 border border-grayborder w-full focus:outline-none focus:border-darkdidalla'
                                type="text" name="substack" id="substack" placeholder='@johndoe'
                                value={substack} onChange={handleOnChange}
                                />
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
                        
                        {instagram === "" && twitter ==="" && youtube === "" && linkedIn === "" && substack === ""
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
                        </div>)}
                    </div>
                    
                </form>

            </div>
            
        </div>
    )
}

export default BoosterBodySocial