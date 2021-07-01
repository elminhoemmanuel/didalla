import React, { useState, useEffect }from 'react'
import VendorDashNav from './VendorDashNav'
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { earningsData } from './EarningsData';



const VendorMessages = ({
}) => {

    return (
        <div>
            {
                
                <div>
                    <VendorDashNav 
                    homeColour='' 
                    campaignColour =""
                    creatorsColour = ""
                    messagesColour = "text-didalla"
                    />

                    <div className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20'>
                        <div className='w-full flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4'>
                            <div className='mb-1 md:mb-0'>
                                <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>Inbox</h1></div>
                            </div>
                                                                                                                
                        </div>

                        <div className='bg-white rounded px-4 pt-32 pb-16 flex flex-col items-center justify-center'>
                            <div className='mb-6'>
                                <img className='' src="/images/Mailbox.svg" alt="mailbox icon" />
                            </div>
                            <div className='text-center'>
                                <h1 className='mb-2 font-bold text-didallablack text-lg md:text-xl lg:text-xl'>You do not have any message here</h1>
                                <p className='text-didallabody text-sm'>You get messages here when a conversation starts with a vendor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            }
            
        </div>
    )
}


export default VendorMessages
