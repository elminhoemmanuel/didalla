import React from 'react'

const SingleBoosterCampaign = ({singleCampaign, closeShowSingleCampaign , openShowAllCampaigns}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        closeShowSingleCampaign();
        openShowAllCampaigns();
    }

    return (
        <div className='bg-white rounded mt-1'>
            <div className='border-b border-grayborder px-4 py-2 flex items-center'>
                <div className='mr-2 md:mr-8'>
                    <img className='' src="/images/ManImage.svg" alt="avatar" />
                </div>
                <div className='mr-2 md:mr-8'>
                    <p className='text-didallablack text-sm'>{singleCampaign.budget}</p>
                </div>
                <div className='mr-2 md:mr-8'>
                    <p className='text-didallablack text-sm'>{singleCampaign.brief}</p>
                </div>
            </div>
           <form action="" onSubmit={handleSubmit}>
           <div className=' px-4 py-2 mb-3'>
                <h1 className='text-xl text-didallablack font-bold mb-2'>Task 1</h1>
                <p className='text-didallabody text-sm mb-2'>Create an Instagram video with over 50,000 views for our new product</p>
                <div className='flex flex-row justify-start items-center'>
                    <div className='text-black bg-downloadgray p-3 h-full'>
                        <img src="/images/InstagramLogoBlack.svg" alt="Instagram Logo" />
                    </div>
                    <div className='w-full'>
                        <input type="url" name='submission1' id='submission1' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                            placeholder='https://www.instagram.com/p/CPBVuTls3j4/'
                        />
                    </div>
                </div>
            </div>

            <div className=' px-4 py-2 mb-3'>
                <h1 className='text-xl text-didallablack font-bold mb-2'>Task 2</h1>
                <p className='text-didallabody text-sm mb-2'>Draft a script for all acts for our next advertisement program</p>
                <div className='flex flex-row justify-start items-center'>
                    <div className='text-black bg-downloadgray p-3 h-full'>
                        <img src="/images/Link.svg" alt="Link Logo" />
                    </div>
                    <div className='w-full'>
                        <input type="url" name='submission2' id='submission2' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                            placeholder='https://docs.google.com/document/u/3/d/1K8Z0Mtmna46faQ1f0'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-end mt-4 mb-4 px-4'>

                                <div className='flex items-center justify-end'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        Submit
                                    </button>
                                </div>

            </div>
           </form>
            
        </div>
    )
}

export default SingleBoosterCampaign
