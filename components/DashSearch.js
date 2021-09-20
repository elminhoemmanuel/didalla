import React from 'react'

const DashSearch = () => {
    return (
        <form className="mb-4 relative">
            <input 
            className='placeholder-didallabody text-sm py-3 pl-12 pr-3 border border-gray-200 block w-full rounded focus:outline-none focus:border-didalla'
            type="text"
            placeholder="Search for content creator"
            />
            <div className="absolute top-3 left-3">
                <img src="/images/MagnifyingGlass.svg" alt="search icon" />
            </div>
        </form>
    )
}

export default DashSearch
