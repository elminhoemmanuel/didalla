import React,{useState, useEffect} from 'react'
import useForm from './useForm';
import axios from 'axios';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const SingleBoosterCampaign = ({singleCampaign, closeShowSingleCampaign , openShowAllCampaigns , booster_id}) => {

    // Can be a string as well. Need to ensure each key-value pair ends with ;
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    `;

    let [color, setColor] = useState("#FFFFFF");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitting2, setIsSubmitting2] = useState(false);
    const [errMsg, seterrMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState();
    const [errMsg2, seterrMsg2] = useState('');
    const [successMsg2, setsuccessMsg2] = useState();

    // Define the state schema used for validation
    const stateSchema = {
        submission1:{value:"" , error:""},
        submission2:{value:"" , error:""},
    }

    const stateValidatorSchema ={

        submission1:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
        submission2:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {submission1, submission2} = values;

    console.log(singleCampaign);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(!isSubmitting)
        setIsSubmitting2(!isSubmitting2)

        const formdata = new FormData();
        formdata.append("booster_id", booster_id)
        formdata.append("task_id", singleCampaign.tasks[0].id)
        formdata.append("submission", submission1)
        console.log(booster_id, singleCampaign.tasks[0].id, submission1)

        const formdata2 = new FormData();
        formdata.append("booster_id", booster_id)
        formdata.append("task_id", singleCampaign.tasks[1].id)
        formdata.append("submission", submission2)
        console.log(booster_id, singleCampaign.tasks[1].id, submission2)

        const userToken = localStorage.getItem('userToken');
        
        axios.post('https://api.didalla.com/api/campaign/submit_task',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccessMsg('Successful')

        }, (error) => {
            setIsSubmitting(false)
            seterrMsg('Something went wrong, try again')
            console.log(error);
            
        });

        axios.post('https://api.didalla.com/api/campaign/submit_task',formdata2,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting2(false)
            console.log(response);
            setsuccessMsg2('Successful')

        }, (error) => {
            setIsSubmitting2(false)
            seterrMsg2('Something went wrong, try again')
            console.log(error);
            
        });

        if(successMsg && successMsg2 === 'Successful'){
            closeShowSingleCampaign();
            openShowAllCampaigns();
        }
    }

    return (
        <div className='bg-white rounded mt-1'>
            <div className='border-b border-grayborder px-4 py-2 flex items-center'>
                
                <div className='mr-6 md:mr-8'>
                    
                    <p className='text-didallablack text-sm font-bold'>{singleCampaign.name}</p>
                    <p className='text-sm'>Name</p>
                </div>
                <div className='mr-6 md:mr-8'>
                    <p className='text-didallablack text-sm font-bold'>${singleCampaign.budget}</p>
                    <p className='text-sm text-didallabody'>Budget</p>
                </div>
                <div className='mr-6 flex items-center'>
                    
                    <div className='text-sm text-didallabody mr-2'>
                        <p className='text-didallablack text-sm font-bold'>{singleCampaign.brief}</p>
                        <p className='text-sm text-didallabody'>Goal</p>
                    </div>
                </div>
            </div>
           <form action="" onSubmit={handleSubmit}>
            
           <div className=' px-4 py-2 mb-3'>
                <p className='text-sm text-didallabody mb-5'>Please provide your submissions for the campaign tasks carried out below</p>
                <h1 className='text-xl text-didallablack font-bold mb-2'>Task 1</h1>
                {/* <p className='text-didallabody text-sm mb-2'>Create an Instagram video with over 50,000 views for our new product</p> */}
                <div className='flex flex-row justify-start items-center'>
                    <div className='text-black bg-downloadgray p-3 h-full'>
                        <img src="/images/Link.svg" alt="Link Logo" />
                    </div>
                    <div className='w-full'>
                        <input type="text" name='submission1' 
                        value={submission1} onChange={handleOnChange}
                        id='submission1' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                            placeholder='https://www.instagram.com/p/CPBVuTls3j4/'
                        />
                    </div>
                </div>
                {errors.submission1 && dirty.submission1 && (
                    <p className='text-red-500 text-xs'>{errors.submission1}</p>
                )}
            </div>

            <div className=' px-4 py-2 mb-3'>
                <h1 className='text-xl text-didallablack font-bold mb-2'>Task 2</h1>
                {/* <p className='text-didallabody text-sm mb-2'>Draft a script for all acts for our next advertisement program</p> */}
                <div className='flex flex-row justify-start items-center'>
                    <div className='text-black bg-downloadgray p-3 h-full'>
                        <img src="/images/Link.svg" alt="Link Logo" />
                    </div>
                    <div className='w-full'>
                        <input type="text" name='submission2' 
                        value={submission2} onChange={handleOnChange}
                        id='submission2' className='text-sm w-full border border-grayborder p-3 focus:outline-none focus:border-darkdidalla'
                            placeholder='https://docs.google.com/document/u/3/d/1K8Z0Mtmna46faQ1f0'
                        />
                    </div>
                </div>
                {errors.submission2 && dirty.submission2 && (
                    <p className='text-red-500 text-xs'>{errors.submission2}</p>
                )}
            </div>

            <div className='flex flex-row items-center justify-end mt-4 mb-4 px-4'>
                <div className='flex items-center justify-end'>
                    <button type='button' className="mr-3 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2"
                        onClick={()=>{
                            closeShowSingleCampaign();
                            openShowAllCampaigns();
                        }}
                        >
                        Cancel
                    </button>
                </div>
            {
                errors.submission1 || submission1.length===0 || errors.submission2 || submission2.length===0                      
                ?
                <div className='flex items-center justify-end'>
                    <button type='submit' className="pointer-events-none opacity-50 block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                        Submit
                    </button>
                </div> :
                <div className='flex items-center justify-end'>
                    <button type='submit' className="block w-full md:w-auto py-3 px-6 md:px-12 text-center bg-didalla rounded border border-didalla
                        font-bold text-white text-sm hover:bg-green-600 focus:outline-none mb-2">
                        {isSubmitting && isSubmitting2 ? <BeatLoader color={color}  loading={isSubmitting && isSubmitting2 } css={override} size={15} />:<span>Submit</span>}
                    </button>
                </div>

            }
            </div>
            <div className='flex justify-end pr-2 py-1'>
                {
                    isSubmitting && isSubmitting2 === false && errMsg || errMsg2 && <div className='text-sm text-red-400'>{errMsg}</div> 
                }
            </div>
            <div className='flex justify-end pr-2 py-1'>
                {
                    successMsg && successMsg2 && <div className='text-sm text-didalla'>Campaign created successfully</div> 
                }
            </div>
           </form>
            
        </div>
    )
}

export default SingleBoosterCampaign
