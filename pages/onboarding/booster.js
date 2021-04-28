import React,{ useState, useEffect} from 'react';
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


const booster = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [userValues, setUserValues] = useState({first_name:'',last_name:''})
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        //axios call for creator country details
        axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            setIsLoading(false);
            console.log(response.data.data.data);
            // setCountries(response.data.data.data)
            response.data.data.data.map(item =>{
               countries.push(item);
            })
            console.log('done')
            
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

    // const [phoneVal, setphoneVal] = useState('');
    // const getphone= (data) =>{
    //     console.log('displaying');
    //     console.log(data)
    //     setphoneVal(data)
    //     console.log(phoneVal);
    // }

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
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"overview must be more than two characters without space inbetween"
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
    const [userDetails, setUserDetails] = useState({country:'',city:'',phone:'', picUrl:''});

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
