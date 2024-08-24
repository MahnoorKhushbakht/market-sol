'use client'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
  return (
    <Breadcrumb className='text-center'>
      <Breadcrumb.Item className="md:text-lg text-base" href="/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item className="md:text-lg text-base" href="/about">
        About
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
