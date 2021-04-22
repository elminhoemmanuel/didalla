import React, {useState} from 'react'
import Link from 'next/link';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const StepComplete = ({
    responsegotten,
    isloading,
    showSpinner,
    handleSetActiveStep
}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    return (
        <div >
            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto text-center' >
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Welcome to <span className='text-didalla'>Didalla</span></h1> 
                    </div>

                    {isloading ? null :<div className=' mb-4 flex justify-center items-center'>
                        {
                          responsegotten === "" || responsegotten === "Something went wrong, ensure that your email is not already taken" ? 
                          <svg className="w-16 h-16 text-didalla" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg> 
                          :
                          <svg className="w-16 h-16 text-didalla" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        }
                    </div>}

                    {
                        isloading ? <BeatLoader color={color}  loading={showSpinner} css={override} size={40} /> : <div>
                            {responsegotten}
                        </div>
                    }

                    {responsegotten === "Your account has been successfully created, please check your email to verify your email and then login" ? <div><Link href="/login"><a className='text-didalla'>login here</a></Link></div> : null}      
                    {responsegotten === "Something went wrong, ensure that your email is not already taken" ? <div>Please try again <Link href="/register"><a onClick={handleSetActiveStep} className='text-didalla'>here</a></Link></div> : null}      
                    
            </div>
        </div>
    )
}

export default StepComplete
