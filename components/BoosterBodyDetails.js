import React, { useState } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import'react-intl-tel-input/dist/main.css'

const BoosterBodyDetails = ({
    activeStep,
    countries
}) => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [cities, setCities] = useState(countries[0].cities)

    const processCountry = ((country) => {
        setSelectedCountry(country)
        {countries.map((item) =>{
            if(country === item.country){
               setCities(item.cities)
            }
              
        })}
    })
    
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

                <form action="">
                    <p className='text-2xl text-black font-bold'>Location</p>
                    <p className='mb-2 text-sm text-didallabody'>Where are you based?</p>

                    <div className='mb-2 grid grid-cols-1 md:grid-cols-2 gap-2'>
                        
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
                                <select name="city" id="city" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                    {cities.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-didalla' value={item} >{item}</option>
                                    })}
                                </select>

                            </div>
                        </div>

                    </div>

                    <p className='text-2xl text-black font-bold'>Phone Number</p>
                    <p className='mb-2 text-sm text-didallabody'>This would not be shared with clients</p>
                    <div className='w-full mb-3'>
                        <IntlTelInput containerClassName="intl-tel-input" preferredCountries={["us"]} />
                    </div>
                    
                </form>

            </div>
            
        </div>
    )
}

export default BoosterBodyDetails