import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setSignInForm(preVel => !preVel)
    }
    
    const handleButtonClick = () => {
        // Validate the form data
        const validationResult = validateData(name.current.value, email.current.value, password.current.value);
        setErrorMessage(validationResult);
        if (validationResult) {
            console.log(validationResult);
        } else {
            console.log("Both email and password are valid.");
        }
    }

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src='../assets/bg.jpg' alt='Background'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{ isSignInForm? "Sign In" : "Sign Up" }</h1>
            {!isSignInForm && (
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className='p-4 my-4 w-full bg-gray-700'
                    ref={name}
                />
            )}
            <input 
                type="email" 
                placeholder="Email Address" 
                className='p-4 my-4 w-full bg-gray-700'
                ref={email}
            />
            <input 
                type="password" 
                placeholder="Password" 
                className='p-4 my-4 w-full bg-gray-700'
                ref={password} 
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button 
            className='p-2 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{ isSignInForm? "Sign In" : "Sign Up" }</button>
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