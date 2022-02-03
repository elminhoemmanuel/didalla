import React, { useEffect, useState } from 'react'
import DashCta from './DashCta'
import DashSearch from './DashSearch'
import Notifications from './Notifications'
import RecentCampaigns from './RecentCampaigns'
import VendorDashNav from './VendorDashNav'
import VendorFeed from './VendorFeed';
import { useSelector, useDispatch } from 'react-redux'
import NotifsModal from './NotifsModal'
import StartCampaign from './StartCampaign'

const VendorDashHome = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { toggleNotif } = useSelector(state => state.vendorFeed);
    const { showStartCamp } = useSelector(state => state.vendorCampaigns);
    console.log(toggleNotif);

    const controlScrollbar = () => {
        if (toggleNotif || showStartCamp) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'visible';
        }
    }

    window.addEventListener("click", controlScrollbar);

    return (
        <div className="relative">
            <VendorDashNav
                homeColour='text-didalla'
                campaignColour=""
                creatorsColour=""
                messagesColour=""
            />

            <div>

                <div className="pt-28 grid grid-cols-8 gap-7 px-6 md:px-10 lg:px-10">
                    <div className="col-span-8 md:col-span-5 left-side">
                        {
                            !user.reg_completed ?
                                <div className="mb-3">
                                    <button className="text-sm block w-full bg-alertbg text-didalla py-2 rounded focus:outline-none">
                                        Complete your account setup <span className="hidden md:inline">to access the full features of Didalla</span>. <span className="underline">Edit Profile</span>
                                    </button>
                                </div> : ""
                        }
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

            {/* Modals */}
            { toggleNotif && <NotifsModal /> }
            { showStartCamp && <StartCampaign /> }
        </div>
    )
}

export default VendorDashHome
