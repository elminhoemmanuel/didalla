import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useForm from '../components/useForm'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import Link from 'next/link'

const Contact = () => {

    const [showSpinner , setShowSpinner] = useState(false);

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#ffffff");

    //Define the state schema used for validation
    const stateSchema = {
        email: { value: "", error: "" },
        fullname: { value: "", error: "" },
        message: { value: "", error: "" }
    }

    const stateValidatorSchema = {
        fullname: {
            required: true,
            validator: {
                func: value => /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error: "must contain atleast one character"
            }
        },
        message: {
            required: true,
            validator: {
                func: value => /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error: "must contain atleast one character"
            }
        },
        email: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "invalid email format"
            }
        }
    }

    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)
    const { email, fullname, message } = values;

    const handleSubmit = (e) =>{
        e.preventDefault()
        setShowSpinner(true)
    }

    return (
        <div className=''>
            <div className='border-b border-grayborder px-6 md:px-10 lg:px-16 pt-32 pb-10'>
                <h1 className='text-2xl md:text-5xl font-bold text-didallatitle mb-3'>Contact Our <br /> Awesome
                    Team
                </h1>
            </div>
            <div className='px-6 md:px-10 lg:px-16 py-10 grid md:grid-cols-5 gap-4 w-full'>
                <div className='col-span-3'>
                    <h1 className='text-xl font-bold text-didallatitle mb-3'>
                        Send us a message
                    </h1>

                    <form action="" className=''  onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="fullname" className='text-didallabody text-sm'>Full&nbsp;name*</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full md:w-3/5 focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='fullname'
                                    name="fullname"
                                    value={fullname}
                                    onChange={handleOnChange}
                                    placeholder='John Doe'
                                    required
                                />
                                {errors.fullname && dirty.fullname && (
                                    <p className='text-red-500 text-xs'>{errors.fullname}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='mb-2'><label htmlFor="email" className='text-didallabody text-sm'>Email Address*</label></div>
                            <div className='mb-2'>
                                <input className='p-3 border border-grayborder rounded w-full md:w-3/5 focus:outline-none focus:border-didalla'
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    id='email'
                                    placeholder='johndoe@gmail.com'
                                    required
                                />
                                {errors.email && dirty.email && (
                                    <p className='text-red-500 text-xs'>{errors.email}</p>
                                )}
                            </div>

                        </div>

                        <div className='mb-4'>
                            <div className='mb-2'><label htmlFor="message" className='text-didallabody text-sm'>Tell us how we can help*</label></div>
                            <div>
                                <textarea rows='3' type="text" name='message' id='message' className='py-3 pl-3 pr-5 border border-grayborder rounded w-full md:w-3/5 focus:outline-none focus:border-didalla'
                                    value={message} onChange={handleOnChange}
                                ></textarea>
                                {errors.message && dirty.message && (
                                    <p className='text-red-500 text-xs'>{errors.message}</p>
                                )}
                            </div>

                        </div>

                        {fullname.length === 0 || message.length === 0 || email.length === 0 || errors.fullname || errors.message || errors.email
                            ?
                            (
                                <button type='submit' className="block py-3 px-8 text-center bg-transparent rounded text-sm
                                    font-bold bg-didalla text-white hover:bg-green-600 pointer-events-none opacity-50" >
                                    {showSpinner ? <BeatLoader color={color} loading={showSpinner} css={override} size={20} /> : <span>Send</span>}
                                </button>
                            ) :
                            (
                                <button type='submit' className="block py-3 px-8 text-center bg-transparent rounded text-sm
                                    font-bold bg-didalla text-white hover:bg-green-600 focus:outline-none" >
                                    {showSpinner ? <BeatLoader color={color} loading={showSpinner} css={override} size={20} /> : <span>Send</span>}
                                </button>
                            )}

                    </form>

                </div>

                <div className='col-span-2'>
                    <div className='mb-6'>
                        <h1 className='text-lg font-bold text-didallatitle mb-3'>
                            Reach us by email
                        </h1>
                        <Link href='mailto:hello@didalla.com'>
                            <a className='whitespace-nowrap'>hello@didalla.com&nbsp;<img className='w-5 h-5 inline' src='/images/ContactLink.svg' alt='contact page link icon'/></a>
                        </Link>
                    </div>

                    <div>
                        <h1 className='text-lg font-bold text-didallatitle mb-3'>
                            Places to find <span className='text-didalla'>Didalla</span>
                        </h1>
                        <Link href='mailto:hello@didalla.com'>
                            <a className='whitespace-nowrap block mb-2'><img className='w-5 h-5 inline' src='/images/InstagramLogoBlack.svg' alt='contact page instagram link icon'/>&nbsp; Instagram</a>
                        </Link>
                        <Link href='mailto:hello@didalla.com'>
                            <a className='whitespace-nowrap block mb-2'><img className='w-5 h-5 inline' src='/images/TwitterLogoBlack.svg' alt='contact page twitter link icon'/>&nbsp; Twitter</a>
                        </Link>
                        <Link href='mailto:hello@didalla.com'>
                            <a className='whitespace-nowrap block mb-2'><img className='w-5 h-5 inline' src='/images/LinkedInLogoBlack.svg' alt='contact page linkedin link icon'/>&nbsp; Linkedin</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;