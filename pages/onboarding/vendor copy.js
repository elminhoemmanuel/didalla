import React , {useState} from 'react'
import Head from 'next/head'
import LogoNavbar from '../../components/LogoNavbar'
import OnboardingNav from '../../components/OnboardingNav'
import Link from 'next/link';
import VendorBrandDetails from '../../components/VendorBrandDetails';
import VendorCampaignDetails from '../../components/VendorCampaignDetails';
import VendorTargetAudience from '../../components/VendorTargetAudience';
import VendorFindCreators from '../../components/VendorFindCreators';

const vendor = () => {

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
                return <VendorBrandDetails 
                handleNext={handleNext} 
                
                 />
            
            case 2:
                return <VendorCampaignDetails 
                handleNext={handleNext} 
                
                 />
            
            case 3:
                return <VendorTargetAudience 
                handleNext={handleNext} 
                
                 />
            
            case 4:
                return <VendorFindCreators 
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

            <LogoNavbar />

            <div className='pt-24'>
                <OnboardingNav activeStep={activeStep}/>
                {getStepsContent(activeStep)}
            </div>

            
        </>
    )
}

export default vendor
