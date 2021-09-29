import React, { useState, useEffect } from 'react'
import DashHeadings from './DashHeadings'
import { notifyData } from "./VendorFeedData"
import { useSelector, useDispatch } from 'react-redux'
import { getNotifs } from "../redux/actions/vendorFeed";
import SpinnerPage from './SpinnerPage';
import { TOGGLE_NOTIF } from "../redux/types";

const Notifications = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const { notifs } = useSelector(state => state.vendorFeed);
    const { user } = useSelector(state => state.auth);
    console.log(notifs)


    const getFewNotifs = () => {
        for (let i = 0; i < notifs.length; i++) {
            return <div key={notifs[i].id} className="border-b border-gray-200">
                <div className="p-2 flex items-center">
                    <div className="w-6 h-6 mr-3">
                        {
                            notifs[i].type === "error" &&
                            <div><img src="/images/notifybad.svg" alt="notification icon" /></div>
                        }
                        {
                            notifs[i].type === "success" &&
                            <div><img src="/images/notifygood.svg" alt="notification icon" /></div>
                        }
                        {
                            notifs[i].type === "info" &&
                            <div><img src="/images/notifyactivity.svg" alt="notification icon" /></div>
                        }
                    </div>
                    <div>
                        <p className="text-sm text-didallabody">{notifs[i].description}</p>

                    </div>
                </div>
                <button className="block text-xs text-didalla focus:outline-none p-1" > mark as read</button>
            </div>

        }
    }

    useEffect(() => {
        dispatch(getNotifs(user.id, () => { setLoading(false) }))
    }, [])

    return (
        <div>
            {
                loading ?
                    <SpinnerPage />
                    :
                    <div>
                        {
                            notifs[0] ?
                                <div className="mb-4">

                                    <DashHeadings heading="Notifications" btnClicked={() => {dispatch({ type: TOGGLE_NOTIF }) }} />

                                    <div>
                                        {getFewNotifs()}

                                    </div>
                                </div> :
                                <div className="text-sm">
                                    {
                                        notifs[0] === undefined ?
                                            "No notifications" :
                                            "Could not load notifications"
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Notifications
