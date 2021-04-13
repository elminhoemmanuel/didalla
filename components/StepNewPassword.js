import React from 'react'
import AuthButton from './AuthButton';
import AuthButtonDisabled from './AuthButtonDisabled';

const StepNewPassword = ({
                values,
                errors,
                dirty,
                handleOnChange,
                password,
                handleFormSubmit,
}) => {
    return (
        <div>
            {/* collect password */}
            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'>
                    <div className='mb-5 text-center'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Reset Password</h1>
                        <p className='text-xs text-didallabody mb-3'>Enter your new password</p>
                    </div>

                    <form action="" className='mt-6 mb-3' onSubmit={handleFormSubmit}>
                        <div className=''>
                            {/* Password */}
                            <div className='mb-3'>
                                <div className='mb-1'><label htmlFor="password" className='text-didallabody text-sm'>Password</label></div>
                                <div className='mb-3'>
                                    <input className='p-4 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    id='password'
                                    placeholder='Enter your new password'
                                    required
                                    />
                                    {errors.password && dirty.password && (
                                        <p className='text-red-500 text-xs'>{errors.password}</p>
                                )}
                                </div>
                            
                            </div>
                            
                            {password.length === 0 || errors.password 
                                ? (<AuthButtonDisabled buttonText='Reset Password'/>) : 
                                (<AuthButton buttonText='Reset Password' />)}

                        </div>
                    </form>
                    
                </div>
        </div>
    )
}

export default StepNewPassword
