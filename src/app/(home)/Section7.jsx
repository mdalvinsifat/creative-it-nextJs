"use client"
import React, { useEffect, useState } from 'react';

const Section7 = () => {

 const [course , setCourse ] = useState([])



 useEffect(()=>{
   fetch(`web.json`)
   .then(res => res.json())
   .then(data => setCourse(data))
 },[])


    return (
        <div className='container'>
            <div className="row mt-5">
            {
                course.map(item =>{
                    return(
                    <div className="col-md-3 text-center rounded">
                  <div className="bg-light p-4 m-2">
                  <h6>{item.name}</h6>
                   <img src={item.img} alt="" />
                  </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Section7;