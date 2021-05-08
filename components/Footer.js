import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import {footerObjOne, footerObjTwo, footerObjThree} from './FooterData'

const Footer = () => {

    const footertext = "I'm in";

    return ( 
        <footer className='bg-didallablack pt-20 px-6 md:px-10 lg:px-16 text-white '>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 footer-box pb-12'>
                <div className='flex justify-start col-span-2 lg:col-span-1 mb-10 lg:mb-0'>
                    <div className='pl-0'>
                        <Link href="/"><a><img alt="didalla-logo" src='/images/logo-footer.svg' className='pl-0 h-10 w-216 md:h-12 md:w-40' /></a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:mt-0 md:pl-0">
                    <div><h2 className='font-black text-base mb-4'>Company</h2></div>
                    {footerObjOne.map(item =>{
                        return <div key={item.id} className='pt-6 text-sm'>
                                <Link href={item.url} className='block'>
                                    <a className='whitespace-nowrap block'>{item.value}</a>
                                </Link>
                            </div>
                    })}

                    <div className="lg:hidden flex flex-col mt-16 lg:mt-0 md:pl-0">
                        <div><h2 className='font-black text-base mb-4 whitespace-nowrap'>Get the App</h2></div>
                        <div className='flex flex-col items-start justify-start'>
                        <Link href="/"><a ><img className=' block mb-6 ' src="/images/Playstore.svg" alt="Playstore download"/></a></Link>
                        <Link href="/"><a ><img className=' block' src="/images/Appstore.svg" alt="Appstore download"/></a></Link>

                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col lg:mt-0 ">
                    <div><h2 className='font-black text-base mb-4'>Terms</h2></div>
                    {footerObjTwo.map(item =>{
                        return <div key={item.id} className='pt-6 text-sm'>
                                <Link href={item.url} className='block'>
                                    <a className='whitespace-nowrap block'>{item.value}</a>
                                </Link>
                            </div>
                    })}
                    <div className='mt-16 '>
                        <div><h2 className='font-black text-base mb-4'>Follow Us</h2></div>
                        <div className='flex flex-row justify-start'>
                            {footerObjThree.map(item =>{
                                return <div key={item.id} className='pr-3'>
                                    <Link href={item.url}>
                                        <a ><img src={`/images/${item.value}.svg`} alt='brand-logos'/></a>
                                    </Link>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col mt-10 lg:mt-0 pl-6 md:pl-0">
                    <div><h2 className='font-black text-base mb-4 whitespace-nowrap'>Get the App</h2></div>
                    <div className='flex flex-col items-start justify-start'>
                    <Link href="/"><a ><img className=' block mb-6 ' src="/images/Playstore.svg" alt="Playstore download"/></a></Link>
                    <Link href="/"><a ><img className=' block' src="/images/Appstore.svg" alt="Appstore download"/></a></Link>

                    </div>
                    
                </div>
            
            </div>
            <div className='py-12 text-sm text-center md:text-left'>
                <p>© Didalla, Inc. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;