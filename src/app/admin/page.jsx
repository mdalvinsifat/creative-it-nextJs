"use client"
import React, { useState } from 'react';
import './admin.css'
import axios from 'axios'
import LayOut from '../Layout/LayOut';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
const [email , setEmail]= useState("")
const [password , SetPassword]= useState("")
const SignIn = async (e)=>{
    e.preventDefault()
    try {
        await axios.post(`http://localhost:3000/api/auth/login`,{
            email,
            password
        })
       router.push("/admin/create")
    } catch (error) {
        console.log(error)
    }
}
    return (
        <div>
  
            <LayOut>
         <div className='background-login'>
 <div className="login">
 <form className='w-25 login-margin' onSubmit={SignIn}>
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
     onChange={(e) => SetPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
<br/>
  <div className="mt-3">
  
  </div>
</form>
 </div>
  </div>

          
       </LayOut>
        </div>
    );
};

export default page;