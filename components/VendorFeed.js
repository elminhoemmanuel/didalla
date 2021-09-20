import React, {useEffect , useState} from 'react'
import DashMobileSearch from './DashMobileSearch'
import DashSort from './DashSort'
import { useSelector, useDispatch } from 'react-redux'
import { SHOW_FILTER } from '../redux/types';
import { vendorFeed } from "./VendorFeedData"
import VendorFeedCard from './VendorFeedCard';
import { getFeedBoosters } from "../redux/actions/vendorFeed";

const VendorFeed = () => {

    const dispatch = useDispatch();
    const { loading, error, boosters, sorter } = useSelector(state => state.vendorFeed);
    // console.log(sorter);
    

    // useEffect(() => {
        
    // }, [sorter])

    return (
        <div className="mt-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-didallatitle text-lg md:text-xl font-bold">My Feed</h1>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => {
                            dispatch({
                                type: SHOW_FILTER,
                            })
                        }}
                        className='flex items-center focus:outline-none p-2 border border-gray-200 rounded'>
                        <div className='mr-2'><img src="/images/Funnel.svg" alt="funnel icon" /></div>
                        <div><p className="text-sm">Filter</p></div>
                    </button>
                </div>
            </div>
            <DashMobileSearch />
            <DashSort />
            <div className="my-3">
                {
                    boosters.map(item => (
                        <VendorFeedCard key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default VendorFeed
