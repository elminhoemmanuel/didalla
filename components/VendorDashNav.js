import Link from 'next/link'
import React, { useState } from 'react'

const VendorDashNav = ({homeColour, campaignColour , creatorsColour, messagesColour}) => {

    const homeLinkStyle = "block whitespace-nowrap px-4 py-3 " + homeColour +" "
    const campaignLinkStyle = "block whitespace-nowrap px-4 py-3 " + campaignColour +" "
    const creatorsLinkStyle = "block whitespace-nowrap px-4 py-3 " + creatorsColour +" "
    const messagesLinkStyle = "block whitespace-nowrap px-4 py-3 " + messagesColour +" "

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY= 'hidden';
        
    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY= 'visible';
    }

    return ( 

        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition  overflow-y-scroll'
            : 'mobile-box flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className=''>
                    <div className='md:hidden flex flex-row justify-start px-4 mb-6'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>

                    <div className='flex flex-row items-center justify-start text-white px-4 pb-10
                    border-b border-grayborder'>
                        <div className='mr-4' onClick={handleClickMobile}>
                            <Link href="/dashboard/vendor/profile">
                                <a className=''>
                                    <img className='w-8 h-8' src="/images/ManImage.svg" alt="vendor avatar"/>
                                </a>
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link href="/dashboard/vendor/profile">
                                <a className=''>
                                    Emmanuel Amodu
                                </a>
                            </Link>
                        </div>

                    </div>

                    <div className='pt-6 '>
                        <Link href="/dashboard/vendor" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Globe.svg" alt="dashboard icon"/>
                                    </div>
                                    <div>
                                        Dashboard
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/dashboard/vendor/campaigns" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Target.svg" alt="campaigns icon"/>
                                    </div>
                                    <div>
                                        Campaigns
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/dashboard/vendor/creators" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                                    </div>
                                    <div className='whitespace-nowrap'>
                                        Creators List
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=' pb-4 border-b border-grayborder'>
                        <Link href="/dashboard/vendor/messages" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Messages.svg" alt="Messages icon"/>
                                    </div>
                                    <div className='whitespace-nowrap'>
                                        Messages
                                    </div> 
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className='mt-6'>
                            <button onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Logout.svg" alt="Logout icon"/>
                                    </div>
                                    <div className='whitespace-nowrap'>
                                        Logout
                                    </div> 
                                </div>
                            </button>
                    </div>

                    
                </div>
                
            </div>

            <nav className='border-b border-grayborder flex flex-row py-6 px-6 md:px-10 lg:px-10 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
                    <div className='flex flex-row items-center justify-start'>
                        <div className='md:hidden'>
                            <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                        </div>
                        <div className='pl-0'>
                            <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='mr-16 pl-0 h-10 w-28 md:h-12 md:w-40 
                            ' /></a>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <Link href="/dashboard/vendor" >
                                <a className={homeLinkStyle}>Dashboard</a>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <Link href="/dashboard/vendor/campaigns" >
                                <a className={campaignLinkStyle}>My campaigns</a>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <Link href="/dashboard/vendor/creators" >
                                <a className={creatorsLinkStyle}>Creators List</a>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <Link href="/dashboard/vendor/messages" >
                                <a className={messagesLinkStyle}>Messages</a>
                            </Link>
                        </div>

                    </div>
                    <div className='flex flex-row items-center justify-start'>
                        <div className='hidden md:block'>
                            <Link href="/dashboard/vendor/notifications">
                                <a className=''>
                                    <img className='mr-4' src="/images/BellSimple.svg" alt="bell icon"/>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href="/dashboard/vendor/profile">
                                <a className=''>
                                    <img className='' src="/images/ManImage.svg" alt="vendor avatar"/>
                                </a>
                            </Link>
                        </div>

                    </div>
            </nav>
        </>

     );
}
 
export default VendorDashNav;