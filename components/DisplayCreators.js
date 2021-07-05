import React , {useState} from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from 'next/router'

const DisplayCreators = ({
    handleBack,
    boostersArray,
    isSubmitting
}) => {

    //code for spinner
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");
    
    const router = useRouter();

    return (
        <div className='px-6 md:px-10 lg:px-16'>
            
            <p className='text-xl text-black font-bold pb-2 '>Find creators</p>
            <p className='text-sm text-didallabody border-b border-gray-200 pb-4 mb-12'>Here is a list of creators from our pool of creators that match your requirements</p>
            
            {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={20} />:
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    boostersArray.map(item =>(
                        <div className='border border-grayborder p-4 rounded' key={item.id}>
                            <div>
                                <img className='h-40 w-full' src={item.photo_url} alt="creator avatar"/>
                            </div>
                            <div className='flex items-center justify-between mt-1'>
                                <div>
                                    <h1 className='text-didallablack text-base md:text-xl font-bold'>{item.facebook}</h1>
                                </div>
                                <div>
                                    <p className='text-didallabody'>{item.basic_plan}-{item.premium_plan}</p>
                                </div>

                            </div>
                            <div>
                                <p className='text-didallabody mb-2'>{item.city}-{item.country}</p>
                                <p className='text-didallabody mb-2'>{item.bio}</p>
                            </div>

                            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-2 mb-3'>
                                {
                                    item.facebook && <div className='flex items-center '>
                                    <div className=' w-1/5'>
                                        <img className='w-16' src="/images/FacebookLogoRegister.svg" alt="facebook logo"/>
                                    </div>
                                    <div className='w-4/5 pl-4'>
                                        <p className='text-didallablack mb-1 text-sm font-bold'>500<br/>
                                            <span className='text-didallabody'>followers</span>
                                        </p>
                                    </div>

                                </div>
                                }

                                {
                                    item.twitter && <div className='flex items-center '>
                                    <div className='w-1/5'>
                                        <img className='w-16' src="/images/TwitterLogoBlack.svg" alt="twitter logo"/>
                                    </div>
                                    <div className='w-4/5 pl-4'>
                                        <p className='text-didallablack mb-1 text-sm font-bold'>500<br/>
                                            <span className='text-didallabody'>followers</span>
                                        </p>
                                    </div>

                                </div>
                                }
                                
                                {
                                    item.youtube && <div className='flex items-center '>
                                    <div className='w-1/5'>
                                        <img className='w-16' src="/images/YoutubeLogoBlack.svg" alt="youtube logo"/>
                                    </div>
                                    <div className='w-4/5 pl-4'>
                                        <p className='text-didallablack mb-1 text-sm font-bold'>500<br/>
                                            <span className='text-didallabody'>subscribers</span>
                                        </p>
                                    </div>

                                </div>
                                }

                            </div>

                            <div className='flex items-center flex-nowrap'>

                                <div className='flex items-center justify-end'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6  text-center bg-didalla rounded border border-didalla
                                        font-bold text-white hover:bg-green-600 focus:outline-none text-xs md:text-sm"
                                        onClick={()=>{
                                            router.push('/login')
                                        }}
                                        >
                                        Send offer
                                    </button>
                                </div>

                                <div className='ml-2'>
                                    <button type='button' className="block w-full md:w-auto py-3 px-6 text-center bg-transparent text-didalla rounded 
                                    font-bold hover:text-green-600  focus:outline-none  text-sm md:text-base"  
                                    onClick={()=>{
                                        router.push('/login')
                                    }}
                                    >
                                        View profile
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))
                }
                
            </div>
            }

            

            <div className='flex flex-row items-center justify-end mt-12 pb-12'>

                    <div className='flex items-center justify-end'>
                        <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none text-sm">
                            Continue to dashboard
                        </button>
                    </div>

                </div>

        </div>
        
    )
}

export default DisplayCreators
