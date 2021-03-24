import HeaderTemplate from './HeaderTemplate'
import { headerObjTwo } from './HeaderData'


const ForBoosters = () => {
    return ( 
        <div className='px-6 md:px-10 lg:px-16 py-16 bg-didallablack text-white booster-holder'>
            <HeaderTemplate headerObj={headerObjTwo} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-10'>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/CreditCard.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>No Hidden Fees</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/DeviceMobile.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>Simple signup</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/Ticket.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>Installment payments</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/Chats.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>No Hidden Fees</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/DeviceMobile.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>Simple signup</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>
                <div className='text-center'>
                    <div className='flex justify-center items-center mb-2'><img className='' src="/images/Ticket.svg" alt="credit card icon"/></div>
                    <h1 className='text-xl text-black mb-2'>Installment payments</h1>
                    <p className='text-sm text-black mb-2'>Your money. Your account. 60 seconds, 24/7. Job done.</p>

                </div>

            </div>
        </div>
     );
}
 
export default ForBoosters;