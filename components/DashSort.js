import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSorter, getFeedBoosters } from "../redux/actions/vendorFeed";

const DashSort = () => {

    const dispatch = useDispatch()
    const { showFilter,loading, error, boosters, sorter } = useSelector(state => state.vendorFeed);
    // console.log(sorter)
    // const [sorterValues, setSorterValues] = useState({
    //     platform: "all",
    //     location: "all",
    //     topic: "all",
    //     budget: "all"
    // });
    const [sortFields, setSortFields] = useState({
        platform: "all",
        location: "all",
        topic: "all",
        budget: "all"
    });
    console.log(sortFields);

    // useEffect(() => {
    //     setSorterValues({
    //         ...sorterValues,
    //         platform: sortFields.platform,
    //         location: sortFields.location,
    //         topic: sortFields.topic,
    //         budget: sortFields.budget
    //     })
    // }, [])

    useEffect(() => {
        dispatch(setSorter(sortFields));
        dispatch(getFeedBoosters(sorter));
    }, [sortFields]);

    // useEffect(() => {
    //     dispatch(setSorter(sortFields));
    //     dispatch(getFeedBoosters(sorter));
    // }, [])

    return (
        <>
            {/* sort for mobile screens */}
            <form className={showFilter ? "md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3" : "hidden"}>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-l text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    
                    >
                        <option value="all">Platform</option>
                        <option value="facebook">facebook</option>
                        <option value="twitter">twitter</option>
                        <option value="instagram">instagram</option>
                        <option value="youtube">youtube</option>
                        <option value="substack">substack</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r lg:rounded-none text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
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
                    >
                        <option value="all">Location</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="arts">Arts</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
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
            </form>

            {/* sort for large screens */}
            <form className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-l text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    value={sortFields.platform}
                    onChange={(e)=>{
                        setSortFields({ ...sortFields, platform :e.target.value})
                        dispatch(setSorter(sortFields));
                    }}
                    >
                        <option value="all">Platform</option>
                        <option value="facebook">facebook</option>
                        <option value="twitter">twitter</option>
                        <option value="instagram">instagram</option>
                        <option value="youtube">youtube</option>
                        <option value="substack">substack</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r lg:rounded-none text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    value={sortFields.budget}
                    onChange={(e)=>{
                        setSortFields({ ...sortFields, budget :e.target.value})
                        dispatch(setSorter(sortFields));
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
                    onChange={(e)=>{
                        setSortFields({ ...sortFields, location :e.target.value})
                        dispatch(setSorter(sortFields));
                    }}
                    >
                        <option value="all">Location</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="arts">Arts</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    value={sortFields.topic}
                    onChange={(e)=>{
                        setSortFields({ ...sortFields, topic :e.target.value})
                        dispatch(setSorter(sortFields));
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
            </form>
        </>
    )
}

export default DashSort
