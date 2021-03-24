import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {

    const [menuclick, setMenuClick] = useState(false);

    const handleClick = () => {
        setMenuClick(!menuclick);
        
    }
    

    return ( 
        <>
            {/* mobile screens vertical nav */}
            <div className={menuclick ? 'flex flex-col md:hidden bg-didallablack text-white w-full h-full absolute top-0 pt-8'
            : 'hidden flex-col md:hidden bg-didallablack text-white w-full h-full absolute top-0 pt-8'}>
                <div className='md:hidden flex flex-row justify-end pr-4'>
                    <button onClick={handleClick} className='block focus:outline-none outline-none' type='button'><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                <Link href="/" className="block cursor-pointer">
                    <a className="py-4 block w-full text-center cursor-pointer hover:bg-didalla">Explore</a>
                </Link>
                <Link href="/" className="block cursor-pointer">
                    <a className='py-4 w-full text-center whitespace-nowrap block cursor-pointer hover:bg-didalla'>Why Didalla?</a>
                </Link>
                <Link href="/" className="block cursor-pointer">
                    <a className="py-4 w-full text-center block cursor-pointer hover:bg-didalla">Support</a>
                </Link>
                <div className='py-2 text-center'>
                        <Link href="/" className=''>
                            <button className=' whitespace-nowrap px-32 py-2 bg-transparent text-white didalla border 
                            border-didalla rounded hover:text-white hover:bg-didalla focus:outline-none'>Log&nbsp;In</button>
                        </Link>
                </div>
                <div className='py-2 text-center'>
                        <Link href="/" className=''>
                            <button className=' whitespace-nowrap px-32 py-2 bg-didalla
                            border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                            focus:outline-none'>Sign&nbsp;Up</button>
                        </Link>
                </div>


            </div>

            {/* Navigation bar */}
            <nav className='flex flex-row py-10 px-6 md:px-10 lg:px-16 justify-between items-center'>
                <div className='flex flex-row justify-start items-center text-base'>
                    <div className='md:hidden'>
                        <button onClick={handleClick} className='block focus:outline-none outline-none' type='button'><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
                    </div>
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='pl-0 h-10 w-28 md:h-12 md:w-40 
                        ' /></a>
                        </Link>
                    </div>
                    
                    <div className='pl-6 hidden md:block'>
                        <Link href="/">
                            <a>Explore</a>
                        </Link>
                    </div>
                    <div className='pl-6 hidden md:block'>
                        <Link href="/">
                            <a className='whitespace-nowrap'>Why Didalla?</a>
                        </Link>
                    </div>
                    <div className='pl-6 hidden md:block'>
                        <Link href="/">
                            <a>Support</a>
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
                            focus:outline-none'>Sign&nbsp;Up</button>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
     );
}
 
export default Navbar;