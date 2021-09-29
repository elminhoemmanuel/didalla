import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSorter, getFeedBoosters, resetSorter } from "../redux/actions/vendorFeed";
import SpinnerPage from './SpinnerPage';

const DashSort = () => {

    const dispatch = useDispatch()
    const { showFilter, loading, error, boosters, sorter } = useSelector(state => state.vendorFeed);
    // console.log(sorter)
    const { loadCountries, errorCountries, countries } = useSelector(state => state.misc);

    const [sorterValues, setSorterValues] = useState({});
    const [sortFields, setSortFields] = useState({
        platform: "all",
        location: "all",
        topic: "all",
        budget: "all"
    });


    useEffect(() => {
        dispatch(getFeedBoosters(sortFields));
    }, [sortFields]);

    return (
        <>

            {/* sort for large screens */}
            {
                loadCountries ?
                  
                <SpinnerPage />
                
                :

                    <div>
                        {
                            countries[0] ?
                                <form
                                    className={showFilter ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3" : "hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3"}
                                >
                                    <div className=''>
                                        <select id='' className='mb-2 rounded md:rounded-l text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                                            value={sortFields.platform}
                                            onChange={(e) => {
                                                setSortFields({ ...sortFields, platform: e.target.value })
                                                // dispatch(setSorter(sortFields));
                                            }}
                                        >
                                            <option value="all">Platform</option>
                                            <option value="facebook">facebook</option>
                                            <option value="twitter">twitter</option>
                                            <option value="instagram">instagram</option>
                                            <option value="youtube">youtube</option>
                                            <option value="substack">substack</option>
                                            <option value="linkedin">linkedin</option>
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select id='' className='mb-2 rounded md:rounded-r lg:rounded-none text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                                            value={sortFields.budget}
                                            onChange={(e) => {
                                                setSortFields({ ...sortFields, budget: e.target.value })
                                                // dispatch(setSorter(sortFields));
                                            }}
                                        >
                                            <option value="all">Budget($)</option>
                                            <option value="100">100-500</option>
                                            <option value="500">500-1000</option>
                                            <option value="1000">1000-2000</option>
                                            <option value="2500">2500-5000</option>
                                            <option value="5000">5000-10000</option>
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select id='' className='mb-2 rounded md:rounded-l lg:rounded-none text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                                            value={sortFields.location}
                                            onChange={(e) => {
                                                setSortFields({ ...sortFields, location: e.target.value })
                                                // dispatch(setSorter(sortFields));
                                            }}
                                        >
                                            <option value="all">Location</option>
                                            {
                                                countries.map(item=>(
                                                    <option key={item.id} value={item.name}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className=''>
                                        <select id='' className='mb-2 rounded md:rounded-r text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                                            value={sortFields.topic}
                                            onChange={(e) => {
                                                setSortFields({ ...sortFields, topic: e.target.value })
                                                // dispatch(setSorter(sortFields));
                                            }}
                                        >
                                            <option value="all">Keywords</option>
                                            <option value="fashion">Fashion</option>
                                            <option value="food">Food</option>
                                            <option value="arts">Arts</option>
                                            <option value="crypto">Crypto</option>
                                            <option value="tourism">Tourism</option>
                                            <option value="tech">Tech</option>
                                        </select>
                                    </div>
                                </form> :
                                <div>
                                    <p className="pt-32 text-center">Something went wrong please reload page</p>
                                </div>
                        }
                    </div>
            }
        </>
    )
}

export default memo(DashSort)
