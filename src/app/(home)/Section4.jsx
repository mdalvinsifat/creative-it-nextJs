import React from 'react';
import './Home.css'
import image from '../../imgae/computer.jpg'
import Link from 'next/link';
import Image from 'next/image';

const Section4 = () => {
    return (
        <div className='container '>
            <div className="row bg-color-section4 mt-5">

                <div className="col-md-6">
                    <div className="heading-for-section4">
                   <h1 className='ms-5 mt-5'>
                   Join Our Free Seminars
                   </h1>
<p className='ms-5 w-100'>
Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will guide you to pick the course that matches your interest and discuss the career prospects
</p>


<div className="btn  button ms-5">
   
 <Link href='' className='ms-2'>Join for Seminar</Link>
</div>


                    </div>
                </div>

<div className="col-md-5">
<Image src={image} alt="" srcset="" className='img-fluid ms-5 rounded w-100'/>
</div>


            </div>
        </div>
    );
};

export default Section4;