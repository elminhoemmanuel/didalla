import Link from 'next/link'
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {footerObjThree} from './FooterData'

const Navbar = () => {

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
            <div className={menuclick ? 'mobile-box-show flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0 z-50 pt-8 max-w-screen-2xl transition ease-in duration-200 overflow-y-visible'
            : 'mobile-box flex shadow-xl flex-col md:hidden bg-didallablack text-white w-3/4 h-full fixed top-0  z-50 pt-8 max-w-screen-2xl transition duration-200 ease-out'}>
                <div className=''>
                    <div className='md:hidden flex flex-row justify-between px-4 mb-6'>
                        <button onClick={handleClickMobile} className='block focus:outline-none outline-none' type='button'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                        <div className='flex flex-row'>
                            {footerObjThree.map(item =>{
                                return <div key={item.id} className='pt-2 pl-2'>
                                    <Link href={item.url}>
                                        <a ><img src={`/images/${item.value}.svg`} alt='brand-logos' className='h-6 w-6'/></a>
                                    </Link>
                                </div>
                            })}

                        </div>
                    </div>
                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                            <div className='text-2xl'>Login</div>
                        </a>
                    </Link>

                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla border-b border-gray-300">
                            <div className='text-2xl'>Get the App</div>
                        </a>
                    </Link>

                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 flex flex-row justify-between w-full cursor-pointer hover:bg-didalla">
                            <div>Explore</div>
                            <div><BiChevronDown className="dropdown" /></div>
                        </a>
                    </Link>
                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 flex flex-row justify-between w-full cursor-pointer hover:bg-didalla">
                            <div>For&nbsp;Creators</div>
                            <div><BiChevronDown className="dropdown" /></div>
                        </a>
                    </Link>
                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                            <div>Contact</div>
                        </a>
                    </Link>
                    <Link href="/" className="cursor-pointer ">
                        <a  className="px-4 py-4 block w-full cursor-pointer hover:bg-didalla">
                            <div>FAQS</div>
                        </a>
                    </Link>
                </div>
                
            </div>

            {/* Navigation bar */}
            <nav className='flex flex-row py-4 px-6 md:px-10 lg:px-16 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
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
                        <Link href="/">
                            <a className="whitespace-nowrap block">Explore&nbsp;<BiChevronDown className='inline'/></a>
                        </Link>
                    </div>
                    <div className='pl-6 hidden md:block'>
                        <Link href="/">
                            <a className='whitespace-nowrap block'>For Creators&nbsp;<BiChevronDown className='inline' /></a>
                        </Link>
                    </div>

                </div>
                <div className='flex-row items-center flex'>
                    <div className='md:pr-4'>
                        <Link href="/">
                            <button className='whitespace-nowrap px-3 py-1 md:px-4 md:py-2 bg-white text-didalla border 
                            border-didalla rounded hover:text-white hover:bg-didalla focus:outline-none'>Log&nbsp;In</button>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <Link href="/">
                            <button className='whitespace-nowrap px-4 py-2 bg-didalla
                            border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                            focus:outline-none'>Get&nbsp;Started</button>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
     );
}
 
export default Navbar;