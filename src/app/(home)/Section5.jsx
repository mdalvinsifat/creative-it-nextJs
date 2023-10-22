import React from 'react';
import './Home.css'
import image from '../../imgae/computer2.png'
import Image from 'next/image';

const Section5 = () => {
    return (
        <div className='container'>
        <div className="row bg-color-section5 mt-5">

            <div className="col-md-5">
<Image src={image} alt="" srcset="" className='img-fluid w-100 rounded'/>
           
            </div>

<div className="col-md-6 mt-5">
<div className="heading-section5 w-100 ms-5 mt-5">
<h3>
Providing project-based classes is our specialty
</h3>

</div>

<p className='ms-5'>
We believe in skills gained through practical projects. A great number of people struggle to start their career in the tech field for only having conceptual knowledge. Creative IT makes sure to provide hands-on training to prepare you for job markets. Our course module contains projects that are designed to track your progress. During the course, you will be able to make a portfolio yourself to showcase your practical skills to the potential employers.
</p>
</div>


        </div>
    </div>
    );
};

export default Section5;