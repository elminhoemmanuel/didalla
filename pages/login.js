import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import React, { useState } from 'react';
import useForm from '../components/useForm';
import axios from 'axios'
import StepLoginDetails from '../components/StepLoginDetails';
import StepLoginComplete from '../components/StepLoginComplete';




const Login = () => {


    //React hooks used 
    const [activeStep, setActiveStep] = useState(0);

    const [responsegotten, setresponsegotten] = useState("");
    const [isloading, setIsLoading] = useState(false);

    const [showSpinner , setShowSpinner] = useState(false)

    const handleNext = () =>{
        setActiveStep (prevActiveStep => prevActiveStep +1);
    } 

    function getStepsContent (stepIndex){
        switch (stepIndex) {
            case 0:
                return <StepLoginDetails 
                handleNext={handleNext} 
                values={values}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                email={email}
                password={password}
                handleFormSubmit={handleFormSubmit}
                showSpinner={showSpinner}
                 />
            
            case 1:
                return <StepLoginComplete responsegotten={responsegotten} isloading={isloading}/>
            default:
                return <StepLoginComplete responsegotten={responsegotten} isloading={isloading}/>
        }
    }

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""},
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
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
    const {email, password} = values;

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setShowSpinner(!showSpinner);
        setTimeout(() => {
            handleNext();
            axios.post('https://api.didalla.com/api/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                setIsLoading(false)
                console.log(response.data.message);
                setresponsegotten(response.data.message)
            }, (error) => {
                setIsLoading(false)
                console.log(error);
                setresponsegotten("Invalid email or password")
            });
        }, 1000);
    }

    

    return ( 

        <>
            <Head>
                <title>Didalla | Login</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24 h-screen '>
                {getStepsContent(activeStep)}
                
            </div>
        </>
     );
}
 
export default Login;