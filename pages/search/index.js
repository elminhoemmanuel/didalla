import React , {useState, useEffect} from 'react'
import Head from 'next/head'
import LogoNavbar from '../../components/LogoNavbar'
import Link from 'next/link';
import BrandInfo from '../../components/BrandInfo';
import BrandBudget from '../../components/BrandBudget';
import CampaignPlatforms from '../../components/CampaignPlatforms';
import useForm from '../../components/useForm';
import DisplayCreators from '../../components/DisplayCreators';
import { useRouter } from 'next/router'
import axios from 'axios';



const campaign = ({ countries }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Define the state schema used for validation
    const stateSchema = {
        brandname:{value:"" , error:""},
        brandlocation:{value:"" , error:""},
        brandbudget:{value:0 , error:""},
        startdate:{value:"" , error:""},
        enddate:{value:"" , error:""},
        campaignbrief:{value:"" , error:""},
        campaigngoal:{value:"" , error:""},
        
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
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
        campaigngoal:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{2,}$/.test(value),
                error:"Must be more than two character "
            }
        },
    }

    // brand platforms
    const [brandPlatforms, setBrandPlatforms] = useState({facebook:false, instagram:false, twitter:false,
    linkedIn:false, youtube:false});

    const obtainPlatform = (platform,value) =>{
        setBrandPlatforms({...brandPlatforms,[platform]:value});
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema);
    const {brandname, brandbudget, startdate, enddate, campaignbrief ,campaigngoal} = values;

    // user body details
    const [userDetails, setUserDetails] = useState({country:'',city:''});

    const obtainCountry = (detail,value) =>{
        setUserDetails({...userDetails,[detail]:value});
    }

    const [activeStep, setActiveStep] = useState(1);
    const handleNext = () =>{
        
        setActiveStep (prevActiveStep => prevActiveStep +1);
    }
    const handleBack = () =>{
        setActiveStep (prevActiveStep => prevActiveStep -1);
    }

    
    const [boostersArray, setboostersArray] = useState([])

    //function to submit form finally
    const submitSearch = () =>{
        setIsSubmitting(true)

        const userToken = localStorage.getItem('userToken');

        const key = 'I need to promote'

        const interestsArray = [];

        for (platform in brandPlatforms){
            if (brandPlatforms[platform] === true){
                interestsArray.push(platform);
            }
        }

        // console.log(interestsArray);

        const formdata = new FormData();
        formdata.append("key", key)
        formdata.append("city", userDetails.city)
        formdata.append("country", userDetails.country)
        formdata.append("brand_name", brandname)
        formdata.append("budget", brandbudget)
        formdata.append("start_date", startdate)
        formdata.append("end_date", enddate)
        formdata.append("brief", campaigngoal)
        formdata.append("platform", JSON.stringify(interestsArray))
        

        axios.post('https://api.didalla.com/api/vendor/search',formdata)
        .then((response) => {
            console.log(response.data.data);
            response.data.data.map(item =>(
                boostersArray.push(item)
            ))
            // setboostersArray({...boostersArray,boosters:response.data.data})
            console.log(boostersArray);
            setIsSubmitting(false)

        }, (error) => {
            setIsSubmitting(false)
            console.log(error);
            
        });

        handleNext();

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
                obtainCountry={obtainCountry}
                userDetails={userDetails}
                countries={countries}
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
                campaigngoal={campaigngoal}
                 />
            
            case 3:
                return <CampaignPlatforms 
                handleNext={handleNext}
                handleBack={handleBack}
                obtainPlatform={obtainPlatform}
                brandPlatforms={brandPlatforms}
                submitSearch={submitSearch}
                isSubmitting={isSubmitting}
                 />
            case 4:
                return <DisplayCreators 
                handleBack={handleBack}
                boostersArray={boostersArray}
                isSubmitting={isSubmitting}
                 />
            
            
            
        }
    }

    return (

        <>
            <Head>
                <title>Didalla | Search</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='pt-32 pb-10'>
                {getStepsContent(activeStep)}
            </div>

            
        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://api.didalla.com/api/misc/countries')
    const countries = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        countries,
      },
    }
  }

export default campaign