import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked }) => {

    let styling = `rounded bg-didalla hover:bg-green-600 text-white py-2 focus:outline-none whitespace-nowrap ${addStyle}`

    return (
        <button onClick={clicked} type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
