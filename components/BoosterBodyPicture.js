import React, { useState, useEffect} from 'react'


const BoosterBodyPicture = ({
    activeStep,
    handleBack,
    handleNext,
    obtainCountry,
    userDetails,
    picInput
}) => {

    const [picObject, setPicObject] = useState()

    const onSubmit = (e) =>{
        e.preventDefault();
        obtainCountry('pic',picObject);
        handleNext();   
    }

    useEffect(() => {
        obtainCountry('pic',picObject);
    }, [picObject])
    
    return (
        <div className=' col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Profile Picture</h1>
                </div>
                    
                <form action="" className='py-4' onSubmit={onSubmit}>
                            
                            <div className='pb-4'>
                                <p className='text-didallabody'>Choose a picture that clearly shows your face. </p>
                            </div>

                            <div className='flex justify-center item-center'><img className='' src="/images/UserCircle.svg" alt="user circle"/></div>

                            <div className='text-center pb-6'>
                                <div className=''><img className='inline' src="/images/Plus.svg" alt="plus icon"/> <label className='text-didalla cursor-pointer' htmlFor="fileUrl">Add profile picture</label></div>
                                <div className='text-center'>
                                    <input className='w-1 opacity-0' type="file" 
                                    name="fileUrl"
                                    id="fileUrl" 
                                    accept="image/png, image/jpeg" 
                                    ref={picInput} 
                                    onChange={e=>{
                                        setPicObject(picInput.current.files[0]);

                                    }}
                                    />
                                    
                                </div>
                            </div>

                            {
                               picObject===undefined ?
                               <div></div>
                               :
                                <div className='bg-green-400 text-white rounded text-center p-4 font-bold'>
                                    Picture uploaded successfully
                                </div>
                            }

                            <div className='pt-6 flex flex-row items-center flex-nowrap justify-end'>
                                <div className='mr-2'>
                                    <button type='button' className="text-sm md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                            font-bold hover:text-white hover:bg-didalla focus:outline-none "  
                                            onClick={handleBack}
                                            >
                                                Back
                                    </button>
                                </div>

                                {picObject===undefined
                                            ? (<div>
                                                <button type='submit' className="text-sm md:text-base block pointer-events-none opacity-50 w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        Next: Interests
                                                </button>
                                            </div>) : 
                                            (<div>
                                                <button type='submit' className="text-sm md:text-base block w-full md:w-auto py-3 px-4 md:px-12 text-center bg-didalla rounded border border-didalla
                                                        font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                        Next: Interests
                                                </button>
                                            </div>)}
                            </div>
                        
                </form>

            </div>
            
        </div>
    )
}

export default BoosterBodyPicture