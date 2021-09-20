import React from 'react'
import TextBtn from './TextBtn'
import { RiArrowRightCircleFill } from "react-icons/ri"

const DashHeadings = ({ heading, btnClicked }) => {
    return (
        <div className="mb-3 flex items-center justify-between">
            <div><h1 className="text-didallatitle text-lg md:text-xl font-bold">{heading}</h1></div>
            <div>
                <TextBtn
                    btnType="button"
                    addStyle="block"
                    btnText={
                        <div className="flex items-center">
                            <div className="mr-2">
                                View all
                            </div>
                            <div>
                                <RiArrowRightCircleFill className="h-5 w-5" />
                            </div>
                        </div>
                    }
                    clicked={btnClicked}
                />
            </div>
        </div>
    )
}

export default DashHeadings
