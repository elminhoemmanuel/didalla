import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DashSort = () => {

    const { showFilter } = useSelector(state => state.vendorFeed)

    return (
        <>
            {/* sort for mobile screens */}
            <form className={showFilter ? "md:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3" : "hidden"}>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-l text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    >
                        <option value="">Platform</option>
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
                        <option value="">Budget($)</option>
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
                        <option value="">Location</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="arts">Arts</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    >
                        <option value="">Keywords</option>
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
                    >
                        <option value="">Platform</option>
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
                        <option value="">Budget($)</option>
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
                        <option value="">Location</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="arts">Arts</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className=''>
                    <select id='' className='mb-2 rounded md:rounded-r text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full focus:outline-none focus:border-didalla'
                    >
                        <option value="">Keywords</option>
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
