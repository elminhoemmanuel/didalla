import Head from 'next/head'
import LogoNavbar from '../../components/LogoNavbar'
import Link from 'next/link';
import { useState } from 'react';
import AuthButton from '../../components/AuthButton';



const RegisterEmail = () => {

    const [nextstage , setNextStage] = useState(true);

    const [user, setUser] = useState({email:'', username:'', password:'' , passwordConfirm:''});

    return ( 

        <>
            <Head>
                <title>Didalla | Register</title>
                <meta name="keywords" content="didalla content-creators marketplace content"/>
                <meta name="description" content="Marketplace to book advertsing gigs with content creators"/>
            </Head>

            <LogoNavbar />
            <div className='pt-24 h-screen '>
                {/* collect email */}
                <div className={nextstage ?'w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto hidden' : 'w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'}>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Get started with <br/> <span className='text-didalla'>Didalla</span> for Free</h1>
                        <p className='text-xs text-didallabody mb-3'>Sign Up to your free account to access our services</p>
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

                    <Link href="">
                        <a className='block mb-5'>
                            <button type='button' className="p-4 flex flex-row items-center justify-center w-full bg-transparent rounded text-sm border border-grayborder
                            font-bold text-didallatitle hover:shadow-lg transform hover:scale-105 focus:outline-none">
                                <div className='mr-2'><img className='' src="images/FacebookLogoRegister.svg" alt="Google logo"/></div> 
                                <div>Continue with Facebook</div>
                            </button>

                        </a>
                    </Link>

                    <p className='text-center text-black text-sm'>OR</p>

                    <form action="" className='mt-6 mb-3'>
                        <div className='mb-4'>
                            <div className='mb-2'><label htmlFor="email" className='text-didallabody text-sm'>Email Address</label></div>
                            <div>
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

                        <AuthButton buttonText='Continue' />

                    </form>

                    <div>
                        <Link href=""><a className='text-didallabody text-sm'>Already have an account? <span className='text-didalla'>Log In</span></a></Link>
                    </div>
                    
                </div>

                {/* collect username and password */}
                <div className={nextstage ?'w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block' : 'w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto hidden'}>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Complete your account <br/> setup</h1>
                    </div>

                    <div className="">

                    </div>

                    <form action="" className='mt-4 mb-3'>
                        <div className='mb-2'>
                            <div className='mb-1'><label htmlFor="email" className='text-didallabody text-sm'>Username</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="text"
                                 id='username'
                                 value={user.username}
                                 onChange={(e) =>{setUser({...user, username:e.target.value})}}
                                 placeholder='Choose a username'
                                 required
                                />
                            </div>
                        </div>

                        <div className='mb-2'>
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

                        <div className='mb-3'>
                            <div className='mb-1'><label htmlFor="email" className='text-didallabody text-sm'>Confirm Password</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="password"
                                 id='userconfirmpassword'
                                 value={user.passwordConfirm}
                                 onChange={(e) =>{setUser({...user, passwordConfirm:e.target.value})}}
                                 placeholder='Confirm your password'
                                 required
                                />
                            </div>
                        </div>

                        <div className='mb-3'>
                            <input type="checkbox" id="termsAgree" name="terms" value="termsAgree" className='checked:bg-didalla checked:border-transparent' required/>&nbsp;
                            <label htmlFor="terms" className='text-xs'>Yes, I understand and agree to the <a className='text-didalla' href="">Didalla Terms of service</a>, Including the <a className='text-didalla' href="">User Agreement</a> and <a className='text-didalla' href="">Privacy Policy</a> </label>
                        </div>

                        <AuthButton buttonText='Create my account' />

                    </form>
                    
                </div>
            </div>
        </>
     );
}
 
export default RegisterEmail;
