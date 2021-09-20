import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PriBtn from './PriBtn';
import { useRouter } from "next/router"

const DashCta = () => {

    const { first_name, last_name, profile_url } = useSelector(state => state.auth.user);
    const router = useRouter()

    return (
        <div className="rounded border border-gray-200 p-3 ">
            <div className="flex items-center justify-between mb-3">
                <div className='hidden md:block mr-3 pic-box'>
                    <div>
                        {
                            profile_url !== undefined ?
                                <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                    <img src={profile_url} alt="user avatar" />
                                </div> :
                                <div className='cursor-pointer h-10 w-10 rounded-full bg-didalla text-white text-lg font-bold text-center pt-1'>
                                    {first_name[0]}{last_name[0]}
                                </div>
                        }
                    </div>
                </div>
                <div className="border border-gray-200 p-3 rounded text-box">
                    {
                        router.pathname.includes("vendor") && <p className="text-sm">Ready to promote your business?</p>
                    }
                    {
                        router.pathname.includes("booster") && <p className="text-sm">Earn money promoting businesses</p>
                    }

                </div>
            </div>

            <div className="flex items-center justify-end">
                {
                    router.pathname.includes("vendor") &&
                    <PriBtn
                        btnType="button"
                        clicked={() => { }}
                        btnText="Post your campaign"
                        addStyle="px-3 md:px-4"
                    />
                }

                {
                    router.pathname.includes("booster") &&
                    <PriBtn
                        btnType="button"
                        clicked={() => { }}
                        btnText="Post your offering"
                        addStyle="px-3 md:px-4"
                    />
                }

            </div>
        </div>
    )
}

export default DashCta
