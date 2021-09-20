import React from 'react'

const TextBtn = ({ btnType , btnText, addStyle, clicked }) => {

    let styling = `bg-transparent text-didalla py-2 focus:outline-none whitespace-nowrap ${addStyle}`

    return (
        <button onClick={clicked} type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default TextBtn
