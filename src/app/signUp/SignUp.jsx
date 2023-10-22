"use client"
import React, { useState } from 'react';

import './login.css'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {

  const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
  
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
          <p>Registered User:{router.push('/')}</p>
        </div>
      );
    }

    return (
  
                 <div className='background-login'>
 <div className="login">
 <form className='w-25 login-margin'>
  <div className="mb-3 ">
    <input type="text" placeholder='Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>


  <div className="mb-3 ">
    <input type="number" placeholder='Phone Number' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>


  <div className="mb-3 ">
    <input type="email" 
   
    placeholder='Email'
    
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
   
    <input type="password" 
   
    placeholder='Password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary"  onClick={() => createUserWithEmailAndPassword(email, password)}>Submit</button>
<br/>
  <div className="mt-3">
  <Link href ="/login" className='text-danger text-decoration-none' >
    Sign In 
  </Link>
  </div>
</form>
 </div>
  </div>
    
    );
};

export default SignUp;