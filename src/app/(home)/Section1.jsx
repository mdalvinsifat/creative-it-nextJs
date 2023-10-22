import React from 'react';
import './Home.css'
import img from '../../imgae/Check.png'
import img1 from '../../imgae/book.png'
import img2 from '../../imgae/iso.png'
import image from '../../imgae/banner.jpg'
import Link from 'next/link';
import Image from 'next/image';
const Section1 = () => {
    return (
        <div className='container-fluid background-image'>
           
                <div className="row ms-3">
                    <div className="col-md-5  ms-5">
                       <div className="d-flex  ms-3">
                       <Image src={img} alt="" srcset="" className='' />
                       <h5>Unleash Your Potential</h5>
                       </div>

                       <div className="heading">
                        <h1>Become an IT Pro & 
                            <br/>
                            Rule the</h1>
                        <h1 className='text-danger fw-bolder fs-1'>Digital World</h1>
                        <p>With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and updated curriculum. Pick your desired course from more than 30 trendy options.</p>
                       </div>

<div className="d-flex">
<div className="btn  button">
    <Image src={img1} alt="" srcset="" />
 <Link href='' className='ms-2'>Browser Course </Link>
</div>

<div className="btn  button ms-5">
    <Image src={img1} alt="" srcset="" />
 <Link href='' className='ms-2'>Join for Seminar</Link>
</div>
</div>

<div className="d-flex mt-5">
   <div className="image">
   <Image src={img2} alt="" srcset="" className='img-fluid'/>
   </div>
  <div className="pragraph">
  <p>One of the best ISO certified IT
Training Institutes in Bangladesh</p>
  </div>
</div>
                    </div>


                    <div className="col-md-5 mt-5">
                        <Image src={image} alt="" srcset="" className='img-fluid'/>
                    </div>

                </div>
         
        </div>
    );
};

export default Section1;