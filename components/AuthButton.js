import React, { useState } from 'react';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const AuthButton = ({buttonText, showSpinner}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#ffffff");

    return ( 
        <div>
            <button type='submit' className="block p-3 text-center w-full bg-transparent rounded text-sm
            font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none disabled:opacity-50" >
                {showSpinner ? <BeatLoader color={color}  loading={showSpinner} css={override} size={20} />:<span>{buttonText}</span>}
                {/* {buttonText} */}
            </button>
        </div>
     );
}
 
export default AuthButton;