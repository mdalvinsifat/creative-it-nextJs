import React from 'react';
import img from '../../imgae/logo.png'
import './Navber.css'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
<div className="container">

<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link href='/'className="navbar-brand">
      <Image src={img} alt="" srcset="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href='/' className="nav-link active navber-edit ms-5" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link href='/about' className="nav-link active navber-edit ms-5" >About</Link>
        </li>
        <li className="nav-item">
          <Link href='/course' className="nav-link active navber-edit ms-5" >Courses</Link>
        </li>
       
      </ul>
     
      <div className="ms-auto bg-danger rounded">
      <li className="nav-item nav-link ">
          <Link href='/login' className="nav-link active navber-edit text-light p-2">Login</Link>
        </li>
      </div>

    </div>
  </div>
</nav>
</div>

    );
};

export default Header;