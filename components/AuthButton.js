import React, { useState } from 'react';

const AuthButton = ({buttonText, showSpinner}) => {

    

    return ( 
        <div>
            <button type='submit' className="block p-3 text-center w-full bg-transparent rounded text-sm
            font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none disabled:opacity-50" >
                {/* {showSpinner ? <div className='text-center flex flex-row justify-center items-center'><img className="w-8 h-8" src="/images/loading.gif" alt="loading gif"/></div>:<span>{buttonText}</span>} */}
                {buttonText}
            </button>
        </div>
     );
}
 
export default AuthButton;