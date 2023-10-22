"use client"
import React, { useState } from 'react';

import './login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import auth from '../Firebase';
import { useRouter } from 'next/navigation';

const Login = () => {
   const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
          <p>Signed In User: {router.push('/')}</p>
        </div>
      );
    }
    return (
   
         <div className='background-login'>
 <div className="login">
 <form className='w-25 login-margin'>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={() => signInWithEmailAndPassword(email, password)}>Submit</button>
<br/>
  <div className="mt-3">
  <Link href ="/signUp" className='text-danger text-decoration-none' >
    Sign Up Now
  </Link>
  </div>
</form>
 </div>
  </div>

     
    );
};

export default Login;