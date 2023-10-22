"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Course = () => {
const [Course ,setCourse ] = useState([])
   const Create = async()=>{
    try {
     const response = await fetch(`http://localhost:3000/api/course`)  
     const res = await response.json()
     setCourse(res.course)
    
    } catch (error) {
        console.log(error)
    }
   }
   useEffect(()=>{
Create()
   },[])
    return (
        <div>
  <div className="container mt-5 mb-5">
    <div className="row mt-5 mb-5">
    {
        Course.map((item) => {
            return(
               <div className="card col-md-4 text-center ms-5 mb-4" style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
   
    <Link href={`/course/${item._id}`}className="btn btn-primary mt-3">Detelis</Link>
  </div>
</div>

            )
        })
    }
    </div>
  </div>
        </div>
    );
};

export default Course;