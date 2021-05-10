import React, { useState, useEffect} from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

export const getStaticProps = async () =>{
    const res = await fetch('https://api.didalla.com/api/misc/countries');
    const data = await res.json();
    console.log(data)

    return {
        props:{ countries:data }
    }
}

const BrandInfo = ({
    handleNext,
    errors,
    dirty,
    handleOnChange,
    brandname,
    obtainCountry,
    userDetails,
    countries,
    isLoading
}) => {

    const holder = countries

    const getOptions = () =>{
        countries.map((item ) =>(
            <option key={item.id} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
        ))
        console.log('ran')
    }

    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const [cities, setCities] = useState([{name:'Select city'}])

    console.log('holder',holder)
    

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

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#39B54A");

    const onSubmit = (e) =>{
        e.preventDefault();
        obtainCountry('country',selectedCountry);
        obtainCountry('city',selectedCity);
        console.log(userDetails.country);
        console.log(userDetails.city);
        // handleNext();
    }

    useEffect(() => {
        obtainCountry('country',selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainCountry('city',selectedCity);
    }, [selectedCity])

    return (
        <div className='w-3/4 md:w-1/2 lg:w-2/6 mx-auto'>
            
                <div>
                    <div className='mb-3'>
                        <img className='' src="/images/BrandInfo.svg" alt="Brand info image"/>
                    </div>
                    <p className='text-xl text-black font-bold pb-2 border-b border-gray-200 mb-8'>Brand info</p>

                    <form action="" onSubmit={onSubmit}>
                        <div className='mb-5'>
                            <div className='mb-3'>
                                <label htmlFor="brandname" className='text-black text-base font-bold'>Brand name</label>
                                <p className='text-sm text-didallabody'>How can we refer to your brand?</p>
                            </div>
                            <div className=''>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='brandname'
                                    name="brandname"
                                    value={brandname}
                                    onChange={handleOnChange}
                                    placeholder='E.g Didalla corporation'
                                    required
                                />
                                {errors.brandname && dirty.brandname && (
                                    <p className='text-red-500 text-xs'>{errors.brandname}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-10'>
                            <div className='mb-3'>
                                <label htmlFor="brandlocation" className='text-black text-base font-bold'>Location</label>
                                <p className='text-sm text-didallabody'>Where is your brand located?</p>
                            </div>
                            <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
                        
                                <div>
                                    <div className='mb-1'><label htmlFor="country" className='text-didallabody text-sm'>Country</label></div>
                                    <div className=''>
                                        <select name="country" value={selectedCountry} 
                                        onChange={(e) =>{processCountry(e.target.value);}}  id="country" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                            {getOptions()}
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
                        </div>

                        {brandname.length === 0 || selectedCountry === undefined || selectedCity === undefined ||  errors.brandname 
                                ? (<div className='flex items-center justify-start md:justify-end'>
                                <button type='submit' className="block pointer-events-none opacity-50 w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                    Next:Campaign Details
                                </button>
                            </div>) : 
                                (<div className='flex items-center justify-end'>
                                <button type='submit' className="block w-full md:w-auto py-3 px-12 text-center bg-didalla rounded border border-didalla
                                    font-bold text-white hover:bg-green-600 focus:outline-none mb-2">
                                    Next:Campaign Details
                                </button>
                            </div>)
                        }

                        
                    </form>
                </div>  
            

        </div>
    )
}

export default BrandInfo
