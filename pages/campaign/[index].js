import React , {useState} from 'react'
import Head from 'next/head'
import LogoNavbar from '../../components/LogoNavbar'
import Link from 'next/link';
import BrandInfo from '../../components/BrandInfo';
import BrandBudget from '../../components/BrandBudget';
import CampaignPlatforms from '../../components/CampaignPlatforms';
import useForm from '../../components/useForm';
import DisplayCreators from '../../components/DisplayCreators';
import { useRouter } from 'next/router'


const campaign = () => {

    const router = useRouter()
    const enteredData = router.query;

    const [countries, setCountries] = useState([])

    //Define the state schema used for validation
    const stateSchema = {
        brandname:{value:"" , error:""},
        brandlocation:{value:"" , error:""},
        brandbudget:{value:0 , error:""},
        startdate:{value:"" , error:""},
        enddate:{value:"" , error:""},
        campaignbrief:{value:"" , error:""},
        
    }

    const stateValidatorSchema ={

        brandname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Brand name must be more than one character without space inbetween"
            }
        },
        brandlocation:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Brand location must be more than one character without space inbetween"
            }
        },
        brandbudget:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Budget must contain atleast one number"
            }
        },
        startdate:{
            required:true,
            validator:{
                func: value=> /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
        enddate:{
            required:true,
            validator:{
                func: value=> /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
        campaignbrief:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
    }

    //brand platforms
    const [brandPlatforms, setBrandPlatforms] = useState({facebook:false, instagram:false, twitter:false,
    linkedIn:false, youtube:false});

    const obtainPlatform = (platform,value) =>{
        setBrandPlatforms({...brandPlatforms,[platform]:value});
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {brandname, brandlocation , brandbudget, startdate, enddate, campaignbrief} = values;

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
                return <BrandInfo 
                handleNext={handleNext}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                brandname={brandname}
                brandlocation={brandlocation}
                 />
            
            case 2:
                return <BrandBudget 
                handleNext={handleNext}
                handleBack={handleBack}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                brandbudget={brandbudget}
                startdate={startdate}
                enddate={enddate}
                campaignbrief={campaignbrief}
                 />
            
            case 3:
                return <CampaignPlatforms 
                handleNext={handleNext}
                handleBack={handleBack}
                obtainPlatform={obtainPlatform}
                brandPlatforms={brandPlatforms}
                 />
            case 4:
                return <DisplayCreators 
                handleBack={handleBack}
                 />
            
            
            
        }
    }

    // console.log(campaignbrief);

    return (

        <>
            <Head>
                <title>Didalla | Campaign</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-24 pb-10'>
                {getStepsContent(activeStep)}
            </div>

            
        </>
    )
}

export default campaign
