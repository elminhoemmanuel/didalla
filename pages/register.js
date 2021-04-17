import React, {useState} from 'react'
import StepEmail from '../components/StepEmail'
import StepPassword from '../components/StepPassword'
import StepComplete from '../components/StepComplete'
import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import useForm from '../components/useForm'


const Register = () => {


    //React hooks used 
    const [activeStep, setActiveStep] = useState(0);
    const [isloading, setIsLoading] = useState(false);
    const [responsegotten, setresponsegotten] = useState("");

    const [showSpinner , setShowSpinner] = useState(false);

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
                handleSetLoading={handleSetLoading}
                handleSetResponse={handleSetResponse}
                responsegotten={responsegotten}
                handleShowSpinner={handleShowSpinner}

                />
            case 2:
                return <StepComplete handleSetActiveStep={handleSetActiveStep} responsegotten={responsegotten} isloading={isloading} showSpinner={showSpinner}/>
        }
    }

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""},
        firstname:{value:"" , error:""},
        lastname:{value:"" , error:""},
        password:{value:"" , error:""}
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
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email, firstname, lastname, password} = values;

    return (
        <>
            <Head>
                <title>Didalla | Register</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24 h-screen '>
                {getStepsContent(activeStep)}
            
            </div>
        </>
    )
}

export default Register
