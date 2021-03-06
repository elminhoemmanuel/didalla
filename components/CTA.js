import Link from 'next/link'

const CTA = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 pb-72 md:pb-20 pt-20 bg-downloadgray cta-holder '>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-didallatitle text-2xl'>Get started with</h1>
                <h1 className='font-bold text-didalla text-2xl'>Didalla</h1>
            </div>
            <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 lg:w-3/4'>
                <Link href="/register" className=''>
                    <a className='bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-gray-300 hover:bg-gray-50 hover:border-didalla'>
                        <div className='flex justify-left items-center  mb-2'><img src="images/microphone.svg" alt="microphone image"/></div>
                        <div className='text-left  font-bold text-base text-didallatitle mb-1'>Book a content <br />creator</div>
                        <div className='text-left  text-sm text-didallabody mb-2'>Get reach for your brand</div>
                    </a>
                </Link>

                <Link href="/register" className=''>
                    <a className='bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-gray-300 hover:bg-gray-50 hover:border-didalla'>
                        <div className='flex justify-left items-center  mb-2'><img src="images/media.svg" alt="microphone image"/></div>
                        <div className='text-left  font-bold text-base text-didallatitle mb-1'>Earn as a content <br />creator</div>
                        <div className='text-left  text-sm text-didallabody mb-2'>Earn money creating content</div>
                    </a>
                </Link>
            </div>

        </div>
     );
}
 
export default CTA;