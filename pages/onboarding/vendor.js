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

    const [vendor, setVendor] = useState({
        brandName:"", 
        companyType:"",
        country:"",
        budget:0,
        startDate:"",
        endDate:"",
        description:'',
        goal:'',
        location:'',
        startAge:"",
        endAge:"",
        gender:'',
        audienceDescription:'',
        socialInfluencer:false,
        contentWriter:false,
        photographer:false,
        youtuber:false
    });


    const handleNext = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep +1);
    }
    const handleBack = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep -1);
    }

    const handleChange = input => e => {
        setVendor({ ...vendor, [input] :e.target.value});
    };
    const handleChangeSkills = input => e => {
        setVendor({ ...vendor, [input] :e.target.name});
    };

    function getStepsContent (stepIndex){
        switch (stepIndex) {
            case 1:
                return <VendorBrandDetails 
                handleNext={handleNext}
                handleChange={handleChange}
                brandName={vendor.brandName}
                companyType={vendor.companyType}
                country={vendor.country}
                 />
            
            case 2:
                return <VendorCampaignDetails 
                handleNext={handleNext}
                handleBack={handleBack}
                handleChange={handleChange}
                budget={vendor.budget}
                startDate={vendor.startDate}
                endDate={vendor.endDate}
                description={vendor.description}
                goal={vendor.goal}
                 />
            
            case 3:
                return <VendorTargetAudience 
                handleNext={handleNext}
                handleBack={handleBack}
                handleChange={handleChange}
                location={vendor.location}
                startAge={vendor.startAge}
                endAge={vendor.endAge}
                gender={vendor.gender} 
                audienceDescription={vendor.audienceDescription}
                 />
            
            case 4:
                return <VendorFindCreators 
                handleNext={handleNext}
                handleBack={handleBack}
                handleChangeSkills={handleChangeSkills}
                socialInfluencer={vendor.socialInfluencer}
                contentWriter={vendor.contentWriter}
                photographer={vendor.photographer}
                youtuber={vendor.youtuber}
                
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

            <div className='pt-24 pb-10'>
                <OnboardingNav activeStep={activeStep}/>
                {getStepsContent(activeStep)}
            </div>

            
        </>
    )
}

export default vendor
