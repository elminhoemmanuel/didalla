import React from 'react'
import DashHeadings from './DashHeadings'
import RecentCampCard from './RecentCampCard'
import { myCampaigns  } from './VendorFeedData'

const RecentCampaigns = () => {
    return (
        <div className="mb-3">
            <DashHeadings heading="Recent Campaigns" btnClicked={()=>{}} />
            <div>
                {
                    myCampaigns.map(item => (
                        <RecentCampCard data={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentCampaigns
