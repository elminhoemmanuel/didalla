import React,{ useState, useEffect} from 'react'
import Head from 'next/head'
import LogoNavbar from '../../components/LogoNavbar'
import axios from 'axios';
import BoosterBodyStart from '../../components/BoosterBodystart';
import OnboardBoosterSide from '../../components/OnboardBoosterSide'
import BoosterBodySkills from '../../components/BoosterBodySkills';
import BoosterBodyDetails from '../../components/BoosterBodyDetails';


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

    const [booster, setBooster] = useState({
        country:'',
        city:'',
        phone:0,
    });

    const handleSetBoosterSkills = (value) => {
        setBooster({ ...booster, skills :value});
    };

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

            <div className='bg-onboardinggray grid grid-cols-1 md:grid-cols-8 h-screen  '>
                <OnboardBoosterSide activeStep={activeStep} />
                {getStepsContent(activeStep)}
            </div>
        </>
    )
}

export default booster
