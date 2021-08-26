import Link from 'next/link'
import { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { footerObjThree } from './FooterData';
import { exploreDrop, creatorDrop } from './DropDownData'

const Navbar = ({ handleCreatorLarge, creatorclicklarge, exploreclicklarge, handleExploreLarge, removeDropdown }) => {

    const [menuclick, setMenuClick] = useState(false);
    const [exploreclick, setExploreClick] = useState(false);
    const [creatorclick, setCreatorClick] = useState(false);
    const [userToken, setuserToken] = useState();

    const handleClick = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuClick(!menuclick);
        document.body.style.overflowY = 'visible';
    }

    useEffect(() => {
        setuserToken(localStorage.getItem('userToken'));

    }, [])

    return (
        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition  overflow-y-scroll'
                : 'mobile-box flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl '}>
                <div className=''>
                    <div className='md:hidden flex flex-row justify-between px-4 mb-6'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                    <Link href="/login" className="cursor-pointer " >
                        <a onClick={handleClickMobile} className="px-4 py-2 block w-full cursor-pointer hover:bg-didalla">
                            <div className='text-2xl'>Login</div>
                        </a>
                    </Link>

                    <Link href="/register" className="cursor-pointer " >
                        <a onClick={handleClickMobile} className="px-4 py-2 block w-full cursor-pointer hover:bg-didalla">
                            <div className='text-2xl'>Sign Up</div>
                        </a>
                    </Link>

                    {/* <Link href="/" className="cursor-pointer ">
                        <a onClick={handleClickMobile} className="px-4 pt-2 pb-8 block w-full cursor-pointer hover:bg-didalla border-b border-gray-600 underline">
                            <div className='text-2xl'>Get the App</div>
                        </a>
                    </Link> */}

                    <div className="px-4 py-4 flex flex-row justify-between w-full cursor-pointer hover:bg-didalla" onClick={() => { setExploreClick(!exploreclick) }}>
                        <div>Explore</div>
                        <div><BiChevronDown className="dropdown" /></div>
                    </div>

                    {
                        exploreclick ? (<div className=''>
                            {exploreDrop.map(item => {
                                return <Link href={item.url} className="cursor-pointer " key={item.id} >
                                    <a className="px-8 py-4 flex flex-row justify-start w-full cursor-pointer hover:bg-didalla" onClick={handleClickMobile}>
                                        <div className='pr-2'>{item.icon} </div>
                                        <div>{item.text}</div>
                                    </a>
                                </Link>
                            })}

                        </div>) : null
                    }


                    <div className="px-4 py-4 flex flex-row justify-between w-full cursor-pointer hover:bg-didalla" onClick={() => { setCreatorClick(!creatorclick) }}>
                        <div>For&nbsp;Creators</div>
                        <div><BiChevronDown className="dropdown" /></div>
                    </div>

                    {
                        creatorclick ? (<div className=''>
                            {creatorDrop.map(item => {
                                return <Link href={item.url} className="cursor-pointer " key={item.id} >
                                    <a onClick={handleClickMobile} className="px-8 py-4 flex flex-row justify-start w-full cursor-pointer hover:bg-didalla">
                                        <div className='pr-2'>{item.icon} </div>
                                        <div>{item.text}</div>
                                    </a>
                                </Link>
                            })}

                        </div>) : null
                    }

                    <Link href="/contact" className="cursor-pointer " >
                        <a onClick={handleClickMobile} className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                            <div>Contact Us</div>
                        </a>
                    </Link>
                    <Link href="/faqs" className="cursor-pointer " >
                        <a onClick={handleClickMobile} className="mb-16 px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                            <div>FAQS</div>
                        </a>
                    </Link>
                    <div className='flex flex-row px-4 py-4'>
                        {footerObjThree.map(item => {
                            return <div key={item.id} className='pr-2' onClick={handleClickMobile}>
                                <Link href={item.url} >
                                    <a ><img src={`/images/${item.value}.svg`} alt='brand-logos' className='h-8 w-8' /></a>
                                </Link>
                            </div>
                        })}

                    </div>
                </div>

            </div>

            {/* Navigation bar */}
            <nav className=' border-b border-grayborder flex flex-row py-4 px-6 md:px-10 lg:px-16 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
                <div className='flex flex-row justify-start items-center text-base'>
                    <div className='md:hidden'>
                        <button onClick={handleClick} className='mr-4 block focus:outline-none outline-none' type='button'><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                    </div>
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='pl-0 h-10 w-28 md:h-12 md:w-40 
                        ' /></a>
                        </Link>
                    </div>

                    <div className='pl-6 hidden md:block'>

                        <button className="whitespace-nowrap block relative border-none focus:outline-none" onClick={handleExploreLarge}>
                            Explore&nbsp;<BiChevronDown className='inline' />
                            {
                                exploreclicklarge ? (<div className='bg-white border border-gray-50 absolute rounded top-8 left-0 w-48 py-2 shadow-2xl'>

                                    {exploreDrop.map(item => {
                                        return <Link href={item.url} className="cursor-pointer " key={item.id} >
                                            <a className="py-3 px-3 flex flex-row justify-start w-full cursor-pointer hover:bg-gray-100" onClick={handleClickMobile}>
                                                <div className='pr-2'>{item.icon} </div>
                                                <div>{item.text}</div>
                                            </a>
                                        </Link>
                                    })}
                                </div>) : null
                            }

                        </button>
                    </div>
                    <div className='pl-6 hidden md:block'>
                        <button className='whitespace-nowrap block relative border-none focus:outline-none' onClick={handleCreatorLarge}>
                            For Creators&nbsp;<BiChevronDown className='inline' />
                            {
                                creatorclicklarge ? <div className='bg-white border border-gray-50 absolute rounded top-8 left-0 w-48 py-2 shadow-2xl'>
                                    {creatorDrop.map(item => {
                                        return <Link href={item.url} className="cursor-pointer " key={item.id} >
                                            <a className="py-3 px-3 flex flex-row justify-start w-full cursor-pointer hover:bg-gray-100" onClick={handleClickMobile}>
                                                <div className='pr-2'>{item.icon} </div>
                                                <div>{item.text}</div>
                                            </a>
                                        </Link>
                                    })}
                                </div> : null
                            }
                        </button>
                    </div>

                </div>
                <div className='flex-row items-center flex'>
                    {
                        userToken ?
                        <div></div>: 
                        <div className='hidden md:block md:pr-4'>
                            <Link href="/login">
                                <button className='whitespace-nowrap px-3 py-1 md:px-4 md:py-2 bg-white text-didalla border 
                                border-didalla rounded hover:text-white hover:bg-didalla focus:outline-none'>Log&nbsp;In</button>
                            </Link>
                        </div> 
                    }
                    {
                        !userToken ?
                            <div className=' md:hidden'>
                                <Link href="/register">
                                    <button className='whitespace-nowrap px-4 py-2 bg-didalla
                                border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                                focus:outline-none'>Sign&nbsp;Up</button>
                                </Link>
                            </div> :
                            <div className='md:pr-4'>
                                <Link href="/login">
                                    <button className='whitespace-nowrap px-3 py-1 md:px-4 md:py-2 bg-white text-didalla border 
                                    border-didalla rounded hover:text-white hover:bg-didalla focus:outline-none'>Log&nbsp;In</button>
                                </Link>
                            </div>
                    }
                    {
                        !userToken &&
                        <div className='hidden md:block'>
                            <Link href="/register">
                                <button className='whitespace-nowrap px-4 py-2 bg-didalla
                                border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                                focus:outline-none'>Sign&nbsp;Up</button>
                            </Link>
                        </div>
                    }

                </div>
            </nav>
        </>
    );
}

export default Navbar;