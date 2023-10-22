import Link from 'next/link';
import React from 'react';

const AdminNav = () => {
    return (
        <div className='list-group mt-5 ms-5'>
        <Link href='/admin/create'  className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4">
            Courses
            </Link>  
        
        <Link href='/admin/view' className=" w-100 bg-dark py-2 text-light text-decoration-none ps-4 mt-5">
          View Courses 
            </Link>            
                </div>
    );
};

export default AdminNav;