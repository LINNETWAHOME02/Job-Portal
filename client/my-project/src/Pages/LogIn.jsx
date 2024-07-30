import React from 'react'
import app from '../firebase/firebase.config.js'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const LogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)

        }).catch((error) => {
            const errorMessage = error.message;
            //The email of the user's account used
            const email = error.customData.email;
            //The AuthCredential type that was used
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-orange-500 px-8 py-2 text-white rounded' onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default LogIn