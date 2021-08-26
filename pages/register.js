import React, {useState, useEffect} from 'react'
import StepEmail from '../components/StepEmail'
import StepPassword from '../components/StepPassword'
import StepComplete from '../components/StepComplete'
import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import useForm from '../components/useForm'
import { useRouter } from 'next/router'


const Register = () => {


    //React hooks used 
    const { query } = useRouter(null);
    const [fromLanding, setFromLanding] = useState({})
    const [activeStep, setActiveStep] = useState(0);
    const [isloading, setIsLoading] = useState(false);
    const [responsegotten, setresponsegotten] = useState("");

    const [showSpinner , setShowSpinner] = useState(false);
    useEffect(() => {
        setFromLanding(query)
    }, [query]);

    const handleSetActiveStep = () =>{
        setActiveStep(0);
    }

    const handleShowSpinner = () =>{
        setShowSpinner(!showSpinner);
    }

    const handleSetResponse = (value) =>{
        setresponsegotten(value);
    }
    const handleSetLoading = (value) =>{
        setIsLoading(value);
    }

    const handleNext = () =>{
        setActiveStep (prevActiveStep => prevActiveStep +1);
    } 

    function getStepsContent (stepIndex){
        switch (stepIndex) {
            case 0:
                return <StepEmail 
                handleNext={handleNext} 
                values={values}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                email={email}
                firstname={firstname}
                lastname={firstname}
                password={password}
                 />
            case 1:
                return <StepPassword
                handleNext={handleNext}
                values={values}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                email={email}
                firstname={firstname}
                lastname={lastname}
                password={password}
                confpassword={confpassword}
                handleSetLoading={handleSetLoading}
                handleSetResponse={handleSetResponse}
                responsegotten={responsegotten}
                handleShowSpinner={handleShowSpinner}
                showSpinner
                />
            case 2:
                return <StepComplete email={email} handleSetActiveStep={handleSetActiveStep} responsegotten={responsegotten} isloading={isloading} showSpinner={showSpinner}/>
        }
    }

    //Define the state schema used for validation
    const stateSchema = {
        email:{value: query.email ? query.email : "" , error:""},
        firstname:{value:"" , error:""},
        lastname:{value:"" , error:""},
        password:{value:"" , error:""},
        confpassword:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        firstname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"First name must be more than one character without space inbetween"
            }
        },
        lastname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Last name must be more than one character without space inbetween"
            }
        },
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        },
        password:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        },
        confpassword:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email, firstname, lastname, password, confpassword} = values;

    return (
        <>
            <Head>
                <title>Didalla | Register</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24 '>
                {getStepsContent(activeStep)}
            
            </div>
        </>
    )
}

export default Register
