import React,{ useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import axios from 'axios';
import useForm from '../../components/useForm';
import OnboardBoosterSide from '../../components/OnboardBoosterSide';
import BoosterBodyStart from '../../components/BoosterBodystart';
import BoosterBodyDetails from '../../components/BoosterBodyDetails';
import BoosterBodyPicture from '../../components/BoosterBodyPicture';
import BoosterBodyInterests from '../../components/BoosterBodyInterests';
import BoosterBodySocial from '../../components/BoosterBodySocial';
import BoosterBodyRates from '../../components/BoosterBodyRates';
import BoosterBodyOverview from '../../components/BoosterBodyOverview';
import { useRouter } from 'next/router'


const booster = () => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userValues, setUserValues] = useState({first_name:'',last_name:''})
    const [countries, setCountries] = useState([])
    

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        //axios call for creator country details
        axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            setIsLoading(false);
            // console.log(response.data.data);
            response.data.data.map(item =>{
               countries.push(item);
            })
            
            
        }, (error) => {
          console.log(error)
        });

        axios.get(`https://api.didalla.com/api/user`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                setUserValues({...userValues, first_name:response.data.first_name,
                    last_name:response.data.last_name
                })
            }, (error) => {
            console.log(error)
        });       
                
    }, [])

    

    //Define the state schema used for validation
    const stateSchema = {
        instagram:{value:"" , error:""},
        twitter:{value:"" , error:""},
        youtube:{value:"" , error:""},
        linkedIn:{value:"" , error:""},
        substack:{value:"" , error:""},
        basicGross:{value:0 , error:""},
        standardGross:{value:0 , error:""},
        premiumGross:{value:0 , error:""},
        overview:{value:'' , error:""},
    }

    const stateValidatorSchema ={
        fileUrl:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"invalid file format"
            }
        },
        instagram:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"username must contain atleast one character"
            }
        },
        twitter:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"username must contain atleast one character"
            }
        },
        youtube:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"username must contain atleast one character"
            }
        },
        linkedIn:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"username must contain atleast one character"
            }
        },
        substack:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"username must contain atleast one character"
            }
        },
        basicGross:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Rate must contain atleast one number"
            }
        },
        standardGross:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Rate must contain atleast one number"
            }
        },
        premiumGross:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Rate must contain atleast one number"
            }
        },
        overview:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"overview must be more than two characters "
            }
        },
        
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {instagram, twitter, youtube, linkedIn, substack, basicGross, standardGross, premiumGross, overview} = values;

    const [activeStep, setActiveStep] = useState(1);
    const handleNext = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep +1);
    }
    const handleBack = () =>{
        setActiveStep (prevActiveStep => prevActiveStep -1);
    }

    //user body details
    const [userDetails, setUserDetails] = useState({country:'',city:'',phone:'', pic:{}});

    const obtainCountry = (detail,value) =>{
        setUserDetails({...userDetails,[detail]:value});
    }

    //user interests
    const [userInterests, setUserInterests] = useState({arts:false, auto:false, fintech:false, 
    crypto:false, food:false, fashion:false, lifestyle:false, politics:false, tech:false, agric:false,
    tourism:false, others:false});

    const obtainInterest = (interest,value) =>{
        setUserInterests({...userInterests,[interest]:value});
    }

    const picInput = useRef();
    

    //function to submit booster form finally
    const submitBooster = () =>{
        setIsSubmitting(!isSubmitting)
        const userToken = localStorage.getItem('userToken');
        // console.log(userDetails)

        const interests = [
            {arts:userInterests.arts},
            {auto:userInterests.auto},
            {fintech:userInterests.fintech},
            {crypto:userInterests.crypto},
            {food:userInterests.food},
            {fashion:userInterests.fashion},
            {lifestyle:userInterests.lifestyle},
            {politics:userInterests.politics},
            {tech:userInterests.tech},
            {agric:userInterests.agric},
            {tourism:userInterests.tourism},
            {others:userInterests.others},
        ]

        const formdata = new FormData();
        formdata.append("image", userDetails.pic)
        formdata.append("city", userDetails.city)
        formdata.append("country", userDetails.country)
        formdata.append("phone", userDetails.phone)
        formdata.append("bio", userDetails.overview)
        formdata.append("interests", JSON.stringify(interests))
        formdata.append("instagram", instagram)
        formdata.append("twitter", twitter)
        formdata.append("youtube", youtube)
        formdata.append("facebook", substack)
        formdata.append("linkedin", linkedIn)
        formdata.append("basic_plan", basicGross)
        formdata.append("standard_plan", standardGross)
        formdata.append("premium_plan", premiumGross)

        axios.post('https://api.didalla.com/api/booster/create',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            router.push('/dashboard/booster/')

        }, (error) => {
            setIsSubmitting(false)
            console.log(error);
            
        });
    }

    function getStepsContent (stepIndex){
        switch (stepIndex) {
            case 1:
                return <BoosterBodyStart 
                handleNext={handleNext} 
                userValues={userValues}
                activeStep={activeStep}
                isLoading={isLoading}
                 />
            case 2:
                return <BoosterBodyDetails
                activeStep={activeStep}
                countries={countries}
                handleBack={handleBack}
                handleNext={handleNext}
                obtainCountry={obtainCountry}
                userDetails={userDetails}
                 />
            case 3:
                return <BoosterBodyPicture
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                picInput={picInput}
                obtainCountry={obtainCountry}
                userDetails={userDetails}
                 />
            case 4:
                return <BoosterBodyInterests
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                obtainInterest={obtainInterest}
                userInterests={userInterests}
                 />
            case 5:
                return <BoosterBodySocial
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                instagram={instagram}
                twitter={twitter}
                youtube={youtube}
                linkedIn={linkedIn}
                substack={substack}
                 />
            case 6:
                return <BoosterBodyRates
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                basicGross={basicGross}
                standardGross={standardGross}
                premiumGross={premiumGross}
                 />
            case 7:
                return <BoosterBodyOverview
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                overview={overview}
                submitBooster={submitBooster}
                isSubmitting={isSubmitting}
                 />
        }
    }

    

    return (
        <>

            <Head>
                <title>Didalla | Onboarding</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className='bg-onboardinggray md:bg-transparent grid grid-cols-1 md:grid-cols-8 h-full'>
                <OnboardBoosterSide activeStep={activeStep} />
                {getStepsContent(activeStep)}
            </div>
        </>
    )
}

export default booster
