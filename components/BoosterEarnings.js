import React, { useState, useEffect }from 'react'
import BoosterDashNav from './BoosterDashNav'
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { earningsData } from './EarningsData';



const BoosterEarnings = ({
}) => {

    return (
        <div>
            {
                
                <div>
                    <BoosterDashNav 
                    homeColour='' 
                    campaignColour =""
                    creatorsColour = "text-didalla"
                    messagesColour = ""
                    />

                    <div className='bg-onboardinggray px-6 md:px-10 lg:px-16 pt-32 pb-20'>
                        <div className='w-full flex flex-col md:flex-row md:items-center justify-start md:justify-between mb-4'>
                            <div className='mb-1 md:mb-0'>
                                <div><h1 className='font-bold text-didallablack text-lg md:text-xl lg:text-xl'>My Earnings</h1></div>
                            </div>
                            <div className='mb-1 md:mb-0'>
                                <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        Withdraw
                                </button>
                            </div>
                                                                                                                                
                        </div>

                        <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                            <div className='p-3 text-center '>
                                <p className='text-didallabody text-sm'>Net Income</p>
                                <p className='text-didallabody text-xl font-bold'>$2,500</p>
                            </div>
                            <div className='p-3 text-center '>
                                <p className='text-didallabody text-sm'>Withdrawn</p>
                                <p className='text-didallabody text-xl font-bold'>$1,000</p>
                            </div>
                            <div className='p-3 text-center border-r border-grayborder'>
                                <p className='text-didallabody text-sm'>Pending</p>
                                <p className='text-didallabody text-xl font-bold'>$500</p>
                            </div>
                            <div className='p-3 text-center '>
                                <p className='text-didallabody text-sm'>Available for withrawal</p>
                                <p className='text-didallabody text-xl font-bold'>$750</p>
                            </div>
                        </div>

                        <div className='flex items-center mb-2'>
                            <div className='mr-1'>
                                    <select id=''
                                    className='w-full p-2 rounded bg-white focus:outline-none
                                        focus:border-didalla text-sm border border-grayborder' 
                                    >
                                        <option className='text-sm' value="Network">All Transactions</option>
                                        <option className='text-sm' value="facebook">Withdrawal</option>
                                        <option className='text-sm' value="twitter">Ccampaign</option>
                                        <option className='text-sm' value="instagram">Service Fee</option>
                                    </select>
                            </div>
                            <div className='mr-1'>
                                    <select id=''
                                    className='w-full p-2 rounded bg-white focus:outline-none
                                        focus:border-didalla text-sm border border-grayborder' 
                                    >
                                        <option className='text-sm' value="Network">This month</option>
                                        <option className='text-sm' value="facebook">Last 10 days</option>
                                        <option className='text-sm' value="twitter">Last 3 days</option>
                                        <option className='text-sm' value="instagram">Last 1 day</option>
                                    </select>
                            </div>
                            
                        </div>

                        <div>
                            <table className='text-sm text-didallabody bg-white p-2 w-full'>
                                <tr className='border-b border-grayborder p-2'>
                                    <th className='p-3 text-left'>
                                        <p >Ref ID</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Date</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Type</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Description</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Amount</p>
                                    </th>
                                    <th className='p-3 text-left'>
                                        <p >Balance</p>
                                    </th>
                                </tr>
                                {
                                   earningsData.map(item=>(
                                       <tr className='p-2'>
                                           <td className='p-3 '>{item.ref}</td>
                                           <td className='p-3 '>{item.date}</td>
                                           <td className='p-3 '>{item.type}</td>
                                           <td className='p-3 '>{item.desc}</td>
                                           <td className='p-3 '>{item.amount}</td>
                                           <td className='p-3 '>{item.balance}</td>
                                       </tr>
                                   )) 
                                }
                            </table>
                        </div>

                    </div>
                </div>
            }
            
        </div>
    )
}


export default BoosterEarnings
