import Link from 'next/link'

const LogoNavbar = () => {
    return ( 
        <nav className='border-b border-grayborder flex flex-row py-6 px-6 md:px-10 lg:px-16 justify-start items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
            <div className='pl-0'>
                <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='pl-0 h-10 w-28 md:h-12 md:w-40 
                ' /></a>
                </Link>
            </div>
        </nav>
     );
}
 
export default LogoNavbar;