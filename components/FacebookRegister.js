import React, { useState, useEffect } from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';



const FacebookRegister = ({ facebookProfile }) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    const router = useRouter()
    let [color, setColor] = useState("#FFFFFF");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();


    const AuthSubmit = () => {

        setIsSubmitting(!isSubmitting);
        setsuccessMsg('')
        seterrMsg('')

        const formdata = new FormData();
        formdata.append("email", googleProfile.email)
        formdata.append("first_name", googleProfile.givenName)
        formdata.append("last_name", googleProfile.familyName)
        formdata.append("role", userRole)
        formdata.append("provider", "google")


        axios.post('https://api.didalla.com/api/social_login', formdata)
            .then((response) => {
                setIsSubmitting(false)
                console.log(response);
                setsuccessMsg('Successful')
                localStorage.setItem('userToken', response.data.access_token)
                localStorage.setItem('userFirstName', response.data.user.first_name)
                localStorage.setItem('userLastName', response.data.user.last_name)
                router.push(`/dashboard/${userRole}`)

            }, (error) => {
                setIsSubmitting(false)
                seterrMsg('Something went wrong, try again')
                console.log(error);

            });
    }


    return (
        <div className='fixed top-0 bottom-2 py-10 md:px-32 px-3 w-full bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-50 '>

            <div className='modal-box pt-10 w-full bg-white border border-gray-100 overflow-y-auto'>
                {
                    facebookProfile.error || facebookProfile.email === undefined ?
                        <div className='flex justify-center items-center px-20 py-32'>
                            <div className=''>There seems to be a problem with your internet connection/Facebook account. Ensure you have a good internet connect and that your account is verified and try again.
                                <Link href="/register"><a className='text-didalla text-sm'>Try again</a></Link>
                            </div>
                        </div> :
                        <div>
                            <div className='mb-5 text-center'>
                                <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Welcome to <span className='text-didalla'>Didalla</span></h1>
                                <p className='text-xs text-didallabody mb-3'>How do you want to use our platform?</p>
                            </div>

                            <div className='mt-6'>
                                <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-80 md:w-1/2 lg:w-3/4 mx-auto'>

                                    <button onClick={() => setUserRole('vendor')}
                                        type='button'
                                        className={
                                            userRole === 'vendor' ?
                                                'focus:outline-none bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-didalla hover:bg-gray-50 hover:border-didalla' :
                                                'focus:outline-none bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-gray-300 hover:bg-gray-50 hover:border-didalla'
                                        }>
                                        <div className='flex justify-left items-center  mb-2'><img src="images/microphone.svg" alt="microphone image" /></div>
                                        <div className='text-left  font-bold text-base text-didallatitle mb-1'>Book a content <br />creator</div>
                                        <div className='text-left  text-sm text-didallabody mb-2'>Get reach for your brand</div>
                                    </button>



                                    <button onClick={() => setUserRole('booster')}
                                        type='button'
                                        className={
                                            userRole === 'booster' ?
                                                'focus:outline-none bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-didalla hover:bg-gray-50 hover:border-didalla' :
                                                'focus:outline-none bg-white block shadow-2xl px-10 py-32 h-auto md:h-60 md:py-6 mt-4 md:mt-0 rounded border border-gray-300 hover:bg-gray-50 hover:border-didalla'
                                        }>
                                        <div className='flex justify-left items-center  mb-2'><img src="images/media.svg" alt="microphone image" /></div>
                                        <div className='text-left  font-bold text-base text-didallatitle mb-1'>Earn as a content <br />creator</div>
                                        <div className='text-left  text-sm text-didallabody mb-2'>Earn money creating content</div>
                                    </button>

                                </div>
                            </div>

                            <div className='mt-8 text-center mx-auto w-2/5'>
                                {
                                    userRole === '' ?
                                        <button type='button' className='focus:outline-none rounded bg-didalla text-white text-center px-5 py-3 hover:bg-green-600 w-full pointer-events-none opacity-50'
                                        >
                                            {isSubmitting ? <BeatLoader color={color} loading={isSubmitting} css={override} size={15} /> : <span>Continue</span>}
                                        </button> :

                                        <button type='button' className='focus:outline-none rounded bg-didalla text-white text-center px-5 py-3 hover:bg-green-600 w-full'
                                        // onClick={AuthSubmit}
                                        >
                                            {isSubmitting ? <BeatLoader color={color} loading={isSubmitting} css={override} size={15} /> : <span>Continue</span>}
                                        </button>
                                }
                            </div>

                            <div className='flex justify-center mt-3'>
                                {
                                    isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div>
                                }
                            </div>
                            <div className='flex justify-center mt-3'>
                                {
                                    successMsg && <div className='text-sm text-didalla'>Successful</div>
                                }
                            </div>
                        </div>
                }


            </div>




        </div>
    )
}

export default FacebookRegister
