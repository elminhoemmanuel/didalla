import Link from 'next/link'

const VendorDashNav = ({homeColour, campaignColour , creatorsColour, messagesColour}) => {

    const homeLinkStyle = "block whitespace-nowrap pr-3 " + homeColour +" "
    const campaignLinkStyle = "block whitespace-nowrap pr-3 " + campaignColour +" "
    const creatorsLinkStyle = "block whitespace-nowrap pr-3 " + creatorsColour +" "
    const messagesLinkStyle = "block whitespace-nowrap pr-3 " + messagesColour +" "

    return ( 
        <nav className='border-b border-grayborder flex flex-row py-6 px-6 md:px-10 lg:px-16 justify-between items-center fixed top-0 w-full bg-white max-w-screen-2xl z-10'>
                <div className='flex flex-row items-center justify-start'>
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="didalla-logo" src='/images/logo.svg' className='mr-16 pl-0 h-10 w-28 md:h-12 md:w-40 
                        ' /></a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/vendor" >
                            <a className={homeLinkStyle}>Dashboard</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/vendor/campaign" >
                            <a className={campaignLinkStyle}>My campaigns</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/vendor/creators" >
                            <a className={creatorsLinkStyle}>Content creators</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/vendor/messages" >
                            <a className={messagesLinkStyle}>Messages</a>
                        </Link>
                    </div>

                </div>
                <div className='flex flex-row items-center justify-start'>
                    <div>
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
     );
}
 
export default VendorDashNav;