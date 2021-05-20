import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'


const CampaignBodyDetails = ({
    activeStep,
    countries,
    handleBack,
    handleNext,
    obtainCountry,
    userDetails
}) => {
    
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const [phone, setPhone] = useState();
    const [cities, setCities] = useState([{name:'Select city'}])

    const processCountry = ((country) => {
        setSelectedCountry(country)
        countries.map(item =>{
            if(item.name === country){
                axios.get(`https://api.didalla.com/api/misc/cities/${item.id}`)
                .then((response) => {
                    setCities(response.data.data)
                }, (error) => {
                    console.log(error)
                });
            }
        })
    });

    


    const onSubmit = (e) =>{
        e.preventDefault();
        obtainCountry('country',selectedCountry);
        obtainCountry('city',selectedCity);
        obtainCountry('phone',phone);
        console.log(userDetails.country);
        console.log(userDetails.city);
        console.log(userDetails.phone);
        handleNext();
        
    }

    


    useEffect(() => {
        obtainCountry('country',selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainCountry('city',selectedCity);
    }, [selectedCity])
    useEffect(() => {
        obtainCountry('phone',phone);
    }, [phone])


    return (
        <div className=' col-span-5 px-3 md:px-6 pt-6 md:pt-20 pb-20 h-full bg-onboardinggray'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 7</p>
                    <h1 className='text-2xl text-black'>Personal Details</h1>
                </div>

                <div className='py-2'>
                    <p className='text-didallabody'>Details that show where you are </p>
                </div>

                <form action="" onSubmit={onSubmit}>
                    <p className='text-xl text-black font-bold'>Location</p>
                    <p className='mb-2 text-sm text-didallabody'>Where are you based?</p>

                    <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
                        
                        <div>
                            <div className='mb-1'><label htmlFor="country" className='text-didallabody text-sm'>Country</label></div>
                            <div className=''>
                                <select name="country" value={selectedCountry} 
                                onChange={(e) =>{processCountry(e.target.value);}}  id="country" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {countries.map((item ) =>{
                                        return <option key={item.id} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                    })}
                                </select>

                            </div>
                        </div>

                        <div>
                            <div className='mb-1'><label htmlFor="city" className='text-didallabody text-sm'>city</label></div>
                            <div className=''>
                                <select name="city" id="city" value={selectedCity} onChange={(e) =>{setSelectedCity(e.target.value)}} className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {cities.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                    })}
                                </select>

                            </div>
                        </div>

                    </div>

                    <p className='text-xl text-black font-bold'>Phone Number</p>
                    <p className='mb-2 text-sm text-didallabody'>This would not be shared with clients</p>
                    <div className='w-full pb-8 grid grid-cols-1 border-b border-gray-200'>
                        <div className=''>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry='US'
                            />
                        </div>
                        
                        
                    </div>

                    <div className='pt-6 flex flex-row items-center flex-nowrap justify-end'>
                        <div className='mr-2'>
                            <button type='button' className="text-sm md:text-base block w-full md:w-auto py-3 px-2 md:px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                    font-bold hover:text-white hover:bg-didalla focus:outline-none "  
                                    onClick={handleBack}
                                    >
                                        Back
                            </button>
                        </div>

                        {selectedCountry === undefined || selectedCity === undefined || phone===undefined
                                    ? (<div>
                                        <button type='submit' className="text-sm md:text-base block pointer-events-none opacity-50 w-full md:w-auto py-3 px-2 md:px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                Next: Profile picture
                                        </button>
                                    </div>) : 
                                    (<div>
                                        <button type='submit' className="text-sm md:text-base block w-full md:w-auto py-3 px-2 md:px-12 text-center bg-didalla rounded border border-didalla
                                                font-bold text-white hover:bg-green-600 focus:outline-none ">
                                                Next: Profile picture
                                        </button>
                                    </div>)}
                    </div>

                </form>

            </div>
            
        </div>
    )
}

export default CampaignBodyDetails