import React, { useState } from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";



const BoosterBodySocial = ({
    activeStep,
    handleBack,
    handleNext,
    errors,
    dirty,
    handleOnChange,
    overview,
    submitBooster,
    isSubmitting

}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");


    const onSubmit = (e) =>{
        e.preventDefault();
        submitBooster();
        
    }

    return (
        <div className='col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-3 border-b border-gray-200 py-4'>
                    <p className='text-black text-xs md:text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Professional overview</h1>
                </div>

                <div className='pb-6'>
                    <p className='text-didallabody'>Writing a short description of yourself increases your chances of landing your next client.</p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    <p className='mb-4 text-sm text-didallabody'>Professional overview</p>
                    <div>
                        <textarea rows='3' type="text" name='overview' id='overview' className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                        value={overview} onChange={handleOnChange}
                        ></textarea>
                        {errors.overview && dirty.overview && (
                                            <p className='text-red-500 text-xs'>{errors.overview}</p>
                                    )}
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

                                {overview.errors || overview.length === 0
                                            ? (<div>
                                                <button type='submit' className="text-xs md:text-base block pointer-events-none opacity-50 w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        Finish
                                                </button>
                                            </div>) : 
                                            (<div>
                                                <button type='submit' className="text-xs md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        {isSubmitting ? <BeatLoader color={color}  loading={showSpinner} css={override} size={20} />:<span>Finish</span>}
                                                </button>
                                            </div>)}
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default BoosterBodySocial