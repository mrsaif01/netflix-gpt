import React from 'react'
import Header from './Header'

const Register = () => {
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src='../assets/bg.jpg' alt='Background'/>
        </div>
        <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>Sign Up</h1>
            <input 
                type="email" 
                placeholder="Email Address w-full" 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                type="password" 
                placeholder="Password" 
                className='p-4 my-4 w-full bg-gray-700' 
            />
            <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>Register</button>
           <p className='py-4 text-white'>Already have account ? Sign In</p>
        </form>
    </div>
  )
}

export default Register