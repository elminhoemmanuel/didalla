import React from 'react'
import Link from 'next/link';

const StepResetPasswordComplete = ({
    resetMessage,
    isloading
}) => {
    return (
        <div >
            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto text-center pt-32' >
                    <div className=' mb-4 flex justify-center items-center'>
                        <img src="/images/email_check.svg" alt="email check"/>
                    </div>

                    {isloading ? "Resetting Your Password..." : <p>{resetMessage}</p>}

                    
                    
            </div>
        </div>
    )
}

export default StepResetPasswordComplete
