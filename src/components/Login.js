import React, { useState } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import { useGlobalContext } from './Context'

export default function Login() {
    const { signIn, signUpUser } = useGlobalContext()
    return (
        <>
            {signIn ? <SignIn /> : <SignUp />}
        </>
    );
}