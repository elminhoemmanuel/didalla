import React, {useState} from 'react'
import Select from 'react-select';
import useForm from './useForm';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';


const SendOffer = ({ hideSendOffer, booster, campaigns}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");

    const [interestsBox, setinterestsBox] = useState([]);
    const [selectedCampaign, setselectedCampaign] = useState();
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

    // Define the state schema used for validation
    const stateSchema = {
        offercost:{value:0 , error:""}, 
    }

    const stateValidatorSchema ={
        offercost:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Offer cost must contain atleast one number"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const { offercost } = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(!isSubmitting);
        console.log(selectedCampaign , offercost, interestsBox);

        const userToken = localStorage.getItem('userToken');
        const interests = [];
        interestsBox.map(item =>(
            interests.push(item.value)
        ));

        const formdata = new FormData();
        formdata.append("campaign_id", selectedCampaign)
        formdata.append("booster_id", booster.id)
        formdata.append("offer_cost", offercost)
        formdata.append("network", JSON.stringify(interests))

        axios.post('https://api.didalla.com/api/offer/send_offer',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Offer sent successfully')
            if(isSubmitting === false && errMsg === ''){
                setTimeout(() => {
                    hideSendOffer();
                }, 4000);
            }

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });
        
    }


    return (
        <div className='absolute py-6 px-8 md:px-52 lg:px-80 w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col z-20 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex boosters-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={hideSendOffer}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Send offer</h1></div>
                    </div>
                </div>

                <div className=' pb-16 h-auto'>
                    <div className='px-6 py-4'>
                        <div className='flex boosters-center mb-2'>
                                <div className='mr-3'>
                                    <img className='h-10 w-10 rounded-full' src={booster.photo_url} alt="creator avatar" />
                                </div>
                                <div>
                                    <h1 className='text-didallablack text-sm font-bold'>{booster.user.first_name} - {booster.user.last_name}</h1>
                                    <p className='text-didallabody text-sm'><svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    &nbsp;{booster.city}, {booster.country}</p>
                                </div>

                        </div>

                        <p className='text-didallabody text-sm mb-4'>Use this form to set the direct offer and also choose the creator connections that you would like to publish content. </p>

                        <form action="" onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Campaigns</h1>
                                <div>  
                                    <select value={selectedCampaign} onChange={(e)=>{setselectedCampaign(e.target.value)}}
                                    name="campaigns" id="campaigns" className='py-3 pl-3 pr-5 border border-grayborder rounded w-full focus:outline-none focus:border-didalla text-sm'>
                                        {campaigns.map((item ) =>{
                                                return <option key={item.id} className='p-1 hover:bg-didalla' value={item.id} >{item.name}</option>
                                            })}
                                    </select>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Offer cost</h1>
                                <div className='flex flex-row justify-start boosters-center'>
                                        <div className='text-black bg-downloadgray p-3 h-full'>
                                            $
                                        </div>
                                        <div className='w-full'>
                                        <input className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                                                type="number"
                                                id='offercost'
                                                name="offercost"
                                                value={offercost}
                                                onChange={handleOnChange}
                                                placeholder='100'
                                                required
                                            />
                                        </div>
                                </div>
                                {errors.offercost && dirty.offercost && (
                                    <p className='text-red-500 text-xs'>{errors.offercost}</p>
                                )}
                            </div>
                            <div className='mb-10'>
                                <h1 className='text-sm text-black font-bold mb-2'>Choose networks</h1>
                                <p className='text-didallabody text-sm mb-2'>This would be the platforms the creator would publish on. They are based on what the creator currently offers.</p>
                                <div>
                                    <Select
                                        isMulti
                                        name="socialMedia"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={opt => setinterestsBox(opt)}
                                    />
                                    
                                </div>
                            </div>

                            <div className='flex flex-row boosters-center justify-end mb-4'>

                                <div>
                                    <button type='button' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-transparent text-didalla rounded 
                                    font-bold hover:text-green-600 text-sm  focus:outline-none mr-2 text-sm md:text-base"  
                                        onClick={hideSendOffer}
                                    >
                                        Cancel
                                    </button>
                                </div>

                                <div className='flex boosters-center justify-end'>
                                    {
                                        offercost <= 0 || errors.offercost  || selectedCampaign === undefined
                                        
                                        ?

                                        <button type='submit' className="pointer-events-none opacity-50 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Send Offer</span>}
                                        </button> 
                                        
                                        :

                                        <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Send Offer</span>}
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
                                        successMsg && <div className='text-sm text-didalla'>Offer successfully sent</div> 
                                    }
                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendOffer
