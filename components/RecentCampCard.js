import React from 'react'
import { VscDebugStackframeDot } from "react-icons/vsc"

const RecentCampCard = ({data}) => {
    return (
        <div className="pb-5 border-b border-gray-200 mb-3">
            <div><p className="text-sm font-bold text-didallatitle mb-3">{data.heading}</p></div>
            <div><p className="text-sm text-didallabody mb-3">{data.text}</p></div>
            <div className="flex items-center justify-between">
                <div>
                    <p>
                        Starting at <span className="font-bold">${data.budget}</span>&nbsp;&nbsp;
                        <VscDebugStackframeDot className="w-3 h-3 inline" />&nbsp;&nbsp; {data.offers}offers
                    </p>
                </div>
                <div>
                    {
                        data.status === "progress"  &&
                        <p className='text-progresstext bg-progressbg py-1 px-2 rounded-full'>in progress</p>
                    }
                    {
                        data.status === "completed"  &&
                        <p className='text-didalla bg-green-200 py-1 px-2 rounded-full'>in progress</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentCampCard
