import React from 'react'

const BrandInfo = ({
    handleNext,
    errors,
    dirty,
    handleOnChange,
    brandname,
    brandlocation
}) => {

    const onSubmit = (e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div className='w-3/4 md:w-1/2 lg:w-2/6 mx-auto'>
            <div className='mb-3'>
                <img className='' src="/images/BrandInfo.svg" alt="Brand info image"/>
            </div>
            <p className='text-xl text-black font-bold pb-2 border-b border-gray-200 mb-8'>Brand info</p>

            <form action="" onSubmit={onSubmit}>
                <div className='mb-5'>
                    <div className='mb-3'>
                        <label htmlFor="brandname" className='text-black text-base font-bold'>Brand name</label>
                        <p className='text-sm text-didallabody'>How can we refer to your brand?</p>
                    </div>
                    <div className=''>
                        <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                            type="text"
                            id='brandname'
                            name="brandname"
                            value={brandname}
                            onChange={handleOnChange}
                            placeholder='E.g Didalla corporation'
                            required
                        />
                        {errors.brandname && dirty.brandname && (
                            <p className='text-red-500 text-xs'>{errors.brandname}</p>
                        )}
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='mb-3'>
                        <label htmlFor="brandlocation" className='text-black text-base font-bold'>Location</label>
                        <p className='text-sm text-didallabody'>Where is your brand located?</p>
                    </div>
                    <div className=''>
                        <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                            type="text"
                            id='brandlocation'
                            name="brandlocation"
                            value={brandlocation}
                            onChange={handleOnChange}
                            placeholder='E.g Texas, USA'
                            required
                        />
                        {errors.brandlocation && dirty.brandlocation && (
                            <p className='text-red-500 text-xs'>{errors.brandlocation}</p>
                        )}
                    </div>
                </div>

                {brandname.length === 0 || brandlocation.length === 0 ||  errors.brandname ||errors.brandlocation
                        ? (<div className='flex items-center justify-end'>
                        <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next
                        </button>
                    </div>) : 
                        (<div className='flex items-center justify-end'>
                        <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next
                        </button>
                    </div>)
                }

                
            </form>

        </div>
    )
}

export default BrandInfo
