import React, { useState } from 'react'


const BoosterBodyPicture = ({
    activeStep,
    handleBack,
    handleNext
}) => {

    const [fileUrl, setFileUrl] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(fileUrl);
        handleNext();
        
    }
    
    return (
        <div className=' col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
                    <h1 className='text-2xl text-black'>Profile Picture</h1>
                </div>
                    
                <form action="" className='py-4' onSubmit={onSubmit}>
                            <div className='pb-4'>
                                <p className='text-didallabody'>Choose a picture that clearly shows your face. </p>
                            </div>

                            <div className='flex justify-center item-center'><img className='' src="/images/UserCircle.svg" alt="user circle"/></div>

                            <div className=' pb-6'>
                                <div className='flex justify-center items-center'><img className='inline' src="/images/Plus.svg" alt="plus icon"/> <label className='text-didalla' htmlFor="profilePicture">Add profile picture</label></div>
                                <input className='opacity-0' type="file" name="profilePicture"
                                 id="profilePicture" accept="image/png, image/jpeg" 
                                 value={fileUrl} onChange={e =>{setFileUrl(e.target.value)}} />
                            </div>

                            <div className='pt-6 flex flex-col-reverse md:flex-row flex-nowrap justify-start md:justify-end'>
                                <div>
                                    <button type='text' className="block w-full md:w-auto py-3 px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                            font-bold hover:text-white hover:bg-didalla focus:outline-none mr-2 "  
                                            onClick={handleBack}
                                            >
                                                Back
                                    </button>
                                </div>
                                <div>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2"  
                                            
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

export default BoosterBodyPicture