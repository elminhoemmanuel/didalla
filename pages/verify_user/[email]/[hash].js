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


  useEffect(() => {

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
  }, [])

  return (

      <>

            <Head>
                <title>Didalla | Verify_User</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />

            <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto text-center pt-32' >
                    
                    <div className=' mb-4 flex justify-center items-center text-didalla'>
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                    </div>

                    {isloading ? 'Verifying...' : <p>{verifyresponse === "" ? <p>{verifyerror} You can contact us<Link href="/contact"><a className='text-didalla'> here</a></Link> </p> : <p>{verifyresponse}. You can <Link href="/login"><a className='text-didalla'> login here</a></Link>.</p>}</p>}

                    
                    
            </div>
      </>
  );
}

export default VerifyUser