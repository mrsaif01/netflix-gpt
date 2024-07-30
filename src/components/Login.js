import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(preVel => !preVel)
    }   
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src='../assets/bg.jpg' alt='Background'/>
        </div>
        <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm? "Sign In" : "Sign Up" }</h1>
            {!isSignInForm && (
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className='p-4 my-4 w-full bg-gray-700'
                />
            )}
            <input 
                type="email" 
                placeholder="Email Address" 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                type="password" 
                placeholder="Password" 
                className='p-4 my-4 w-full bg-gray-700' 
            />
            <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>{ isSignInForm? "Sign In" : "Sign Up" }</button>
           <p 
             className='py-4 text-white cursor-pointer' 
             onClick={toggleSignInForm}>
               { isSignInForm? "New to Netflix ? Sign Up Now" : "Already have account ? Sign In" }
           </p>
        </form>
    </div>
  )
}

export default Login