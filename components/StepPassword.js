import React, { useState } from 'react'
import useForm from './useForm'
import AuthButton from '../components/AuthButton';
import AuthButtonDisabled from '../components/AuthButtonDisabled';
import axios from 'axios'

export const getStaticProps = async () =>{
    const res = await fetch('api.didalla.com/api/register', {
        body: JSON.stringify(values),
        headers: {
            Authorization: Bearer [token],
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
  
    const result = await res.json()

    return {
        props:{ response:result }
    }
}

const StepPassword = ({
    handleNext, 
    errors,
    dirty,
    handleOnChange,
    username,
    email,
    password,
    response,
    confirmPassword,
    values
}) => {

    const [checkboxValue, setCheckboxValue] = useState(false)

    const checkbox = <input type="checkbox" id="termsAgree" name="terms" value={checkboxValue} onClick={() => setCheckboxValue(!checkboxValue)} className='checked:bg-didalla checked:border-transparent' required/>

    const handleFormSubmit = async event => {
        event.preventDefault()

        axios.post('https://api.didalla.com/api/register', {
            first_name: username,
            last_name: 'vary',
            email: email,
            password: password,
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    
        // const res = await fetch('https://api.didalla.com/api/register', {
        //   body: JSON.stringify({
        //     first_name: username,
        //     last_name: 'vary',
        //     email: email,
        //     password: password,
        //   }),
        //   headers: {
        //     'Authorization': 'Bearer [token]',
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'POST'
        // })
    
        // const result = await res.json()
        // consol.log(result.message)
        // result.user => 'Ada Lovelace'
      }

    return (
        <div className='w-3/4 md:w-1/2 lg:w-2/6 my-0 mx-auto block'>
                    <div className='mb-4'>
                        <h1 className='text-2xl font-bold text-didallatitle mb-3 tracking-wider'>Complete your account <br/> setup</h1>
                    </div>

                    <form action="" className='mt-4 mb-3' onSubmit={handleFormSubmit} >
                        <div className='mb-2'>
                            <div className='mb-1'><label htmlFor="username" className='text-didallabody text-sm'>Username</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="text"
                                 id='username'
                                 name="username"
                                 value={username}
                                 onChange={handleOnChange}
                                 placeholder='Choose a username'
                                 required
                                />
                                {errors.username && dirty.username && (
                                    <p className='text-red-500 text-xs'>{errors.username}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-2'>
                            <div className='mb-1'><label htmlFor="password" className='text-didallabody text-sm'>Password</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="password"
                                 id='password'
                                 name="password"
                                 value={password}
                                 onChange={handleOnChange}
                                 placeholder='Enter your password'
                                 required
                                />
                                {errors.password && dirty.password && (
                                    <p className='text-red-500 text-xs'>{errors.password}</p>
                                )}
                            </div>
                        </div>

                        <div className='mb-3'>
                            <div className='mb-1'><label htmlFor="password2" className='text-didallabody text-sm'>Confirm Password</label></div>
                            <div>
                                <input className='p-3 border border-grayborder rounded w-full focus:outline-none focus:border-didalla'
                                 type="password"
                                 id='password2'
                                 name="confirmPassword"
                                 value={confirmPassword}
                                 onChange={handleOnChange}
                                 placeholder='Confirm your password'
                                 required
                                />
                                {confirmPassword !== password ? (
                                    <p className='text-red-500 text-xs'>Passwords do not match</p>
                                ):null}
                            </div>
                        </div>

                        <div className='mb-3'>
                            {checkbox}&nbsp;
                            <label htmlFor="terms" className='text-xs'>Yes, I understand and agree to the <a className='text-didalla' href="">Didalla Terms of service</a>, Including the <a className='text-didalla' href="">User Agreement</a> and <a className='text-didalla' href="">Privacy Policy</a> </label>
                        </div>

                        {username.length === 0 ||password.length===0 || confirmPassword.length===0|| errors.username ||errors.password || confirmPassword !==password || checkboxValue === false
                        ? (<AuthButtonDisabled buttonText='Create my Account'/>) : 
                        (<AuthButton buttonText='Create my Account' />)}

                    </form>
                    
                </div>
    )
}

export default StepPassword
