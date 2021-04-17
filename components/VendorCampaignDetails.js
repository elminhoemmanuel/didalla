import React from 'react'

const VendorCampaignDetails = ({
    handleNext,
    handleBack,
    handleChange,
    budget,
    startDate,
    endDate,
    description,
    goal
}) => {

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div className='pt-6 mx-auto w-4/5'>
            <div className='mb-8 md:hidden border-b-4 border-didalla flex flex-col flex-nowrap '>
                <div className='mb-4'>
                    <img src="/images/two.svg" alt="second step icon"/>
                </div>
                <div className='mb-4'>
                    <p className='text-didallabody '>Campaign details</p>
                </div>
            </div>
            <p className='text-didallatitle mb-4 text-xl'>Set a budget and project description</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div>
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="budget" className='block mb-1'>Budget (in USD)</label>
                            <div>
                                <input type="number" name="budget" id="budget"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={budget} 
                                onChange={handleChange('budget')}
                                required
                                placeholder='e.g 500'
                                />
                            </div>

                        </div>

                        <div className=' grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='mb-3'>
                                <label htmlFor="startDate" className='block mb-1'>Start date</label>
                                <div>
                                    <input type="date" name="startDate" id="startDate"
                                    className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    value={startDate} 
                                    onChange={handleChange('startDate')}
                                    required
                                    />
                                </div>
                            </div>                            
                            <div className='mb-3'>
                                <label htmlFor="endDate" className='block mb-1'>End date</label>
                                <div>
                                    <input type="date" name="endDate" id="endDate"
                                    className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    value={endDate} 
                                    onChange={handleChange('endDate')}
                                    required
                                    />
                                </div>
                            </div>                            

                        </div>

                        <div className='mb-3'>
                            <label htmlFor="description" className='block mb-1'>Description</label>
                            <div>
                                <textarea type="text" name="description" id="description"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={description} 
                                onChange={handleChange('description')}
                                placeholder='What is the campaign for?'
                                required
                                />
                            </div>

                        </div>

                        <div className='mb-6'>
                            <label htmlFor="goal" className='block mb-1'>Goal</label>
                            <div>
                                <textarea type="text" name="goal" id="goal"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={goal} 
                                onChange={handleChange('goal')}
                                placeholder='What is the main goal of the campaign?'
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
                    <img src="/images/budget.svg" alt="brand details image" className="w-4/5"/>
                </div>

            </div>
            

        </div>
    )
}

export default VendorCampaignDetails
