import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Faqs = () => {

    const [general , setGeneral] = useState({
        charge:false, contact:false, how:false, app:false, pay:false, social:false
    });
    const [billing , setBilling] = useState({
        charge:false
    });

    return (
        <div className='px-6 md:px-10 lg:px-16 pt-32'>
            <div className='pb-10'>
                <h1 className='text-2xl md:text-5xl font-bold text-didallatitle mb-10'>
                    Frequently Asked <br/>
                    Questions
                </h1>
                {/* <div className='flex items-center justify-start flex-wrap'>
                    <div className='pr-6 pb-3'>
                        <p>Jump to:</p>
                    </div>
                    <div className='cursor-pointer pr-3 pb-3'>
                        <a className='px-5 border border-gray-800 rounded py-1 block ' href='#general'>General</a>
                    </div>
                    <div className='cursor-pointer pr-3 pb-3'>
                        <a className='px-5 border border-gray-800 rounded py-1 block ' href='#billing'>Billing and Payment</a>
                    </div>
                    <div className='cursor-pointer pr-3 pb-3'>
                        <a className='px-5 border border-gray-800 rounded py-1 block ' href='#sales'>Sales</a>
                    </div>
                    
                </div> */}
            </div>
            <div className='pb-12'>
                <div className='mb-16'>
                    {/* <h1 className='text-2xl font-bold text-didallatitle w-full md:w-3/5 pb-3 border-b border-grayborder'>
                        General
                    </h1> */}
                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                                Didalla looks great. How does it work?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        how: !general.how
                                    })
                                }}
                                >
                                    {
                                        general.how ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.how ?
                            <p className='text-sm'>
                                If you post content on social media, or other online channels then you are a content creator! Welcome to the growing revolution. You can now earn money advertising for thousands of businesses looking for folks like you to publicize their business.
                            </p> :
                            <p></p>
                        }

                    </div>

                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                            Is there a Didalla app?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        app: !general.app
                                    })
                                }}
                                >
                                    {
                                        general.app ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.app ?
                            <p className='text-sm'>
                                Yes! Find us on the App Store and Google Play. Feel free to give us 5 stars!
                            </p> :
                            <p></p>
                        }

                    </div>
                    
                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                             What payment options are accepted?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        pay: !general.pay
                                    })
                                }}
                                >
                                    {
                                        general.pay ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.pay ?
                            <p className='text-sm'>
                                All payment options are accepted. Didalla processes payments using Stripe and Paypal
                            </p> :
                            <p></p>
                        }

                    </div>

                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                                How much does it cost to join Didalla?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        charge: !general.charge
                                    })
                                }}
                                >
                                    {
                                        general.charge ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.charge ?
                            <p className='text-sm'>
                                Didalla is free to join, and it will stay free forever!
                            </p> :
                            <p></p>
                        }

                    </div>

                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                                How can i contact you?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        contact: !general.contact
                                    })
                                }}
                                >
                                    {
                                        general.contact ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.contact ?
                            <p className='text-sm'>
                                You can contact us 
                                <Link href='/contact'>
                                    <a className='text-didalla'> here</a>
                                </Link>
                            </p> :
                            <p></p>
                        }

                    </div>

                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                                How else can I contact you?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setGeneral({
                                        ... general,
                                        social: !general.social
                                    })
                                }}
                                >
                                    {
                                        general.social ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            general.social ?
                            <p className='text-sm'>
                                You can contact us on social media. Check the explore dropdown to follow us! 
                                
                            </p> :
                            <p></p>
                        }

                    </div>

                    <div className='border-b border-grayborder py-3 '>
                        <div className='flex items-center justify-between mb-3'>
                            <div className='text-sm font-bold'>
                                How much is the service charge per gig?
                            </div>
                            <div>
                                <button className=' focus:outline-none' type='button'
                                onClick={()=>{
                                    setBilling({
                                        ... billing,
                                        charge: !billing.charge
                                    })
                                }}
                                >
                                    {
                                        billing.charge ?
                                        <span className='text-2xl'>-</span> :
                                        <span className='text-2xl'>+</span>
                                    }
                                </button>
                            </div>
                        </div>
                        {
                            billing.charge ?
                            <p className='text-sm'>
                                We receive a service charge of 7% on all transactions + $0.50 booking fee
                            </p> :
                            <p></p>
                        }

                    </div>

                </div>

                {/* <div className='mb-16'>
                    <h1 className='text-2xl font-bold text-didallatitle w-full md:w-3/5 pb-3 border-b border-grayborder'>
                        Billing and Payment
                    </h1>
                    
                </div>

                <div className='mb-16'>
                    <h1 className='text-2xl font-bold text-didallatitle w-full md:w-3/5 pb-3 border-b border-grayborder'>
                        Sales
                    </h1>
                </div> */}
            </div>
        </div>
    );
}

export default Faqs;