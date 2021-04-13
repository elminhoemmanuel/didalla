import Link from 'next/link';
import React, { useState } from 'react';
import AuthButton from '../components/AuthButton';
import AuthButtonDisabled from '../components/AuthButtonDisabled';

const StepEnterResetPassword = ({ 
    errors,
    dirty,
    handleOnChange,
    email,    
    handleFormSubmit
}) => {
    return (
        <div>

                {/* collect email */}
                <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'>
                    <div className='mb-5 text-center'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Reset Password</h1>
                        <p className='text-xs text-didallabody mb-3'>Enter in your email to reset your password</p>
                    </div>

                    <form action="" className='mt-6 mb-3' onSubmit={handleFormSubmit}>
                        <div className=''>
                            {/* Email */}
                            <div className='mb-3'>
                                <div className='mb-1'><label htmlFor="email" className='text-didallabody text-sm'>Email Address</label></div>
                                <div className='mb-3'>
                                    <input className='p-4 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
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
                            
                            </div>
                            
                            {email.length === 0 || errors.email 
                                ? (<AuthButtonDisabled buttonText='Reset Password'/>) : 
                                (<AuthButton buttonText='Reset Password' />)}

                        </div>
                    </form>

                    <div className='text-center'>
                        <Link href="/register"><a className='text-didallabody text-sm'>Not yet a member? <span className='text-didalla'>Create your account now!</span></a></Link>
                    </div>
                    
                </div>



            </div>
    )
}

export default StepEnterResetPassword
