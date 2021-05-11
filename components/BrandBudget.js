import React from 'react'

const BrandBudget = ({
    handleNext,
    handleBack,
    errors,
    dirty,
    handleOnChange,
    brandbudget,
    startdate,
    enddate,
    campaignbrief,
    campaigngoal
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div className='w-3/4 md:w-1/2 lg:w-2/6 mx-auto'>
            <div className='mb-3'>
                <img className='' src="/images/BrandBudget.svg" alt="Brand Budget image"/>
            </div>
            <p className='text-xl text-black font-bold pb-2 border-b border-gray-200 mb-8'>Campaign Details</p>

            <form action="" onSubmit={onSubmit}>
                <div className='mb-5'>
                    <div className='mb-3'>
                        <label htmlFor="brandbudget" className='text-black text-base font-bold'>Budget</label>
                        <p className='text-sm text-didallabody'>What is your budget for this campaign?( in USD)</p>
                    </div>
                    <div className=''>
                        <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                            type="number"
                            id='brandbudget'
                            name="brandbudget"
                            value={brandbudget}
                            onChange={handleOnChange}
                            placeholder='100'
                            required
                        />
                        {errors.brandbudget && dirty.brandbudget && (
                            <p className='text-red-500 text-xs'>{errors.brandbudget}</p>
                        )}
                    </div>
                </div>

                <div className='mb-5'>
                    <div className='mb-3'>
                        <label htmlFor="startdate" className='text-black text-base font-bold'>Campaign Duration</label>
                        <p className='text-sm text-didallabody'>For how long would the campaign run?</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        
                        <div className=''>
                            <p className='text-sm text-didallabody mb-2'>Start date</p>
                            <input className='bg-transparent p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                type="date"
                                id='startdate'
                                name="startdate"
                                value={startdate}
                                onChange={handleOnChange}
                                placeholder='E.g Texas, USA'
                                required
                            />
                            {errors.startdate && dirty.startdate && (
                                <p className='text-red-500 text-xs'>{errors.startdate}</p>
                            )}
                        </div>

                        <div className=''>
                            <p className='text-sm text-didallabody mb-2'>End date</p>
                            <input className='bg-transparent p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                type="date"
                                id='enddate'
                                name="enddate"
                                value={enddate}
                                onChange={handleOnChange}
                                placeholder='E.g Texas, USA'
                                required
                            />
                            {errors.enddate && dirty.enddate && (
                                <p className='text-red-500 text-xs'>{errors.enddate}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <div className='mb-3'>
                        <label htmlFor="campaigngoal" className='text-black text-base font-bold'>Campaign goal</label>
                        <p className='text-sm text-didallabody'>What is The main goal of this campaign</p>
                    </div>
                    <div className=''>
                        <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                            type="text"
                            id='campaigngoal'
                            name="campaigngoal"
                            value={campaigngoal}
                            onChange={handleOnChange}
                            placeholder='To promote my new clothing line'
                            required
                        />
                        {errors.campaigngoal && dirty.campaigngoal && (
                            <p className='text-red-500 text-xs'>{errors.campaigngoal}</p>
                        )}
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-3'>
                        <label htmlFor="campaignbrief" className='text-black text-base font-bold'>Campaign brief</label>
                        <p className='text-sm text-didallabody'>What is the campaign all about?</p>
                    </div>
                    <div className=''>
                        <textarea className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                            type="text"
                            id='campaignbrief'
                            name="campaignbrief"
                            value={campaignbrief}
                            onChange={handleOnChange}
                            placeholder='My brand will like to find a creative to push the narrative of our new clothing line'
                            rows='3'
                            required
                        ></textarea>
                        {errors.campaignbrief && dirty.campaignbrief && (
                            <p className='text-red-500 text-xs'>{errors.campaignbrief}</p>
                        )}
                    </div>
                </div>

                <div className='flex flex-row items-center justify-end'>

                    <div>
                        <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                        font-bold hover:text-green-600  focus:outline-none mr-2 text-sm md:text-base"  
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    </div>

                    {brandbudget.length === 0 || startdate.length === 0 ||enddate.length === 0 ||campaignbrief.length === 0 
                    || errors.brandbudget ||errors.startdate ||errors.enddate ||errors.campaignbrief
                        ? (<div className='flex items-center justify-end'>
                        <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next:Platforms
                        </button>
                    </div>) : 
                        (<div className='flex items-center justify-end'>
                        <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next
                        </button>
                    </div>)
                }

                </div>
                
            </form>

        </div>
    )
}

export default BrandBudget
