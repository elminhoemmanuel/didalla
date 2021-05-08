import React, { useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const BoosterBodyInterests = ({
    activeStep,
    handleBack,
    handleNext,
    obtainInterest,
    userInterests
}) => {

    

    const [arts, setarts] = useState(false)
    const [auto, setauto] = useState(false)
    const [fintech, setfintech] = useState(false)
    const [crypto, setcrypto] = useState(false)
    const [food, setfood] = useState(false)
    const [fashion, setfashion] = useState(false)
    const [lifestyle, setlifestyle] = useState(false)
    const [politics, setpolitics] = useState(false)
    const [tech, settech] = useState(false)
    const [agric, setagric] = useState(false)
    const [tourism, settourism] = useState(false)
    const [others, setothers] = useState(false)

    const [anyclicked, setAnyClicked] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        obtainInterest('arts',arts);
        obtainInterest('auto',auto)
        obtainInterest('fintech',fintech)
        obtainInterest('crypto',crypto)
        obtainInterest('food',food)
        obtainInterest('fashion',fashion)
        obtainInterest('lifestyle',lifestyle)
        obtainInterest('politics',politics)
        obtainInterest('tech',tech)
        obtainInterest('agric',agric)
        obtainInterest('tourism',tourism)
        obtainInterest('others',others)
        console.log(userInterests)
        handleNext();
        
    }

    useEffect(() => {obtainInterest('arts',arts)},[arts])
    useEffect(() => {obtainInterest('auto',auto)},[auto])
    useEffect(() => {obtainInterest('fintech',fintech)},[fintech])
    useEffect(() => {obtainInterest('crypto',crypto)},[crypto])
    useEffect(() => {obtainInterest('food',food)},[food])
    useEffect(() => {obtainInterest('fashion',fashion)},[fashion])
    useEffect(() => {obtainInterest('lifestyle',lifestyle)},[lifestyle])
    useEffect(() => {obtainInterest('politics',politics)},[politics])
    useEffect(() => {obtainInterest('tech',tech)},[tech])
    useEffect(() => {obtainInterest('agric',agric)},[agric])
    useEffect(() => {obtainInterest('tourism',tourism)},[tourism])
    useEffect(() => {obtainInterest('others',others)},[others])



    return (
        <div className='col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Interests</h1>
                </div>

                <div className='py-2'>
                    <p className='text-didallabody'>What kind of products are you interested in promotiing? You can select up to five(5)</p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 pb-6 border-b border-gray-200'>
                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="arts">Arts and Culture</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="arts" id="arts"
                                onClick={()=>{setarts(!arts);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="auto">Automobile &amp; Industry</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="auto" id="auto"
                                onClick={()=>{setauto(!auto);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        
                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="fintech">Fintech</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="fintech" id="fintech"
                                onClick={()=>{setfintech(!fintech);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="crypto">Cryptocurrency</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="crypto" id="crypto"
                                onClick={()=>{setcrypto(!crypto);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="food">Food</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="food" id="food"
                                onClick={()=>{setfood(!food);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="fashion">Fashion</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="fashion" id="fashion"
                                onClick={()=>{setfashion(!fashion);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="lifestyle">Lifestyle</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="lifestyle" id="lifestyle"
                                onClick={()=>{setlifestyle(!lifestyle);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="politics">Politics</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="politics" id="politics"
                                onClick={()=>{setpolitics(!politics);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="tech">Technology</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="tech" id="tech"
                                onClick={()=>{settech(!tech);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="agric">Agriculture</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="agric" id="agric"
                                onClick={()=>{setagric(!agric);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="tourism">Tourism</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="tourism" id="tourism"
                                onClick={()=>{settourism(!tourism);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>

                        <div className='border border-gray-200 rounded col-span-1 p-2'>
                            <div className='flex item-center justify-between'>
                                <div className=''><label htmlFor="others">Others</label></div>
                                <div className='pt-0.5'><input type="checkbox" name="others" id="others"
                                onClick={()=>{setothers(!others);setAnyClicked(true)}}
                                /></div>
                            </div>
                        </div>



                    </div>

                    <div className='pt-6 flex flex-col-reverse md:flex-row flex-nowrap justify-start md:justify-end'>
                        <div>
                            <button type='button' className="block w-full md:w-auto py-3 px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                    font-bold hover:text-white hover:bg-didalla focus:outline-none mr-2 "  
                                    onClick={handleBack}
                                    >
                                        Back
                            </button>
                        </div>
                        {anyclicked !== true
                        ? (<div>
                            <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                    Next
                            </button>
                        </div>) : 
                        (<div>
                            <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                    Next
                            </button>
                        </div>)}
                    </div>

                </form>

                

            </div>
            
        </div>
    )
}

export default BoosterBodyInterests