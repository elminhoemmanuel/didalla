import React from 'react'
import DashMobileSearch from './DashMobileSearch'
import DashSort from './DashSort'
import { useSelector, useDispatch } from 'react-redux'
import { SHOW_FILTER } from '../redux/types';
import { boosterFeed } from "./VendorFeedData"
import BoosterFeedCard from './BoosterFeedCard';

const BoosterFeed = () => {

    const dispatch = useDispatch();
    

    return (
        <div className="mt-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-didallatitle text-lg md:text-xl font-bold">My Feed</h1>
                </div>
                
            </div>
            
            <div className="my-3">
                {
                   boosterFeed.map(item => (
                        <BoosterFeedCard key={item.id} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default BoosterFeed
