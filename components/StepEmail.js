import React, { useState } from 'react'
import useForm from './useForm'
import AuthButton from '../components/AuthButton';
import AuthButtonDisabled from '../components/AuthButtonDisabled';
import Link from 'next/link';

const StepEmail = ({
    handleNext, 
    errors,
    dirty,
    handleOnChange,
    email        
}) => {

    const handleEmailSubmit = (e) =>{
        e.preventDefault();
        handleNext();
    }

    return (
        <div >
            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto' >
                    <div className='mb-5 text-center'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Get started with <br/> <span className='text-didalla'>Didalla</span> for Free</h1>
                        <p className='text-xs text-didallabody mb-3'>Sign Up to your free account to access our services</p>
                    </div>

                    <Link href="">
                        <a className='block mb-4'>
                            <button type='button' className="p-3 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                                <div className='mr-2'><img className='' src="images/GoogleLogo.svg" alt="Google logo"/></div> 
                                <div>Continue with Google</div>
                            </button>

                        </a>
                    </Link>

                    <Link href="">
                        <a className='block mb-4'>
                            <button type='button' className="p-3 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                                <div className='mr-2'><img className='' src="images/FacebookLogoRegister.svg" alt="Google logo"/></div> 
                                <div>Continue with Facebook</div>
                            </button>

                        </a>
                    </Link>

                    <p className='text-center text-black text-sm'>OR</p>

                    <form action="" className='mt-4 mb-3' onSubmit={handleEmailSubmit}>
                        <div className=''>
                            <div className='mb-2'><label htmlFor="email" className='text-didallabody text-sm'>Email Address</label></div>
                            <div className='mb-2'>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="email"
                                 name="email"
                                 value={email}
                                 onChange={handleOnChange}
                                 id='email'
                                 placeholder='Enter your email address here'
                                 required
                                />
                                {errors.email && dirty.email && (
                                    <p className='text-red-500 text-xs'>{errors.email}</p>
                                )}
                            </div>
                            {email.length === 0 || errors.email ? (<AuthButtonDisabled buttonText='Continue'/>) : (<AuthButton buttonText='Continue' />)}
                        </div>
                    </form>

                    <div>
                        <Link href="/login"><a className='text-didallabody text-sm'>Already have an account? <span className='text-didalla'>Log In</span></a></Link>
                    </div>
                    
                </div>
        </div>
    )
}

export default StepEmail