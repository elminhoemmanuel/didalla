import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {countryCodes} from './CountryCodes'

const BoosterBodyDetails = ({
    activeStep,
    countries,
    handleBack,
}) => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const [phone, setPhone] = useState(0);
    const [selectedCode, setSelectedCode] = useState('');
    const [cities, setCities] = useState(countries[0].cities)

    const processCountry = ((country) => {
        setSelectedCountry(country)
        {countries.map((item) =>{
            if(country === item.country){
               setCities(item.cities)
            }
              
        })}
    });

    // const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(selectedCountry)
        console.log(selectedCity)
        console.log(phone)
        console.log(selectedCode)
    }
    
    return (
        <div className=' col-span-5 px-6 pt-6 md:pt-20 pb-4'>
            <div className='py-8 px-10 bg-white rounded'>
                <div className=' mb-6 border-b border-gray-200 py-4'>
                    <p className='text-black text-sm '>Step {activeStep} of 8</p>
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
                                onChange={e =>{processCountry(e.target.value);}}  id="country" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {countries.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-didalla' value={item.country} >{item.country}</option>
                                    })}
                                </select>

                            </div>
                        </div>

                        <div>
                            <div className='mb-1'><label htmlFor="city" className='text-didallabody text-sm'>city</label></div>
                            <div className=''>
                                <select name="city" id="city" value={selectedCity} onChange={e =>{setSelectedCity(e.target.value)}} className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {cities.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-didalla' value={item} >{item}</option>
                                    })}
                                </select>

                            </div>
                        </div>

                    </div>

                    <p className='text-xl text-black font-bold'>Phone Number</p>
                    <p className='mb-2 text-sm text-didallabody'>This would not be shared with clients</p>
                    <div className='w-full pb-4 grid grid-cols-4 gap-2'>
                        <div className='col-span-4 md:col-span-1'>
                            <select name="countryCode" id="countryCode" value={selectedCode} onChange={e =>{setSelectedCode(e.target.value)}} className='pt-4 pb-3 px-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {countryCodes.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-didalla' value={item.dial_code} >{item.dial_code}</option>
                                    })}
                            </select>
                        </div>
                        <div className='col-span-4 md:col-span-3'>
                            <input type="number" name="phone" id="phone" value={phone} onChange={e =>{setPhone(e.target.value)}} className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'/>
                        </div>
                        
                        
                    </div>

                    <div className='pt-4 flex flex-row flex-nowrap justify-end'>
                        <div>
                            <button type='text' className="block py-3 px-12 text-center bg-transparent text-didalla rounded border border-didalla
                                    font-bold hover:text-white hover:bg-didalla focus:outline-none mr-2"  
                                    onClick={handleBack}
                                    >
                                        Back
                            </button>
                        </div>
                        <div>
                            <button type='submit' className="block py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none"  
                                    
                                    >
                                        Next
                            </button>
                        </div>
                    </div>

                </form>

            </div>
            
        </div>
    )
}

export default BoosterBodyDetails