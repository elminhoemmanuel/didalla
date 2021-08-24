import React, { useState } from 'react';
import AuthButton from '../components/AuthButton';
import AuthButtonDisabled from '../components/AuthButtonDisabled';
import Link from 'next/link';
import { GoogleLogin } from 'react-google-login';
import GoogleRegister from './GoogleRegister';
import FacebookRegister from './FacebookRegister';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const StepLoginDetails = ({
    values,
    errors,
    dirty,
    handleOnChange,
    email,
    password,
    handleFormSubmit,
    showSpinner,
    responsegotten
}) => {

    const [googleProfile, setGoogleProfile] = useState({})
    const [facebookProfile, setFacebookProfile] = useState({})
    const [showGoogleReg, setShowGoogleReg] = useState(false);
    const [authload, setAuthLoad] = useState(false);
    const [authload2, setAuthLoad2] = useState(false);
    const [showFacebookReg, setShowFacebookReg] = useState(false);
    const openShowGoogleReg = () => {
        setShowGoogleReg(!showGoogleReg);
        // document.body.style.overflowY = 'hidden';
    }

    const openShowFacebookReg = () => {
        setShowFacebookReg(!showFacebookReg);
        // document.body.style.overflowY = 'hidden';
    }
    const setLoader = (loader) => {
        if (loader === "first") {
            setAuthLoad(false)
        }
        if (loader === "second") {
            setAuthLoad2(false)
        }
    }

    const googleFailure = response => {
        setAuthLoad2(false)
        console.log(response);
        setGoogleProfile(response);
        openShowGoogleReg()
    };
    const googleSuccess = response => {
        setAuthLoad2(false)
        console.log(response);
        setGoogleProfile(response.profileObj);
        openShowGoogleReg()
    };

    const responseFacebook = (response) => {
        setAuthLoad(false)
        console.log(response);
        setFacebookProfile(response);
        openShowFacebookReg()
    }

    return (
        <div>
            {/* collect email */}

            {
                showGoogleReg &&
                <GoogleRegister googleProfile={googleProfile} openShowGoogleReg={openShowGoogleReg} setLoader={setLoader} />
            }
            {
                showFacebookReg &&
                <FacebookRegister facebookProfile={facebookProfile} openShowFacebookReg={openShowFacebookReg} setLoader={setLoader} />
            }

            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'>
                <div className='mb-5 text-center'>
                    <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Welcome Back</h1>
                    <p className='text-xs text-didallabody mb-3'>Login to your account to continue using our services</p>
                </div>

                <GoogleLogin
                    clientId="501372228445-875831oflieocogs7dh94nslf2fmb1ie.apps.googleusercontent.com"
                    render={renderProps => (
                        <button
                            onClick={() => {
                                setAuthLoad2(true)
                                renderProps.onClick()
                            }} disabled={renderProps.disabled}
                            type='button' className="p-3 mb-6 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                            <div className='mr-2'>
                                {
                                    authload2 ?
                                        "" : <img className='' src="images/GoogleLogo.svg" alt="Google logo" />
                                }

                            </div>
                            <div>
                                {
                                    authload2 ?
                                        <div className='spinner-page'></div> : "Continue with Google"
                                }
                            </div>
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
                        <button onClick={() => {
                            setAuthLoad(true)
                            renderProps.onClick()
                        }

                        }
                            type='button' className="p-3 mb-6 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                        font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                            <div className='mr-2'>
                                {
                                    authload ?
                                        "" : <img className='' src="images/FacebookLogoRegister.svg" alt="Facebook logo" />
                                }

                            </div>
                            <div>
                                {
                                    authload ?
                                        <div className='spinner-page'></div> : "Continue with Facebook"
                                }
                            </div>
                        </button>
                    )}
                />

                <p className='text-center text-black text-sm'>OR</p>

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
                        {/* password */}
                        <div className='mb-3'>
                            <div className='mb-1'><label htmlFor="password" className='text-didallabody text-sm'>Password</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="password"
                                    id='password'
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    placeholder='Enter your password'
                                    required
                                />
                                {errors.password && dirty.password && (
                                    <p className='text-red-500 text-xs'>{errors.password}</p>
                                )}
                            </div>
                        </div>

                        {responsegotten && <p className='text-red-400 mb-2 text-center text-sm'>{responsegotten}</p>}

                        {email.length === 0 || password.length === 0 || errors.email || errors.password
                            ? (<AuthButtonDisabled buttonText='Login' />) :
                            (<AuthButton buttonText='Login' showSpinner={showSpinner} />)}

                    </div>
                </form>

                <div className='text-center'>
                    <Link href="/forgotpassword"><a className='mb-1 block text-didalla text-sm'>Forgot Password</a></Link>
                    <Link href="/register"><a className='block text-didallabody text-sm'>Not yet a member? <span className='text-didalla'>Create your account now!</span></a></Link>
                </div>

            </div>
        </div>
    )
}

export default StepLoginDetails;

