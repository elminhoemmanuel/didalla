import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotifs, markNotif } from "../redux/actions/vendorFeed";
import SpinnerPage from './SpinnerPage';
import { TOGGLE_NOTIF } from "../redux/types";

const NotifsModal = () => {

    const dispatch = useDispatch();
    const { notifs , notifViewed } = useSelector(state => state.vendorFeed);
    const { user } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(false);

    const readNotif = (id) => {
        setLoading(true)
        dispatch(markNotif(id, () => { setLoading(false) }),)
    }

    useEffect(() => {
        dispatch(getNotifs(user.id, () => { }))
    }, [notifViewed])

    return (
        <div className="top-0 left-0 absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20">
            <div className="modal-box fixed w-4/5 lg:w-2/5 h-full bg-white border border-gray-100 overflow-y-auto rounded">
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={() => { dispatch({ type: TOGGLE_NOTIF }) }}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Notifications</h1></div>
                    </div>
                </div>
                <div className='px-6 py-2 '>
                    {
                        loading &&
                        <SpinnerPage />
                    }
                </div>
                <div className='px-6 py-2 '>
                    {
                        notifs[0] ?
                            <div>
                                {
                                    notifs.map(item => (
                                        <div key={item.id} className="border-b border-gray-200">
                                            <div className="p-2 flex items-center">
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
                                                    <p className="text-sm text-didallabody">{item.description}</p>

                                                </div>
                                            </div>
                                            <button onClick={() => { readNotif(item.id) }}
                                                className="block text-xs text-didalla focus:outline-none p-1" > mark as read</button>
                                        </div>
                                    ))
                                }
                            </div> : "No notifications present"
                    }
                </div>
            </div>

        </div>
    )
}

export default NotifsModal
