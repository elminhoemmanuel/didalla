import React , {useState, useEffect} from 'react'

const CampaignPlatforms = ({
    handleNext,
    handleBack,
    obtainPlatform,
    brandPlatforms
}) => {

    const [facebook, setfacebook] = useState(false)
    const [instagram, setinstagram] = useState(false)
    const [twitter, settwitter] = useState(false)
    const [linkedIn, setlinkedIn] = useState(false)
    const [youtube, setyoutube] = useState(false)

    const [anyclicked, setAnyClicked] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        obtainPlatform('facebook',facebook);
        obtainPlatform('instagram',instagram)
        obtainPlatform('twitter',twitter)
        obtainPlatform('linkedIn',linkedIn)
        obtainPlatform('youtube',youtube)
        console.log(brandPlatforms)
        handleNext();
    }

    useEffect(() => {obtainPlatform('facebook',facebook)},[facebook])
    useEffect(() => {obtainPlatform('instagram',instagram)},[instagram])
    useEffect(() => {obtainPlatform('twitter',twitter)},[twitter])
    useEffect(() => {obtainPlatform('linkedIn',linkedIn)},[linkedIn])
    useEffect(() => {obtainPlatform('youtube',youtube)},[youtube])

    return (
        <div className='w-3/4 md:w-1/2 lg:w-2/6 mx-auto'>
            <div className='mb-3'>
                <img className='' src="/images/Platforms.svg" alt="Platforms image"/>
            </div>
            <p className='text-xl text-black font-bold pb-2 border-b border-gray-200 mb-8'>Platforms</p>

            <form action="" onSubmit={onSubmit}>
                <div className='mb-5'>
                    <div className='mb-3'>
                        <label htmlFor="brandbudget" className='text-black text-base font-bold'>Social Networks</label>
                        <p className='text-sm text-didallabody'>Which social networking platforms would you be using to promote this campaign</p>
                    </div>
                    
                </div>  

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
                    <div className='border border-gray-200 rounded col-span-1 p-2'>
                        <div className='flex item-center justify-between'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div><img className='w-5 h-5 mr-2' src="/images/FacebookLogoRegister.svg" alt="facebook logo"/></div>
                                <div><label htmlFor="facebook">Facebook</label></div>
                            </div>
                                <div className='pt-0.5'><input type="checkbox" name="facebook" id="facebook"
                                onClick={()=>{setfacebook(!facebook);setAnyClicked(true)}}
                                /></div>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded col-span-1 p-2'>
                        <div className='flex item-center justify-between'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div><img className='w-5 h-5 mr-2' src="/images/InstagramLogoBlack.svg" alt="instagram logo"/></div>
                                <div><label htmlFor="instagram">Instagram</label></div>
                            </div>
                                <div className='pt-0.5'><input type="checkbox" name="instagram" id="instagram"
                                onClick={()=>{setinstagram(!instagram);setAnyClicked(true)}}
                                /></div>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded col-span-1 p-2'>
                        <div className='flex item-center justify-between'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div><img className='w-5 h-5 mr-2' src="/images/TwitterLogoBlack.svg" alt="twitter logo"/></div>
                                <div><label htmlFor="twitter">Twitter</label></div>
                            </div>
                                <div className='pt-0.5'><input type="checkbox" name="twitter" id="twitter"
                                onClick={()=>{settwitter(!twitter);setAnyClicked(true)}}
                                /></div>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded col-span-1 p-2'>
                        <div className='flex item-center justify-between'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div><img className='w-5 h-5 mr-2' src="/images/YoutubeLogoBlack.svg" alt="Youtube logo"/></div>
                                <div><label htmlFor="youtube">Youtube</label></div>
                            </div>
                                <div className='pt-0.5'><input type="checkbox" name="youtube" id="youtube"
                                onClick={()=>{setyoutube(!youtube);setAnyClicked(true)}}
                                /></div>
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded col-span-1 p-2'>
                        <div className='flex item-center justify-between'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div><img className='w-5 h-5 mr-2' src="/images/LinkedInLogoBlack.svg" alt="LinkedIn logo"/></div>
                                <div><label htmlFor="linkedIn">LinkedIn</label></div>
                            </div>
                                <div className='pt-0.5'><input type="checkbox" name="linkedIn" id="linkedIn"
                                onClick={()=>{setlinkedIn(!linkedIn);setAnyClicked(true)}}
                                /></div>
                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col-reverse md:flex-row items-center justify-start md:justify-end
                '>

                    <div>
                        <button type='button' className="block w-full md:w-auto py-3 px-12 text-center bg-transparent text-didalla rounded 
                        font-bold hover:text-green-600  focus:outline-none mr-2 "  
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    </div>

                    {anyclicked !== true
                        ? (<div className='flex items-center justify-end'>
                        <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next
                        </button>
                    </div>) : 
                        (<div className='flex items-center justify-end'>
                        <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                            font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                            Next
                        </button>
                    </div>)
                }

                </div>
                
            </form>

        </div>
    )
}

export default CampaignPlatforms
