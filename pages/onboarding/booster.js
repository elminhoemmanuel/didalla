import React,{ useState, useEffect} from 'react';
import Head from 'next/head';
import LogoNavbar from '../../components/LogoNavbar';
import axios from 'axios';
import OnboardBoosterSide from '../../components/OnboardBoosterSide';
import BoosterBodyStart from '../../components/BoosterBodystart';
import BoosterBodyDetails from '../../components/BoosterBodyDetails';
import BoosterBodyPicture from '../../components/BoosterBodyPicture';
import BoosterBodyInterests from '../../components/BoosterBodyInterests';
import BoosterBodySocial from '../../components/BoosterBodySocial';


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

    const [activeStep, setActiveStep] = useState(1);
    const handleNext = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep +1);
    }
    const handleBack = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep -1);
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
                 />
            case 3:
                return <BoosterBodyPicture
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                 />
            case 4:
                return <BoosterBodyInterests
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                 />
            case 5:
                return <BoosterBodySocial
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
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
