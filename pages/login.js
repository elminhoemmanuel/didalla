import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import useForm from '../components/useForm';
import axios from 'axios'
import StepLoginDetails from '../components/StepLoginDetails';
import StepLoginComplete from '../components/StepLoginComplete';
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/actions/auth'


const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    

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
                // console.log(response);
                localStorage.setItem('userToken',response.data.access_token)
                localStorage.setItem('userFirstName',response.data.user.first_name)
                localStorage.setItem('userLastName',response.data.user.last_name)
                setUserRole(response.data.user.role)
                setIsOnboarded(response.data.user.reg_completed)
                dispatch(login(response.data));
                // console.log(userRole);
                // console.log(isOnboarded);
                setShowSpinner(false);
                
            }, (error) => {
                setIsLoading(false)
                setShowSpinner(false);
                // console.log(error);
                setresponsegotten("Something went wrong check your email and password or your connection, also ensure your account was not created using social login")
            });
    }

    useEffect(() => {
        if (userRole==="vendor"){
            router.push('/dashboard/vendor/')
        }else if (userRole==="booster"){
            router.push('/dashboard/booster/')
        }
        
    }, [userRole, isOnboarded])

    

    return ( 

        <>

            <Head>
                <title>Didalla | Login</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24 '>
                {getStepsContent(activeStep)}
                
            </div>
        </>
     );
}
 
export default Login;