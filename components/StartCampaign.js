import React, {useState , useEffect, useRef} from 'react'
import Select from 'react-select';
import useForm from './useForm';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";


const StartCampaign = ({ closeStartCampaign, countries }) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");

    const [cities, setCities] = useState([{name:'Select city'}])
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const [picObject, setPicObject] = useState()
    const [interestsBox, setinterestsBox] = useState([])
    const [allowBid, setAllowBid] = useState(false)
    const [bidValue, setbidValue] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();

    
    const options = [
        { value: 'facebook', label: 'facebook' },
        { value: 'twitter', label: 'twitter' },
        { value: 'youtube', label: 'youtube' },
        { value: 'instagram', label: 'instagram' },
        { value: 'substack', label: 'substack' },
        
    ]

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

    useEffect(() => {
        obtainCountry('country',selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainCountry('city',selectedCity);
    }, [selectedCity])
    useEffect(() => {
        if(allowBid === true){
            setbidValue(1)
        }else{
            setbidValue(1)
        }
    }, [bidValue])

    // Define the state schema used for validation
    const stateSchema = {
        campaignname:{value:"" , error:""},
        brandlocation:{value:"" , error:""},
        brandbudget:{value:0 , error:""},
        startdate:{value:"" , error:""},
        enddate:{value:"" , error:""},
        campaignbrief:{value:"" , error:""},
        campaigngoal:{value:"" , error:""},
        task1:{value:"" , error:""},
        task2:{value:"" , error:""},
        
    }

    const stateValidatorSchema ={

        campaignname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Campaign name must be more than one character without space inbetween"
            }
        },
        brandlocation:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Brand location must be more than one character without space inbetween"
            }
        },
        brandbudget:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Budget must contain atleast one number"
            }
        },
        startdate:{
            required:true,
            validator:{
                func: value=> /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
        enddate:{
            required:true,
            validator:{
                func: value=> /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
        campaignbrief:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
        task1:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two characters "
            }
        },
        task2:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two characters "
            }
        },
        campaigngoal:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
    }

    // brand platforms
    

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {campaignname, brandbudget, startdate, enddate, campaignbrief ,campaigngoal, task1 , task2} = values;

    // user body details
    const [userDetails, setUserDetails] = useState({country:'',city:'',interests:[]});

    const obtainCountry = (detail,value) =>{
        setUserDetails({...userDetails,[detail]:value});
    }

    const picInput = useRef();

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(interestsBox);
        // console.log(picObject);
        // console.log(selectedCity);
        // console.log(campaignname);
        // console.log(brandbudget);
        // console.log(startdate);
        // console.log(campaignbrief);
        // console.log(allowBid);
        // console.log(task1, task2);
        setIsSubmitting(!isSubmitting);

        const userToken = localStorage.getItem('userToken');

        const interests = [];

        interestsBox.map(item =>(
            interests.push(item.value)
        ));

        if(allowBid === true){
            setbidValue(1)
        }else{
            setbidValue(0)
        }

        const tasks = [task1, task2]

        // console.log(bidValue);
        console.log(tasks);

        const formdata = new FormData();
        formdata.append("name", campaignname)
        formdata.append("city", selectedCity)
        formdata.append("country", selectedCountry)
        formdata.append("budget", brandbudget)
        formdata.append("start_date", startdate)
        formdata.append("end_date", enddate)
        formdata.append("brief", campaignbrief)
        formdata.append("network", JSON.stringify(interests))
        formdata.append("file", picObject)
        formdata.append("allow_bid", bidValue)
        formdata.append("tasks", JSON.stringify(tasks))
        

        axios.post('https://api.didalla.com/api/campaign/create',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Offer sent successfully')
            if(isSubmitting === false && errMsg === ''){
                setTimeout(() => {
                    closeStartCampaign();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });

        

    }

    return (
        <div className='absolute py-6  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeStartCampaign}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Start campaign</h1></div>
                    </div>
                </div>

                <div className='px-6 py-2'>
                
                <form action="" onSubmit={onSubmit}>
                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="campaignname" className='text-black text-sm font-bold'>Campaign name</label>
                                
                            </div>
                            <div className=''>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='campaignname'
                                    name="campaignname"
                                    value={campaignname}
                                    onChange={handleOnChange}
                                    placeholder='Promote my product'
                                    required
                                />
                                {errors.campaignname && dirty.campaignname && (
                                    <p className='text-red-500 text-xs'>{errors.campaignname}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="brandlocation" className='text-black text-sm font-bold'>Location</label>
                            </div>
                            <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
                        
                                <div>
                                    <div className='mb-1'><label htmlFor="country" className='text-didallabody text-sm'>Country</label></div>
                                    <div className=''>
                                        <select name="country" value={selectedCountry} 
                                        onChange={(e) =>{processCountry(e.target.value);}}  id="country" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'>
                                            {countries.map((item ) =>(
                                                <option key={item.id} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                            ))}
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

                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="brandbudget" className='text-black text-sm font-bold'>Budget</label>
                            </div>
                            <div className=''>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="number"
                                    id='brandbudget'
                                    name="brandbudget"
                                    value={brandbudget}
                                    onChange={handleOnChange}
                                    placeholder='100'
                                    required
                                />
                                {errors.brandbudget && dirty.brandbudget && (
                                    <p className='text-red-500 text-xs'>{errors.brandbudget}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-2'>
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                
                                <div className=''>
                                    <p className='text-sm text-didallabody mb-2'>Start date</p>
                                    <input className='bg-transparent p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                        type="date"
                                        id='startdate'
                                        name="startdate"
                                        value={startdate}
                                        onChange={handleOnChange}
                                        placeholder='E.g Texas, USA'
                                        required
                                    />
                                    {errors.startdate && dirty.startdate && (
                                        <p className='text-red-500 text-xs'>{errors.startdate}</p>
                                    )}
                                </div>

                                <div className=''>
                                    <p className='text-sm text-didallabody mb-2'>End date</p>
                                    <input className='bg-transparent p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                        type="date"
                                        id='enddate'
                                        name="enddate"
                                        value={enddate}
                                        onChange={handleOnChange}
                                        required
                                    />
                                    {errors.enddate && dirty.enddate && (
                                        <p className='text-red-500 text-xs'>{errors.enddate}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="campaigngoal" className='text-black text-sm font-bold'>Campaign goal</label>
                            </div>
                            <div className=''>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='campaigngoal'
                                    name="campaigngoal"
                                    value={campaigngoal}
                                    onChange={handleOnChange}
                                    placeholder='To promote my new clothing line'
                                    required
                                />
                                {errors.campaigngoal && dirty.campaigngoal && (
                                    <p className='text-red-500 text-xs'>{errors.campaigngoal}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="campaignbrief" className='text-black text-sm font-bold'>Project brief</label>

                            </div>
                            <div className=''>
                                <textarea className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='campaignbrief'
                                    name="campaignbrief"
                                    value={campaignbrief}
                                    onChange={handleOnChange}
                                    placeholder='My brand will like to find a creative to push the narrative of our new clothing line'
                                    rows='3'
                                    required
                                ></textarea>
                                {errors.campaignbrief && dirty.campaignbrief && (
                                    <p className='text-red-500 text-xs'>{errors.campaignbrief}</p>
                                )}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-sm text-black font-bold mb-2'>Campaign Tasks</h1>
                            <p className='text-didallabody text-sm mb-2'>Spell out atleast one task to be carried out by the content creator for this campaign.</p>            
                        </div>
                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="task1" className='text-black text-sm font-bold'>Task 1</label>

                            </div>
                            <div className=''>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='task1'
                                    name="task1"
                                    value={task1}
                                    onChange={handleOnChange}
                                    placeholder='Create an instagram skit about my product'
                                    required
                                />
                                {errors.task1 && dirty.task1 && (
                                    <p className='text-red-500 text-xs'>{errors.task1}</p>
                                )}
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='mb-3'>
                                <label htmlFor="task2" className='text-black text-sm font-bold'>Task 2</label>

                            </div>
                            <div className=''>
                            <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="text"
                                    id='task2'
                                    name="task2"
                                    value={task2}
                                    onChange={handleOnChange}
                                    placeholder='Do a twitter thread about my product'
                                    required
                                />
                                {errors.task2 && dirty.task2 && (
                                    <p className='text-red-500 text-xs'>{errors.task2}</p>
                                )}
                            </div>
                        </div>

                        <div className='relative flex mb-2'>
                            <div className=''>
                                        <input className='opacity-0' type="file" 
                                        name="fileUrl"
                                        id="fileUrl" 
                                        accept="image/png, image/jpeg" 
                                        ref={picInput} 
                                        onChange={e=>{
                                            setPicObject(picInput.current.files[0]);

                                        }}
                                        />
                                        
                            </div>

                            <div className='absolute top-0 left-0 pointer-events-none bg-grayborder flex items-center rounded p-2 cursor-pointer'>
                                <div><img src="/images/Link.svg" alt="attach picture icon" /></div>
                                <div>Attach picture</div>
                            </div>

                        </div>

                        <div className='mt-5'>
                            <h1 className='text-sm text-black font-bold mb-2'>Choose networks</h1>
                            <p className='text-didallabody text-sm mb-2'>This would be the platforms the creator would publish on. They are based on what the creator currently offers.</p>
                            <Select
                                isMulti
                                name="socialMedia"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={opt => setinterestsBox(opt)}
                            />
                                    
                        </div>

                        <div className='mt-5'>
                            <h1 className='text-sm text-black font-bold mb-2'>Allow creator bids</h1>
                            <p className='text-didallabody text-sm mb-2'>You can send a Creator a Direct offer for your project at the time. If you want creators to be able to submit bids, enable open bidding. You can turn it off at anytime. </p>
                            <div className='flex items-center'>
                                <div className='mr-3'>
                                    <input className=''
                                        type="checkbox"
                                        id='allowbid'
                                        name="allowbid"
                                        required
                                        onClick={() =>{setAllowBid(!allowBid)}}
                                    />
                                    
                                </div>

                                <div className='pb-1'>
                                    <label htmlFor="allowbid" className='text-black text-sm font-bold'>Start accepting bids as soon as the project is approved.</label>
                                </div>

                            </div>
                                    
                        </div>

                        <div className='flex flex-row items-center justify-end mb-4 mt-6'>

                                <div>
                                    <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                    font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                        onClick={closeStartCampaign}
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className='flex items-center justify-end'>
                                    {
                                        campaignname.length === 0|| brandbudget <= 0 || selectedCity.length === 0 ||
                                        selectedCountry.length === 0 || startdate.length === 0 || enddate.length === 0 || campaignbrief.length === 0 ||
                                        campaigngoal.length === 0 ||task1.length === 0 ||task2.length === 0 || errors.campaignname  || errors.brandbudget
                                        || errors.startdate || errors.enddate || errors.campaignbrief || errors.campaigngoal ||errors.task1 ||errors.task2 || picObject === undefined
                                        || interestsBox === [] || interestsBox === undefined
                                        
                                        ?

                                        <button type='submit' className="pointer-events-none opacity-50 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Create campaign</span>}
                                        </button> 
                                        
                                        :

                                        <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Create campaign</span>}
                                        </button>
                                    }
                                </div>

                        </div>
                        <div className='flex justify-end'>
                                    {
                                        isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div> 
                                    }
                        </div>
                        <div className='flex justify-end'>
                                    {
                                        successMsg && <div className='text-sm text-didalla'>Campaign created successfully</div> 
                                    }
                        </div>
                        
                </form>

                </div>
            </div>
        </div>
    )
}

export default StartCampaign
