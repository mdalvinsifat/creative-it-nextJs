"use client"
import LayOut from '@/app/Layout/LayOut';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const {id }= useParams()
    const [data , setData] = useState("")

    const DetelisProduct = async()=>{
        const respose = await fetch(`http://localhost:3000/api/course/${id}`)
        const res = await respose.json()
        setData(res.course)
    }

    useEffect(()=>{
DetelisProduct()
    },[])
    return (
       <LayOut>
         <div className='container'>
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h1 className='m-5'>{data.name}</h1>
                    <h3 className='text-danger'>{data.title}</h3>
                    

                    <p>{data.skile3}</p>
                    <p>{data.skile4}</p>
                    
                </div>

                <div className="col-md-6 text-center">
                <img src={data.img} alt="" srcset="" className='w-100 m-5 rounded-circule' />
                <div className="ms-5">
                    <p className='text-danger'>All Software You Need You know After course</p>
                <h4>
                {data.skile}
                </h4>
                <h4>
                {data.skile1}
                </h4>
                <h4>
                {data.skile2}
                </h4>
                </div>
                </div>
            </div>
        </div>
       </LayOut>
    );
};

export default page;