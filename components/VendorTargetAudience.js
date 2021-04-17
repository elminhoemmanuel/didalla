import React from 'react'

const VendorTargetAudience = ({
    handleNext,
    handleBack,
    handleChange,
    location,
    startAge,
    endAge,
    gender,
    audienceDescription
}) => {

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div className='pt-6 mx-auto w-4/5'>
            <div className='mb-8 md:hidden border-b-4 border-didalla flex flex-col flex-nowrap '>
                <div className='mb-4'>
                    <img src="/images/three.svg" alt="third step icon"/>
                </div>
                <div className='mb-4'>
                    <p className='text-didallabody '>Target Audience</p>
                </div>
            </div>
            <p className='text-didallatitle mb-4 text-xl'>Choose your target audience</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div>
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="location" className='block mb-1'>Target Location (Country)</label>
                            <div>
                                <input type="text" name="location" id="location"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={location} 
                                onChange={handleChange('location')}
                                required
                                placeholder='e.g Nigeria'
                                />
                            </div>

                        </div>

                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='mb-3'>
                                <label htmlFor="startAge" className='block mb-1'>Age Grade</label>
                                <div>
                                    <select value={startAge} onChange={handleChange('startAge')}
                                    name="startAge" id="startAge"
                                    required
                                    className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    >
                                        {/* <option value="Select an option">Select an Option</option> */}
                                        <option value="From">From</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                    </select>
                                </div>

                            </div>                            
                                                     
                            <div className='mb-3'>
                                <label htmlFor="endAge" className='block mb-1'>&nbsp;</label>
                                <div>
                                    <select value={endAge} onChange={handleChange('endAge')}
                                    name="endAge" id="endAge"
                                    required
                                    className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    >
                                        {/* <option value="Select an option">Select an Option</option> */}
                                        <option value="From">to</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                    </select>
                                </div>

                            </div>                            
                                                     
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="gender" className='block mb-1'>Gender</label>
                            <div>
                                    <select value={gender} onChange={handleChange('gender')}
                                    name="gender" id="gender"
                                    className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    >
                                        {/* <option value="Select an option">Select an Option</option> */}
                                        <option value="Select">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="audienceDescription" className='block mb-1'>More about target audience</label>
                            <div>
                                <textarea type="text" name="audienceDescription" id="audienceDescription"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={audienceDescription} 
                                onChange={handleChange('audienceDescription')}
                                placeholder='Additional info to share about target audience.'
                                required
                                />
                            </div>

                        </div>

                        <div className='flex flex-row flex-nowrap justify-between'>
                            <button type='text' className="block p-3 text-center w-1/4 bg-didalla rounded 
                            font-bold text-white hover:bg-green-600 focus:outline-none"  onClick={handleBack}>
                                Back
                            </button>
                            <button type='submit' className="block p-3 text-center w-1/4 bg-didalla rounded 
                            font-bold text-white hover:bg-green-600 focus:outline-none"  >
                                Next
                            </button>
                        </div>

                    </form>
                </div>

                <div className='hidden md:block'>
                    <img src="/images/bro.svg" alt="brand details image" className="w-4/5"/>
                </div>

            </div>
            

        </div>
    )
}

export default VendorTargetAudience
