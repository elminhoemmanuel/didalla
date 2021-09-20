import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PriBtn from './PriBtn';
import { VscDebugStackframeDot } from "react-icons/vsc"

const VendorFeedCard = ({ data }) => {

    const { first_name, last_name, profile_url } = useSelector(state => state.auth.user);

    return (
        <div className="pb-5 border-b border-gray-200 mb-5">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <div className="mr-3">
                        {
                            data.profile_url !== undefined ?
                                <div className='cursor-pointer h-12 w-12 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                    <img src={data.profile_url} alt="user avatar" />
                                </div> :
                                <div className='cursor-pointer h-12 w-12 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                    {first_name[0]}{last_name[0]}
                                </div>
                        }
                    </div>
                    <div>
                        <div><p className="text-didallatitle text-base font-bold">{data.name}</p></div>
                        <div className="flex items-center">
                            {
                                data.facebook &&
                                <div className="flex items-center mr-3">
                                    <div className="h-6 w-6"><img className="h-6 w-6" src="/images/FacebookLogoGreen.svg" alt="Facebook Icon" /></div>
                                    <div><p className="text-sm hidden md:block">{data.facebook} followers</p></div>
                                </div>
                            }
                            {
                                data.youtube &&
                                <div className="flex items-center mr-3">
                                    <div className="h-6 w-6"><img className="h-6 w-6" src="/images/YoutubeLogoGreen.svg" alt="youtube Icon" /></div>
                                    <div><p className="text-sm hidden md:block">{data.youtube} subscribers</p></div>
                                </div>
                            }
                            {
                                data.twitter &&
                                <div className="flex items-center mr-3">
                                    <div className="h-6 w-6"><img className="h-6 w-6" src="/images/TwitterLogoGreen.svg" alt="Twitter Icon" /></div>
                                    <div><p className="text-sm hidden md:block">{data.twitter} followers</p></div>
                                </div>
                            }
                            <div><p className="text-sm">+2 others</p></div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <PriBtn
                        btnType="button"
                        clicked={() => { }}
                        btnText="Send offer"
                        addStyle="px-3"
                    />
                </div>
            </div>

            <div className="flex items-center">
                <div className="mr-3 hidden md:block">
                    <div className="h-12 w-12"></div>
                </div>
                <div className="mb-3">
                    <p className="text-sm text-didallabody">{data.bio}</p>
                </div>
            </div>

            <div className="flex items-center">
                <div className="mr-3 hidden md:block">
                    <div className="h-12 w-12"></div>
                </div>
                <div className="flex items-center flex-wrap">

                    <div className="flex items-center">
                        <div><p className="text-sm mr-2">Starting at <span className="font-bold">${data.rate}</span></p></div>
                        <div className="mr-2">
                            <VscDebugStackframeDot className="w-3 h-3" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            <div className="h-6 w-6"><img src="/images/star.svg" alt="rating icon" /></div>
                            <div className=""><p className="text-sm ">{data.rating}</p></div>
                        </div>
                        <div className="mr-2">
                            <VscDebugStackframeDot className="w-3 h-3" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="h-6 w-6"><img src="/images/Location.svg" alt="Location icon" /></div>
                            <div className=""><p className="text-sm ">{data.city}, {data.country}</p></div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="md:hidden mt-5">
                <div className="">
                    <PriBtn
                        btnType="button"
                        clicked={() => { }}
                        btnText="Send offer"
                        addStyle="px-3 w-full block"
                    />
                </div>
            </div>


        </div>
    )
}

export default VendorFeedCard
