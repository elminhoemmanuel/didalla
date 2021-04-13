import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head';
import LogoNavbar from '../../../components/LogoNavbar';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const VerifyUser = () => {
  const router = useRouter()
  const user_details = router.query
  const [verifyresponse, setverifyresponse] = useState("");
  const [verifyerror, setverifyerror] = useState("");
  const [isloading, setisloading] = useState(true)

  console.log(user_details.email);
  console.log(user_details.hash);

    useEffect(() => {

      if(user_details.email !== undefined && user_details.hash !== undefined){
        axios.get(`https://api.didalla.com/api/verify_email/${user_details.email}/${user_details.hash}`)
        .then((response) => {
          setisloading(false)
          console.log(response.data);
          setverifyresponse(response.data.message);
        }, (error) => {
          setisloading(false)
          console.log(error);
          setverifyerror("Something went wrong , it could be your account has already been verified");
        });
      }
    },[user_details])

  return (

      <>

            <Head>
                <title>Didalla | Verify_User</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto text-center pt-32' >
                    
                    

                    {isloading ? 'Verifying...' : <div className=' mb-4 flex flex-col justify-center items-center '>
                        <div className='text-didalla'>
                        {
                          verifyresponse === "" ? 
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg> 
                          :
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        }
                        </div>

                        <div>{
                        verifyresponse === "" ? <p>{verifyerror} You can contact us<Link href="/contact"><a className='text-didalla'> here</a></Link> </p> : <p>{verifyresponse} You can <Link href="/login"><a className='text-didalla'> login here</a></Link>.</p>
                        }</div>

                    </div>}
                    
                    
            </div>
      </>
  );
}

export default VerifyUser