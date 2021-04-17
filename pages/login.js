import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import useForm from '../components/useForm';
import axios from 'axios'
import StepLoginDetails from '../components/StepLoginDetails';
import StepLoginComplete from '../components/StepLoginComplete';
import { useRouter } from 'next/router'



const Login = () => {

    const router = useRouter()

    //React hooks used 
    const [activeStep, setActiveStep] = useState(0);

    const [responsegotten, setresponsegotten] = useState("");
    const [isloading, setIsLoading] = useState(false);

    const [showSpinner , setShowSpinner] = useState(false)

    const [userRole, setUserRole] = useState('')
    const [isOnboarded, setIsOnboarded] = useState(0)

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
                responsegotten={responsegotten}
                 />
            
            case 1:
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
            axios.post('https://api.didalla.com/api/login', {
                email: email,
                password: password,
            })
            .then((response) => {
                setIsLoading(false)
                console.log(response.data);
                // setresponsegotten(response.data.message)
                setUserRole(response.data.user.role)
                setIsOnboarded(response.data.user.reg_completed)
                console.log(userRole);
                console.log(isOnboarded);
                
            }, (error) => {
                setIsLoading(false)
                setShowSpinner(false);
                console.log(error);
                setresponsegotten("Something went wrong check your email and password or your connection")
            });
    }

    useEffect(() => {
        if (userRole==="vendor" && isOnboarded===1){
            router.push('/dashboard/vendor')
        }else if (userRole==="vendor" && isOnboarded===0){
            router.push('/onboarding/vendor')
        }else if (userRole==="booster" && isOnboarded===1){
            router.push('/dashboard/booster')
        }else if (userRole==="booster" && isOnboarded===0){
            router.push('/onboarding/booster')
        }

        
    }, [userRole, isOnboarded])

    

    return ( 

        <>
            

            <div className='pt-24 '>
                {getStepsContent(activeStep)}
                
            </div>
        </>
     );
}
 
export default Login;