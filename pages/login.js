import Head from 'next/head'
import LogoNavbar from '../components/LogoNavbar'
import Link from 'next/link';
import { useState } from 'react';
import AuthButton from '../components/AuthButton';



const Login = () => {

    const [user, setUser] = useState({email:'', password:''});

    return ( 

        <>
            <Head>
                <title>Didalla | Login</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />
            <div className='pt-24 h-screen '>
                {/* collect email */}
                <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Welcome Back</h1>
                        <p className='text-xs text-didallabody mb-3'>Login to your account to continue using our services</p>
                    </div>

                    <Link href="">
                        <a className='block mb-5'>
                            <button type='button' className="p-4 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                                <div className='mr-2'><img className='' src="images/GoogleLogo.svg" alt="Google logo"/></div> 
                                <div>Continue with Google</div>
                            </button>

                        </a>
                    </Link>

                    <p className='text-center text-black text-sm'>OR</p>

                    <form action="" className='mt-6 mb-3' >
                        <div className=''>
                            {/* Email */}
                            <div className='mb-3'>
                                <div className='mb-1'><label htmlFor="email" className='text-didallabody text-sm'>Email Address</label></div>
                                <div >
                                    <input className='p-4 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="email"
                                    id='email'
                                    value={user.email}
                                    onChange={(e) =>{setUser({...user, email:e.target.value})}}
                                    placeholder='Enter your email address here'
                                    required
                                    />
                                </div>
                            </div>
                            {/* password */}
                            <div className='mb-3'>
                                <div className='mb-1'><label htmlFor="email" className='text-didallabody text-sm'>Password</label></div>
                                <div>
                                    <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                    type="password"
                                    id='userpassword'
                                    value={user.password}
                                    onChange={(e) =>{setUser({...user, password:e.target.value})}}
                                    placeholder='Enter your password'
                                    required
                                    />
                                </div>
                            </div>

                            <AuthButton buttonText='Continue' />

                        </div>
                    </form>

                    <div>
                        <Link href="/register"><a className='text-didallabody text-sm'>Not yet a member? <span className='text-didalla'>Create your account now!</span></a></Link>
                    </div>
                    
                </div>


                
            </div>
        </>
     );
}
 
export default Login;
