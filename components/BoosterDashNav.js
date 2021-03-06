import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { BiUser } from "react-icons/bi"
import { RiSettings3Line } from "react-icons/ri"
import { VscBell, VscBellDot } from "react-icons/vsc"
 
const BoosterDashNav = ({ homeColour, campaignColour, creatorsColour, messagesColour }) => {

    const homeLinkStyle = "block whitespace-nowrap px-4 py-3 " + homeColour + " "
    const campaignLinkStyle = "block whitespace-nowrap px-4 py-3 " + campaignColour + " "
    const creatorsLinkStyle = "block whitespace-nowrap px-4 py-3 " + creatorsColour + " "
    const messagesLinkStyle = "block whitespace-nowrap px-4 py-3 " + messagesColour + " "


    const [menuclick, setMenuClick] = useState(false);
    const [notify, setnotify] = useState(true);
    const { first_name, last_name, profile_url } = useSelector(state => state.auth.user)

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'visible';
    }

    return (

        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition  overflow-y-scroll'
                : 'mobile-box flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className='pl-4'>
                    <div className='md:hidden flex flex-row justify-start px-4 mb-6'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>

                    <div className='flex flex-row items-center justify-start text-white px-4 pb-10
                    border-b border-grayborder'>
                        <div className='mr-4' onClick={handleClickMobile}>
                            <Link href="/dashboard/booster">
                                {
                                    profile_url !== undefined ?
                                        <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                            <img src={profile_url} alt="user avatar" />
                                        </div> :
                                        <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                            {first_name[0]}{last_name[0]}
                                        </div>
                                }
                            </Link>
                        </div>
                        <div onClick={handleClickMobile}>
                            <Link href="/dashboard/booster">
                                <a className=''>
                                    {first_name} {last_name}
                                </a>
                            </Link>
                        </div>

                    </div>

                    <div className='pt-4 '>
                        <Link href="/dashboard/booster" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Globe.svg" alt="dashboard icon" />
                                    </div>
                                    <div>
                                        Dashboard
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/dashboard/booster/campaigns" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Target.svg" alt="campaigns icon" />
                                    </div>
                                    <div>
                                        My Campaigns
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className=' pb-4 border-b border-grayborder'>
                        <Link href="/dashboard/booster/messages" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <img src="/images/Messages.svg" alt="Messages icon" />
                                    </div>
                                    <div className='whitespace-nowrap'>
                                        Messages
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className='pt-4'>
                        <Link href="/dashboard/booster/campaigns" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <BiUser className="h-6 w-6" />
                                    </div>
                                    <div>
                                        View Profile
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/dashboard/booster/campaigns" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <RiSettings3Line className="h-6 w-6" />
                                    </div>
                                    <div>
                                        Account Settings
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/dashboard/booster/campaigns" className="cursor-pointer " >
                            <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                                <div className='flex items-center '>
                                    <div className='mr-2'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                    </div>
                                    <div>
                                        Logout
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>

            <nav className='border-b border-grayborder flex flex-row py-6 px-6 md:px-10 lg:px-10 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
                <div className='flex flex-row items-center justify-start'>
                    <div className='md:hidden'>
                        <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                    </div>
                    <div className='pl-0'>
                        <Link href="/dashboard/booster/"><a><img alt="didalla-logo" src='/images/logo.svg' className='mr-16 pl-0 h-10 w-28 md:h-12 md:w-40 
                            ' /></a>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <Link href="/dashboard/booster" >
                            <a className={homeLinkStyle}>Dashboard</a>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <Link href="/dashboard/booster/campaigns" >
                            <a className={campaignLinkStyle}>My campaigns</a>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <Link href="/dashboard/booster/messages" >
                            <a className={messagesLinkStyle}>Messages</a>
                        </Link>
                    </div>

                </div>
                <div className='flex flex-row items-center justify-start'>

                    <div className="mr-3">
                        <button className='focus:outline-none block'>
                            {
                                notify ?
                                <VscBellDot className="h-6 w-6 text-didalla" /> :
                                <VscBell className="h-6 w-6" />
                            }
                        </button>
                    </div>

                    <div className=''>
                        <Link href="/dashboard/booster">
                            {
                                profile_url !== undefined ?
                                    <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                        <img src={profile_url} alt="user avatar" />
                                    </div> :
                                    <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                        {first_name[0]}{last_name[0]}
                                    </div>
                            }

                        </Link>
                    </div>



                </div>
            </nav>
        </>

    );
}

export default BoosterDashNav;