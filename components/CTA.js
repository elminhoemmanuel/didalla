import Link from 'next/link'

const CTA = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div className='py-6 px-3 text-center md:text-left'>
                <h1 className='font-bold text-didallatitle text-2xl'>Get started with</h1>
                <h1 className='font-bold text-didalla text-2xl'>Didalla</h1>
            </div>
            <Link href="" className=''>
                <a className='block shadow-2xl px-6 py-10 md:py-6 mt-4 md:mt-0'>
                    <div className='flex justify-center items-center md:justify-start mb-2'><img src="images/microphone.svg" alt="microphone image"/></div>
                    <div className='text-center md:text-left font-bold text-base text-didallatitle mb-1'>Hire a content <br />creator</div>
                    <div className='text-center md:text-left text-sm text-didallabody mb-2'>Get reach for your brand</div>
                </a>
            </Link>

            <Link href="" className=''>
                <a className='block shadow-2xl px-6 py-10 md:py-6 mt-4 md:mt-0'>
                    <div className='flex justify-center items-center md:justify-start mb-2'><img src="images/media.svg" alt="microphone image"/></div>
                    <div className='text-center md:text-left font-bold text-base text-didallatitle mb-1'>Become a content <br />creator</div>
                    <div className='text-center md:text-left text-sm text-didallabody mb-2'>Earn money creating content</div>
                </a>
            </Link>

        </div>
     );
}
 
export default CTA;