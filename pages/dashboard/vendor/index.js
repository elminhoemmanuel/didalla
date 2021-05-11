import React,{ useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import VendorDashHome from '../../../components/VendorDashHome';
import useForm from '../../../components/useForm'

const vendor = () => {

    //Define the state schema used for validation
    const stateSchema = {
        searchtext:{value:"" , error:""},
    }

    const stateValidatorSchema ={
        searchtext:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"must be more than one character without space inbetween"
            }
        },
        
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {searchtext} = values;

    return (
        <>
            <Head>
                <title>Didalla | Dashboard</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <div className=''>
                <VendorDashHome searchtext={searchtext}
                errors={errors}
                dirty={dirty}
                handleOnChange={handleOnChange}
                />

            </div>
        </>
    )
}

export default vendor
