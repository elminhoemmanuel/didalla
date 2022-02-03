import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries, createCampaign } from "../redux/actions/vendorCampaigns";
import SpinnerPage from './SpinnerPage';
import { SHOW_START_CAMP } from "../redux/types";
import Select from 'react-select';
import PriBtn from './PriBtn';
import useForm from './useForm';
import axios from 'axios';

const StartCampaign = () => {

    const dispatch = useDispatch();
    const { countries } = useSelector(state => state.vendorCampaigns);
    const { user } = useSelector(state => state.auth);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const options = [
        { value: 'facebook', label: 'facebook' },
        { value: 'twitter', label: 'twitter' },
        { value: 'youtube', label: 'youtube' },
        { value: 'instagram', label: 'instagram' },
        { value: 'substack', label: 'substack' },
        { value: 'linkedin', label: 'linkedin' },

    ]

    const [cities, setCities] = useState([{ name: 'Select city' }])
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const [picObject, setPicObject] = useState()
    const [interestsBox, setinterestsBox] = useState([])

    useEffect(() => {
        obtainCountry('country', selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainCountry('city', selectedCity);
    }, [selectedCity])
    useEffect(() => {
        dispatch(getCountries(() => { setLoading(false) }))
    }, [])



    // Define the state schema used for validation
    const stateSchema = {
        name: { value: "", error: "" },
        brandbudget: { value: 0, error: "" },
        campaignbrief: { value: "", error: "" },
    }

    const stateValidatorSchema = {


        name: {
            required: true,
            validator: {
                func: value => /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error: "Budget must contain atleast one number"
            }
        },
        budget: {
            required: true,
            validator: {
                func: value => /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error: "Budget must contain atleast one number"
            }
        },
        brief: {
            required: true,
            validator: {
                func: value => /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error: "Budget must contain atleast one number"
            }
        },

    }

    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema);
    const { name, budget, brief } = values;

    // user body details
    const [userDetails, setUserDetails] = useState({ country: '', city: '', interests: [] });

    const obtainCountry = (detail, value) => {
        setUserDetails({ ...userDetails, [detail]: value });
    }

    const picInput = useRef();

    // const schema = yup.object().shape({
    //     name: yup.string("title must be a string").min(3, "title must not be less than 3 characters").required("title is required"),
    //     country: yup.string("country must be a string"),
    //     city: yup.string("city must be a string"),
    //     budget: yup.number("budget must be a number").required("budget is required"),
    //     brief: yup.string("brief must be a string").min(12, "brief must not be less than 12 characters").required("brief is required"),
    //     // network: yup.array("Select your desired networks").required("Select your desired networks"),

    // });

    const processCountry = ((country) => {
        setSelectedCountry(country)
        countries.map(item => {
            if (item.name === country) {
                axios.get(`https://api.didalla.com/api/misc/cities/${item.id}`)
                    .then((response) => {
                        setCities(response.data.data)
                    }, (error) => {
                        console.log(error)
                    });
            }
        })
    });

    // const { register, handleSubmit, trigger, control, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema),
    // });

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // console.log(interestsBox);
        // console.log(picObject);
        // console.log(selectedCity);
        // console.log(selectedCountry);
        // console.log(name);
        // console.log(budget);
        // console.log(brief);
        const formdata = new FormData();
        formdata.append("name", name)
        formdata.append("city", selectedCity)
        formdata.append("country", selectedCountry)
        formdata.append("budget", budget)
        formdata.append("brief", brief)
        formdata.append("network", JSON.stringify(interestsBox))
        formdata.append("file", picObject)
        dispatch(createCampaign( formdata, ()=>{ setSubmitting(false)}))
    };

    return (
        <div className="top-0 left-0 absolute py-3  w-full h-screen bg-gray-700 bg-opacity-50 
        flex flex-col items-center justify-center z-20">
            <div className="modal-box fixed w-4/5 lg:w-2/5 h-full bg-white border border-gray-100 overflow-y-auto rounded">
                <div className='px-6 py-2 border-b border-grayborder'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={() => { dispatch({ type: SHOW_START_CAMP }) }}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'>Post your campaign</h1></div>
                    </div>
                </div>

                {
                    loading ?

                        <SpinnerPage />

                        :

                        <div className='px-6 py-2'>
                            <form className="py-3" onSubmit={onSubmit}>
                                {/* <p className="text-didallabody text-sm pb-3">This is a brief you sent to one or more creators to determine what kind of content you would like the creator to submit</p> */}

                                <div className="mb-3">
                                    <div className="mb-1">
                                        <label htmlFor="name" className="text-didallatitle text-sm font-bold block mb-1">
                                            Campaign Title
                                        </label>
                                        <p className="text-didallabody text-xs">This is a brief you sent to one or more creators to determine what kind of content you would like the creator to submit</p>
                                    </div>
                                    <div>
                                        <input type="text" className="block w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-didalla"
                                            name="name"
                                            value={name}
                                            onChange={handleOnChange}
                                            placeholder="Promote my perfume"
                                        />
                                        {errors.name && dirty.name && (
                                            <p className='text-red-500 text-xs'>{errors.name}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-1">
                                        <label htmlFor="title" className="text-didallatitle text-sm font-bold block mb-1">
                                            Campaign Location (optional)
                                        </label>
                                        <p className="text-didallabody text-xs">Select a region you would want the campaign to run in</p>
                                    </div>
                                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                        <div>
                                            <select name="country" value={selectedCountry}
                                                onChange={(e) => { processCountry(e.target.value); }} id="country"
                                                className="block w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-didalla"
                                            >
                                                {countries.map((item) => (
                                                    <option key={item.id} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                                ))}
                                            </select>
                                            <p className='text-red-400 text-xs'>{errors.country?.message}</p>
                                        </div>

                                        <div>
                                            <select name="city" id="city" value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value) }}
                                                className="block w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-didalla"

                                            >
                                                {cities.map((item, x = 1) => {
                                                    return <option key={x++} className='p-1 hover:bg-didalla' value={item.name} >{item.name}</option>
                                                })}
                                            </select>
                                            <p className='text-red-400 text-xs'>{errors.city?.message}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-1">
                                        <label htmlFor="title" className="text-didallatitle text-sm font-bold block mb-1">
                                            Budget (in USD)
                                        </label>
                                        <p className="text-didallabody text-xs">How much are you willing to pay per post?</p>
                                    </div>
                                    <div>
                                        <input type="number" className="block w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-didalla"
                                            name="budget"
                                            value={budget}
                                            onChange={handleOnChange}
                                            placeholder="Promote my perfume"
                                        />
                                        {errors.budget && dirty.budget && (
                                            <p className='text-red-500 text-xs'>{errors.budget}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-1">
                                        <label htmlFor="title" className="text-didallatitle text-sm font-bold block mb-1">
                                            Campaign brief
                                        </label>
                                        <p className="text-didallabody text-xs">Give a summary of what the campaign is about and what is required by thecontent creator</p>
                                    </div>
                                    <div>
                                        <textarea rows="2" className="block w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-didalla"
                                            name="brief"
                                            value={brief}
                                            onChange={handleOnChange}
                                            placeholder="Promote my perfume by making a post about it on Instagram"
                                        >

                                        </textarea>
                                        {errors.brief && dirty.brief && (
                                            <p className='text-red-500 text-xs'>{errors.brief}</p>
                                        )}
                                    </div>
                                </div>

                                <div className='relative flex mb-3'>
                                    <div className=''>
                                        <input className='pl-10 pt-1' type="file"
                                            name="fileUrl"
                                            id="fileUrl"
                                            accept="image/png, image/jpeg"
                                            ref={picInput}
                                            onChange={e => {
                                                setPicObject(picInput.current.files[0]);

                                            }}
                                        />

                                    </div>

                                    <div className='absolute top-0 left-0 pointer-events-none bg-grayborder flex items-center rounded p-2 cursor-pointer'>
                                        <div><img src="/images/Link.svg" alt="attach picture icon" /></div>
                                        <div>Attach picture</div>
                                    </div>

                                </div>


                                <div className="mb-5">
                                    <div className="mb-1">
                                        <label htmlFor="title" className="text-didallatitle text-sm font-bold block mb-1">
                                            Choose networks
                                        </label>
                                        <p className="text-didallabody text-xs">This would be the platforms the creator would publish on. They are based on what the creator currently offers.</p>
                                    </div>
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

                                <div className="mb-2">
                                    <PriBtn
                                        btnType="submit"
                                        clicked={() => { }}
                                        btnText={<p>Start campaign</p>}
                                        addStyle="w-full flex items-center justify-center py-3"
                                    />
                                </div>

                            </form>
                        </div>

                }
            </div>

        </div>
    )
}

export default StartCampaign
