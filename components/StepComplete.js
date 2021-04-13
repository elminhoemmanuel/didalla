import React from 'react'
import Link from 'next/link';

const StepComplete = () => {
    return (
        <div >
            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto text-center' >
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Welcome to <span className='text-didalla'>Didalla</span></h1> 
                    </div>

                    <div className=' mb-4 flex justify-center items-center'>
                        <img src="/images/email_check.svg" alt="email check"/>
                    </div>

                    <p>One last thing though , please check your email to verify your email address and then 
                        login to your account <Link href="/login"><a className='text-didalla'>here</a></Link>
                    </p>

                    
                    
            </div>
        </div>
    )
}

export default StepComplete
