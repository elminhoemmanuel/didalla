import React, { useState} from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const OnboardingBoosterBody = ({
    userValues,
    handleNext,
    activeStep,
    isLoading
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    return (
        <div className=' col-span-5 px-6 pt-6 md:pt-20 pb-4'>
            {
                isLoading?
                <BeatLoader color={color}  loading={isLoading} css={override} size={40} />
                :
                <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
                    <h1 className='text-2xl text-black'>Get Started</h1>
                </div>
                <div className='mb-3'>
                    <img className='' src="/images/media.svg" alt="creator icon"/>
                </div>

                <div className='py-4 border-b border-gray-200'>
                    <h1 className='text-didallabody text-xl mb-2'>Hello,</h1>
                    <div className='text-black font-bold text-2xl'><span>{userValues.first_name} &nbsp; {userValues.last_name}</span></div>
                </div>

                <div className='pt-4 pb-10 border-b border-gray-200'>
                    <p className='text-didallabody'>Thank you for your interest in joining Didalla as a content creator. As a platform for content creation, we connect millions of businesses to independent professionals like you. </p>
                    <br/>
                    <p className='text-didallabody'>Let us help you set up your account. </p>
                </div>

                <div className='pt-6 flex flex-row flex-nowrap justify-end'>
                    <div>
                        <button type='submit' className="block py-3 px-12 text-center bg-didalla rounded 
                                font-bold text-white hover:bg-green-600 focus:outline-none"  
                                onClick={handleNext}
                                >
                                    Next
                        </button>
                    </div>
                </div>

            </div>
            }
            
        </div>
    )
}

export default OnboardingBoosterBody
