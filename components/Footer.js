import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import {footerObjOne, footerObjTwo, footerObjThree} from './FooterData'

const Footer = () => {

    const footertext = "I'm in";

    return ( 
        <footer className='bg-didallablack pt-20 px-6 md:px-10 lg:px-16 text-white'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 footer-box pb-12'>
                <div className='flex items-center'>
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="didalla-logo" src='/images/logo-footer.svg' className='pl-0 h-10 w-216 md:h-12 md:w-40' /></a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col mt-28 md:mt-0">
                    <div><h2 className='font-black text-base mb-4'>Company</h2></div>
                    {footerObjOne.map(item =>{
                        return <div key={item.id} className='pt-6 text-sm'>
                                <Link href="/" className='block'>
                                    <a className='whitespace-nowrap block'>{item.value}</a>
                                </Link>
                            </div>
                    })}
                </div>
                <div className="flex flex-col mt-28 lg:mt-0">
                    <div><h2 className='font-black text-base mb-4'>Terms</h2></div>
                    {footerObjTwo.map(item =>{
                        return <div key={item.id} className='pt-6 text-sm'>
                                <Link href="/" className='block'>
                                    <a className='whitespace-nowrap block'>{item.value}</a>
                                </Link>
                            </div>
                    })}
                    <div className='mt-16'>
                        <div><h2 className='font-black text-base mb-4'>Follow Us</h2></div>
                        <div className='flex flex-row'>
                            {footerObjThree.map(item =>{
                                return <div key={item.id} className='pr-3'>
                                    <Link href="/">
                                        <a ><img src={`/images/${item.value}.svg`} alt='brand-logos'/></a>
                                    </Link>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-28 lg:mt-0">
                    <div><h2 className='font-black text-base mb-4 whitespace-nowrap'>Get the latest Didalla Updates</h2></div>
                    <form className='flex flex-col md:flex-row pt-6'>
                        <div className='pr-0 md:pr-4 mb-3 md:mb-0'>
                            <input type="email" className='rounded p-3 border border-white
                            focus:border-didalla focus:shadow focus:outline-none bg-transparent
                            ' placeholder='Your Email'/>
                        </div>
                        <div className='mb-3 md:mb-0'>
                            <Link href="/">
                                <button className='whitespace-nowrap p-3 bg-didalla
                                border border-didalla rounded text-white hover:bg-green-600 hover:border-green-600
                                focus:outline-none'>I'm&nbsp;in</button>
                            </Link>

                        </div>

                    </form>
                    
                </div>
            
            </div>
            <div className='py-12 text-sm'>
                <p>© Didalla, Inc. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;