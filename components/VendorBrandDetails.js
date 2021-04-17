import React from 'react'

const VendorBrandDetails = ({
                handleNext,
                handleChange,
                brandName,
                companyType,
                country
}) => {

    const handleFormSubmit =(e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div className='pt-6 mx-auto w-4/5'>
            <div className='mb-8 md:hidden border-b-4 border-didalla flex flex-col flex-nowrap '>
                <div className='mb-4'>
                    <img src="/images/one.svg" alt="second step icon"/>
                </div>
                <div className='mb-4'>
                    <p className='text-didallabody '>Campaign details</p>
                </div>
            </div>
            <p className='text-didallatitle mb-4 text-xl'>A brief summary of your company/brand</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                <div>
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="brandName" className='block mb-1'>Add brand name</label>
                            <div>
                                <input type="text" name="brandName" id="brandName"
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                value={brandName} 
                                onChange={handleChange('brandName')}
                                placeholder='e.g Didalla'
                                required
                                />
                            </div>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor="companyType" className='block mb-1'>Type of Company</label>
                            <div>
                                <select value={companyType} onChange={handleChange('companyType')}
                                name="companyType" id="companyType"
                                required
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                >
                                    {/* <option value="Select an option">Select an Option</option> */}
                                    <option value="Fintech startup">Fintech startup</option>
                                    <option value="Medical services">Medical services</option>
                                    <option value="NGO">NGO</option>
                                </select>
                            </div>

                        </div>

                        <div className='mb-6'>
                            <label htmlFor="country" className='block mb-1'>Country</label>
                            <div>
                                <select value={country} onChange={handleChange('country')}
                                name="country" id="country"
                                required
                                className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                >
                                    {/* <option value="Select an option">Select an Option</option> */}
                                    <option value="USA">USA</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                            

                        </div>

                        <div className='flex flex-row flex-nowrap justify-end'>
                            <button type='submit' className="block p-3 text-center w-1/4 bg-didalla rounded 
                            font-bold text-white hover:bg-green-600 focus:outline-none"  >
                                Next
                            </button>
                        </div>

                    </form>
                </div>

                <div className='hidden md:block'>
                    <img src="/images/campaign.svg" alt="brand details image" className="w-3/5"/>
                </div>

            </div>
            

        </div>
    )
}

export default VendorBrandDetails
