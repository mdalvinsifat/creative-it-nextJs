import React from 'react';
import img from '../../imgae/Carsoule.jpg'
import img1 from '../../imgae/Carsoule1.jpg'
import img2 from '../../imgae/Carsoule2.jpg'
import Image from 'next/image';
const Section1 = () => {
    return (
<div className="container">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active mt-5">
     <div className="row">
        <div className="col-md-5">
            <Image src={img} alt="" srcset="" className='img-fluid'  />
        </div>
        <div className="col-md-6">
<h1>The Ten Outstanding Young Persons of Bangladesh [TOYP] 2021</h1>

<p>
Our honorable CEO Monir Hosen received the TOYP 2021 award for his incredible contribution to the development of the IT sector. This award is given to the top 10 young entrepreneurs for their outstanding performance.
</p>
        </div>
     </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-5">
            <img src={img1} alt="" srcset="" className='img-fluid' />
        </div>
        <div className="col-md-6">
<h1>The Ten Outstanding Young Persons of Bangladesh [TOYP] 2021</h1>

<p>
Our honorable CEO Monir Hosen received the TOYP 2021 award for his incredible contribution to the development of the IT sector. This award is given to the top 10 young entrepreneurs for their outstanding performance.
</p>
        </div>
     </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-5">
            <img src={img2} alt="" srcset="" className='img-fluid' />
        </div>
        <div className="col-md-6">
<h1>The Ten Outstanding Young Persons of Bangladesh [TOYP] 2021</h1>

<p>
Our honorable CEO Monir Hosen received the TOYP 2021 award for his incredible contribution to the development of the IT sector. This award is given to the top 10 young entrepreneurs for their outstanding performance.
</p>
        </div>
     </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    );
};

export default Section1;