'use client'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs() {
    const urlPath = window.location.pathname;
  return (
    <Breadcrumb className='text-center'>
      <Breadcrumb.Item className="md:text-lg text-base" href="/">
        Home
      </Breadcrumb.Item>
      {urlPath === '/about' ?
      (<Breadcrumb.Item className="md:text-lg text-base" href="/about">
        About
      </Breadcrumb.Item>)
      :
      (<Breadcrumb.Item className="md:text-lg text-base" href="/contact">
        Contact
      </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
