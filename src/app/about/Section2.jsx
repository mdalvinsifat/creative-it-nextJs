import React from 'react';
import img from '../../imgae/Cartifecat.png'
import Image from 'next/image';
const Section2 = () => {
    return (
        <div className="mt-5">

<div className='container  mt-5'>
            <div className="row mt-5">
                <div className="col-md-5">
                    <Image src={img} alt="" srcset="" />
                </div>
                <div className="col-md-5 mt-5">
                    <h3 className='mt-5 fw-bold'>
                    One of the ISO Certified IT Institutes in Bangladesh
                    </h3>

                    <p className='mt-3'>
                    In 2015 we received the ISO certification for providing a quality training program which recognizes our position in the IT world. ISO ensures the quality of services based on efficacy, customer satisfaction and many other factors. This certification proves the standard of our service and courses.
                    </p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Section2;