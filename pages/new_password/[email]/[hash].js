import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head';
import LogoNavbar from '../../../components/LogoNavbar';
import React, { useState, useEffect } from 'react';
import useForm from '../../../components/useForm';
import StepNewPassword from '../../../components/StepNewPassword'
import StepNewPasswordComplete from '../../../components/StepNewPasswordComplete'



const NewPassword = () => {
    const router = useRouter()
    const user_details = router.query

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
                return <StepNewPassword 
                stateSchema={stateSchema}
                stateValidatorSchema={stateValidatorSchema}
                values={values}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                password={password}
                handleFormSubmit={handleFormSubmit}
                isloading={isloading}
                />
            case 1:
                return <StepNewPasswordComplete 
                resetMessage={resetMessage}
                isloading={isloading}
                />
            default:
                return 
        }
    }

    //Define the state schema used for validation
    const stateSchema = {
        password:{value:"" , error:""}
    }

    const stateValidatorSchema ={
        password:{
            required:true,
            validator:{
                func: value=> /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:"password must be up to 6 characters and contain atleast one special character e.g '@,#,$,%,^,&,?,>,<'"
            }
        }
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const { password } = values;

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        handleNext();

        axios.post('https://api.didalla.com/api/reset_password', {
            email: user_details.email,
            hash: user_details.hash,
            password: password,
        })
        .then((response) => {
            setIsloading(false)
            console.log(response.data);
            setresetMessage(response.data.message);
        }, (error) => {
            setIsloading(false)
            console.log(error);
            setresetMessage('Something went wrong , plase try again')
        });
    }


  return (

      <>

            <Head>
                <title>Didalla | New_Password</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24'>
                {getStepsContent(activeStep)}    
            </div>

      </>
  );
}

export default NewPassword