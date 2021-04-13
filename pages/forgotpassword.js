import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import React, { useState } from 'react';
import useForm from '../components/useForm';
import axios from 'axios'
import StepResetPasswordComplete from '../components/StepResetPasswordComplete';
import StepEnterResetPassword from '../components/StepEnterResetPassword';



const Login = () => {

    const [resetMessage, setresetMessage] = useState('')

    const [activeStep, setActiveStep] = useState(0);

    const [isloading, setIsloading] = useState(false);

    const handleNext = () =>{
        setIsloading(true);
        setActiveStep (prevActiveStep => prevActiveStep +1);
    } 

    function getStepsContent (stepIndex){
        switch (stepIndex) {
            case 0:
                return <StepEnterResetPassword 
                stateSchema={stateSchema}
                stateValidatorSchema={stateValidatorSchema}
                values={values}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                email={email}
                handleFormSubmit={handleFormSubmit}
                isloading={isloading}
                />
            case 1:
                return <StepResetPasswordComplete 
                resetMessage={resetMessage}
                isloading={isloading}
                />
            default:
                return 
        }
    }

    //Define the state schema used for validation
    const stateSchema = {
        email:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email} = values;

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        handleNext();

        axios.get(`https://api.didalla.com/api/send_password_recovery_email/${email}`)
          .then((response) => {
            console.log(response.data);
            setIsloading(false);
            setresetMessage(response.data.message);
          }, (error) => {
            setIsloading(false);
            console.log(error);
            setresetMessage('Something went wrong , plase try again')
          });

        
    }

    

    return ( 

        <>
            <Head>
                <title>Didalla | Reset_Paswword</title>
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