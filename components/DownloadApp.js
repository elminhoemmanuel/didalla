import Link from 'next/link'

const DownloadApp = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-20'>
            <div className='download-holder p-10 bg-downloadgray rounded'>
                <div className=''>
                    <h1 className='text-3xl md:text-4xl text-center md:text-left text-didallatitle font-bold'>Acess <span className='text-didalla'>Didalla</span> on</h1>
                    <h1 className='text-3xl md:text-4xl text-center md:text-left text-didallatitle font-bold mb-2'>the go</h1>
                    <p className='text-didallatitle text-sm mb-4 text-center md:text-left'>Access to content creators from your phone</p>
                    <div className='flex flex-col justify-center md:justify-start items-center md:flex-row'>
                        <div className='w-full md:w-auto mb-3 md:m-0 mr-0 md:mr-3'><Link href=""><a ><img className='w-full h-12' src="/images/Playstore.svg" alt="playstore download"/></a></Link></div>
                        <div className='w-full md:w-auto'><Link href=""><a ><img className='w-full h-12' src="/images/Appstore.svg" alt="Appstore download"/></a></Link></div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DownloadApp;