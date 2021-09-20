import React from 'react'
import DashHeadings from './DashHeadings'
import { notifyData } from "./VendorFeedData"

const Notifications = () => {
    return (
        <div>
            <div className="mb-4">

                <DashHeadings heading="Notifications" btnClicked={()=>{}} />

                <div>
                    {
                        notifyData.map(item => (
                            <div key={item.id} className="p-3 border-b border-gray-200 flex items-center">
                                <div className="w-6 h-6 mr-3">
                                    {
                                        item.type === "error" &&
                                        <div><img src="/images/notifybad.svg" alt="notification icon" /></div>
                                    }
                                    {
                                        item.type === "success" &&
                                        <div><img src="/images/notifygood.svg" alt="notification icon" /></div>
                                    }
                                    {
                                        item.type === "info" &&
                                        <div><img src="/images/notifyactivity.svg" alt="notification icon" /></div>
                                    }
                                </div>
                                <div>
                                    <p className="text-sm text-didallabody">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications
