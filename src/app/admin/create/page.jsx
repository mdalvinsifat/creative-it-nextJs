"use client"
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav';
import FileBase from 'react-filebase64'
import { useRouter } from 'next/navigation';
import axios from 'axios';
const page = () => {
    const [name , setName ] = useState('')
    const [title , setTitle] = useState('')
    const [img , setImg] = useState('')
    const [skile , setSkile ] = useState('')
    const [skile1 , setSkile1 ] = useState('')
    const [skile2 , setSkile2] = useState('')
    const [skile3 , setSkile3 ] = useState('')
    const [skile4 , setSkile4 ] = useState('')
    
  
    const router = useRouter()
    const HandleSubmite = async(e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/api/course",{
                name:name,
                title:title,
                img:img,
                skile:skile, 
                skile1:skile1,
                skile2:skile2,
                skile3:skile3,
                skile4:skile4,
            })
            router.push("/admin/view")
            alert("Course Add")
        } catch (error) {
            console.log(error)
        }
    }




    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                <AdminNav>
            
            </AdminNav>
                </div>


                <div className="col-md-8 ms-5">
        <form className='w-50 mt-5 ms-5' onSubmit={HandleSubmite}>
  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Name' 
     name='name'
     value={name}
     onChange={(e) => setName(e.target.value )}
     aria-describedby="emailHelp" />
  </div>

 

  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='title' 
     name='title'
     value={title}
     onChange={(e) => setTitle(e.target.value )}
     aria-describedby="emailHelp" />
  </div>
 


  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Subject-1' 
     name='skile'
     value={skile}
     onChange={(e) => setSkile(e.target.value )}
     aria-describedby="emailHelp" />
  </div>
 



  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Subject-2' 
     name='skile1'
     value={skile1}
     onChange={(e) => setSkile1(e.target.value )}
     aria-describedby="emailHelp" />
  </div>
 


  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Subject-3' 
     name='skile2'
     value={skile2}
     onChange={(e) => setSkile2(e.target.value )}
     aria-describedby="emailHelp" />
  </div>
 
  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Subject-4' 
     name='skile3'
     value={skile3}
     onChange={(e) => setSkile3(e.target.value )}
     aria-describedby="emailHelp" />
  </div>

  <div className="mb-3 ">
    <input type="text"
    className="form-control"
     id="exampleInputEmail1"
     placeholder='Subject-5' 
     name='skile4'
     value={skile4}
     onChange={(e) => setSkile4(e.target.value )}
     aria-describedby="emailHelp" />
  </div>
 
 <FileBase type="file" 
    required
multiple={false}  onDone={({base64}) => setImg(base64)} />
 
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>

                    </div>
            </div>
        </div>
    );
};

export default page;