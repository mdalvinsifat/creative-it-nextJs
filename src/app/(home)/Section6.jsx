import React from 'react';
import './Home.css'

import image from '../../imgae/computer3.jpg'
import Link from 'next/link';
import Image from 'next/image';
const Section6 = () => {
    return (
        <div className='container'>
        <div className="row mt-5 ms-3">

            <div className="col-md-5 heading-section-6 mt-5 ">
<span className='heading-section-sub'>
    <h5>
    Successfully 14 Year's
    </h5>
</span>

<h1>
World-Renowned IT Expert Making Organization
</h1>
<p>
Creative IT has been working with a vision to create IT experts for the past 14 years. In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than 50,000 IT experts who are currently working in different sectors.
</p>


<div className="d-flex">
<div className="btn  button">

 <Link href='' className='ms-2'>Browser Course </Link>
</div>

<div className="btn  button ms-5">

 <Link href='' className='ms-2'>Join for Seminar</Link>
</div>
</div>
            </div>

<div className="col-md-6 mt-5 ms-5">
<Image src={image} alt="" srcset="" className='img-fluid rounded' />
</div>


        </div>
    </div>
    );
};

export default Section6;