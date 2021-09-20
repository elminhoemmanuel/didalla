import React from 'react'
import DashCta from './DashCta'
import DashSearch from './DashSearch'
import Notifications from './Notifications'
import RecentCampaigns from './RecentCampaigns'
import VendorDashNav from './VendorDashNav'
import VendorFeed from './VendorFeed'

const VendorDashHome = () => {

    return (
        <div>
            <VendorDashNav
                homeColour='text-didalla'
                campaignColour=""
                creatorsColour=""
                messagesColour=""
            />
            <div className="pt-28 grid grid-cols-8 gap-7 px-6 md:px-10 lg:px-10">
                <div className="col-span-8 md:col-span-5 left-side">
                    <div className="mb-3">
                        <button className="text-sm block w-full bg-alertbg text-didalla py-2 rounded focus:outline-none">
                            Complete your account setup <span className="hidden md:inline">to access the full features of Didalla</span>. <span className="underline">Edit Profile</span>
                        </button>
                    </div>
                    <DashCta />
                    <VendorFeed />
                </div>
                <div className="hidden md:block md:col-span-3 right-side ">
                    <DashSearch />
                    <Notifications />
                    <RecentCampaigns />
                </div>
            </div>
        </div>
    )
}

export default VendorDashHome
