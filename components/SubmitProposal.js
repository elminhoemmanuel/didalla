import React, {useState} from 'react'
import Select from 'react-select';
import useForm from './useForm';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';


const SubmitProposal = ({closeShowSubmitProposal, singleCampaign}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();

    const stateSchema = {
        bidcost:{value:0 , error:""}, 
        coverletter:{value:"" , error:""}, 
    }

    const stateValidatorSchema ={
        bidcost:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Offer cost must contain atleast one number"
            }
        },
        coverletter:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two characters "
            }
        },
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const { bidcost, coverletter } = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(!isSubmitting);
        const userToken = localStorage.getItem('userToken');

        const formdata = new FormData();
        formdata.append("campaign_id", singleCampaign.id)
        formdata.append("bid", bidcost)
        formdata.append("cover_letter", coverletter)

        axios.post('https://api.didalla.com/api/bid/send_bid',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Offer sent successfully')
            if(isSubmitting === false && errMsg === ''){
                setTimeout(() => {
                    closeShowSubmitProposal();
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
            <div className='modal-box fixed w-4/5 lg:w-3/5 h-full bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowSubmitProposal}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Submit Proposal</h1></div>
                    </div>
                </div>

                <div className=' pb-16 h-auto'>
                    <div className='px-6 py-4'>

                        <h1 className='text-sm text-black font-bold mb-2'>{singleCampaign.name}</h1>
                        <p className='text-didallabody mb-3'>marvel's place - <span className='text-didallabody'>posted {singleCampaign.created_at.substr(0,10)}</span></p>
                        <div className='flex items-center mb-1'>
                            <div><img className='mr-1' src="/images/Location.svg" alt="location icon" /></div>
                            <div>
                                <p className='text-didallabody'>{singleCampaign.city} - <span className='text-didallabody'>{singleCampaign.country}</span></p>
                            </div>
                        </div>

                        <p className='text-didallabody mb-3'>{singleCampaign.brief}</p>

                        <form action="" onSubmit={handleSubmit}>
                            
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Proposal cost</h1>
                                <div className='flex flex-row justify-start items-center'>
                                        <div className='text-black bg-downloadgray p-3 h-full'>
                                            $
                                        </div>
                                        <div className='w-full'>
                                            <input 
                                            type="number"
                                            id='bidcost'
                                            name="bidcost"
                                            value={bidcost}
                                            onChange={handleOnChange}
                                            placeholder='100'
                                            required
                                            className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                                            />
                                        </div>
                                </div>
                                {errors.bidcost && dirty.bidcost && (
                                            <p className='text-red-500 text-xs'>{errors.bidcost}</p>
                                )}
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-sm text-black font-bold mb-2'>Cover Letter</h1>
                                <div className=''>
                                        <p className='text-didallabody mb-2'>Introduce yourself and explain why you are the best candidate for this job</p>
                                        <div className='w-full'>
                                            <input type="text" name='coverletter' id='coverletter' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                                            placeholder='i would be great for this campaign because......'
                                            value={coverletter}
                                            onChange={handleOnChange}
                                            />
                                        </div>
                                        {errors.coverletter && dirty.coverletter && (
                                            <p className='text-red-500 text-xs'>{errors.coverletter}</p>
                                )}
                                </div>
                            </div>
                            

                            <div className='flex flex-row items-center justify-end mb-4'>

                                    {
                                        bidcost <= 0 || errors.bidcost  || coverletter.length === 0 || errors.coverletter
                                        
                                        ?

                                        <button type='submit' className="pointer-events-none opacity-50 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Submit Proposal</span>}
                                        </button> 
                                        
                                        :

                                        <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                                        {isSubmitting ? <BeatLoader color={color}  loading={isSubmitting} css={override} size={15} />:<span>Submit Proposal</span>}
                                        </button>
                                    }

                                {/* <div className='flex items-center justify-end'>
                                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2"
                                        >
                                        Submit Proposal
                                    </button>
                                </div> */}

                            </div>
                                    <div className='flex justify-end'>
                                            {
                                                isSubmitting === false && errMsg && <div className='text-sm text-red-400'>{errMsg}</div> 
                                            }
                                    </div>
                                    <div className='flex justify-end'>
                                            {
                                                successMsg && <div className='text-sm text-didalla'>Proposal successfully sent</div> 
                                            }
                                    </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitProposal
