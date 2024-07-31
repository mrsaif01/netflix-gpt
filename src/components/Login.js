import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const name = useRef('Hi');
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setSignInForm(preVel => !preVel)
    }
    
    const handleButtonClick = () => {
        // Validate the form data
        const validationResult = validateData(email.current.value, password.current.value);
        setErrorMessage(validationResult);
        if(validationResult) return;

        // Sign In Sign Up Logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid, email, displayName, photoURL}))
                    navigate("/browse");
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - ' + errorMessage);
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ' - ' + errorMessage);
            });
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