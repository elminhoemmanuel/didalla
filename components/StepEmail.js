import React, { useState } from 'react'
import useForm from './useForm'
import AuthButton from '../components/AuthButton';
import AuthButtonDisabled from '../components/AuthButtonDisabled';
import Link from 'next/link';
import { GoogleLogin } from 'react-google-login';
import GoogleRegister from './GoogleRegister';
import FacebookRegister from './FacebookRegister';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const StepEmail = ({
    handleNext,
    errors,
    dirty,
    handleOnChange,
    email
}) => {

    const [googleProfile, setGoogleProfile] = useState({})
    const [facebookProfile, setFacebookProfile] = useState({})
    const [showGoogleReg, setShowGoogleReg] = useState(false);
    const [showFacebookReg, setShowFacebookReg] = useState(false);
    const openShowGoogleReg = () => {
        setShowGoogleReg(!showGoogleReg);
        document.body.style.overflowY = 'hidden';
    }
    const openShowFacebookReg = () => {
        setShowFacebookReg(!showFacebookReg);
        document.body.style.overflowY = 'hidden';
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        handleNext();
    }

    const googleFailure = response => {
        console.log(response);
    };
    const googleSuccess = response => {
        console.log(response);
        setGoogleProfile(response.profileObj);
        openShowGoogleReg()
    };

    const responseFacebook = (response) => {
        console.log(response);
        setFacebookProfile(response);
        openShowFacebookReg()
    }

    return (
        <div >
            {
                showGoogleReg &&
                <GoogleRegister googleProfile={googleProfile} />
            }
            {
                showFacebookReg &&
                <FacebookRegister facebookProfile={facebookProfile} />
            }
            <div className='w-3/4 md:w-1/2 lg:w-2/6 mx-auto' >
                <div className='mb-5 text-center'>
                    <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Get started with <br /> <span className='text-didalla'>Didalla</span> for Free</h1>
                    <p className='text-xs text-didallabody mb-3'>Sign Up to your free account to access our services</p>
                </div>

                <GoogleLogin
                    clientId="501372228445-875831oflieocogs7dh94nslf2fmb1ie.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                            type='button' className="p-3 mb-6 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                        font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                            <div className='mr-2'><img className='' src="images/GoogleLogo.svg" alt="Google logo" /></div>
                            <div>Continue with Google</div>
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy={'single_host_origin'}
                />

                <FacebookLogin
                    appId="1700953750292205"
                    // autoLoad
                    fields="name,email,picture"
                    scope="public_profile,email"
                    callback={responseFacebook}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} 
                            type='button' className="p-3 mb-6 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                        font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                            <div className='mr-2'><img className='' src="images/FacebookLogoRegister.svg" alt="Facebook logo" /></div>
                            <div>Continue with Facebook</div>
                        </button>
                    )}
                />

                {/* <Link href="">
                        <a className='block mb-4'>
                            <button type='button' className="p-3 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                                <div className='mr-2'><img className='' src="images/FacebookLogoRegister.svg" alt="Google logo"/></div> 
                                <div>Continue with Facebook</div>
                            </button>

                        </a>
                    </Link> */}

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
                        {email.length === 0 || errors.email ? (<AuthButtonDisabled buttonText='Continue' />) : (<AuthButton buttonText='Continue' />)}
                    </div>
                </form>

                <div className='text-center'>
                    <Link href="/login"><a className='text-didallabody text-sm'>Already have an account? <span className='text-didalla'>Log In</span></a></Link>
                </div>

            </div>
        </div>
    )
}

export default StepEmail
