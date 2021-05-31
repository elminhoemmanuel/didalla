import React, {useState} from 'react'
import Select from 'react-select';


const SendOffer = ({showSendOffer , hideSendOffer}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        hideSendOffer();
    }

    const options = [
        { value: 'facebook', label: 'facebook' },
        { value: 'twitter', label: 'twitter' },
        { value: 'youtube', label: 'youtube' },
        { value: 'instagram', label: 'instagram' },
        { value: 'substack', label: 'substack' },
        
    ]


    return (
        <div className='absolute py-6 px-8 md:px-52 lg:px-80 w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={hideSendOffer}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Send offer</h1></div>
                    </div>
                </div>

                <div className=' pb-16 h-auto'>
                    <div className='px-6 py-4'>
                        <div className='flex items-center mb-2'>
                                <div className='mr-3'>
                                    <img src='/images/ManImage.svg' alt="creator avatar" />
                                </div>
                                <div>
                                    <h1 className='text-didallablack text-sm font-bold'>Obinnaya Chukwu</h1>
                                    <p className='text-didallabody text-sm'><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    &nbsp;Lagos, Nigeria</p>
                                </div>

                        </div>

                        <p className='text-didallabody text-sm mb-4'>Use this form to set the direct offer and also choose the creator connections that you would like to publish content. </p>

                        <form action="" onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Campaigns</h1>
                                <div>
                                    <select name="" id="" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla text-sm'>
                                        <option value="promotefashion">Promote My Fashion</option>
                                        <option value="promotefashion">Promote My Fashion</option>
                                        <option value="promotefashion">Promote My Fashion</option>
                                        <option value="promotefashion">Promote My Fashion</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Offer cost</h1>
                                <div className='flex flex-row justify-start items-center'>
                                        <div className='text-black bg-downloadgray p-3 h-full'>
                                            $
                                        </div>
                                        <div className='w-full'>
                                            <input type="number" name='offerCost' id='offerCost' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                                            placeholder='2000'
                                            />
                                        </div>
                                </div>
                            </div>
                            <div className='mb-10'>
                                <h1 className='text-sm text-black font-bold mb-2'>Choose networks</h1>
                                <p className='text-didallabody text-sm mb-2'>This would be the platforms the creator would publish on. They are based on what the creator currently offers.</p>
                                <div>
                                    <Select
                                        isMulti
                                        name="socialMedia"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={opt => console.log(opt)}
                                    />
                                    
                                </div>
                            </div>

                            <div className='flex flex-row items-center justify-end mb-4'>

                                <div>
                                    <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                    font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                        onClick={hideSendOffer}
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className='flex items-center justify-end'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        Send offer
                                    </button>
                                </div>

                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendOffer
