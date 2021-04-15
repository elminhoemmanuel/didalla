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
                        {
                          resetMessage === "" ? 
                          <svg className="w-16 h-16 text-didalla" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg> 
                          :
                          <svg className="w-16 h-16 text-didalla" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        }
                    </div>

                    {isloading ? "Resetting Your Password..." : <p>{resetMessage}</p>}

                    <div>
                        {resetMessage !== "Something went wrong , plase try again" ? <p>You can <Link href="/login"><a >login here</a></Link></p>:null}
                    </div>
                    
            </div>
        </div>
    )
}

export default StepResetPasswordComplete
