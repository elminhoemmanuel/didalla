import React, { useState, useEffect} from 'react'


const BoosterBodyPicture = ({
    activeStep,
    handleBack,
    handleNext,
    obtainCountry,
    userDetails
}) => {

    const [fileUrl, setFileUrl] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(fileUrl)
        console.log(userDetails.picUrl);
        handleNext();   
    }

    useEffect(() => {
        obtainCountry('picUrl',fileUrl);
    }, [fileUrl])
    
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

                            <div className='flex flex-col pb-6'>
                                <div className='flex justify-center items-center'><img className='inline' src="/images/Plus.svg" alt="plus icon"/> <label className='text-didalla cursor-pointer' htmlFor="fileUrl">Add profile picture</label></div>
                                <div className='flex flex-col justify-center items-center'>
                                    <input className='opacity-0' type="file" 
                                    name="fileUrl"
                                    id="fileUrl" 
                                    accept="image/png, image/jpeg" 
                                    value={fileUrl} 
                                    onChange={(e) =>{setFileUrl(e.target.value)}} 
                                    />
                                    
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
                                
                                {fileUrl===""
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

export default BoosterBodyPicture