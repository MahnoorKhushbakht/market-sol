'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@/app/css/Navbar.css';

function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Container className='mb-10 sm:mb-0 mt-10 sm:mt-0 sm:ml-10 ml-0'>
        <div>
        <Navbar.Brand className='text-lg md:text-4xl ' href="#home">NESKO MEDIA</Navbar.Brand>
        </div>
        <div>
        <Nav className="w-full ">
        <Navbar.Text href="#services" className="hidden md:flex ml-8 mr-8 mt-3 mb-3 hover:underline underline-offset-4 decoration-4 cursor-pointer">Home</Navbar.Text>
        <Navbar.Text href="#services" className="hidden md:flex ml-8 mr-8 mt-3 mb-3 hover:underline underline-offset-4 decoration-4 cursor-pointer">About</Navbar.Text>
        <Navbar.Text href="#services" className="hidden md:flex ml-8 mr-8 mt-3 mb-3 hover:underline underline-offset-4 decoration-4 cursor-pointer">Services</Navbar.Text>
        <Navbar.Text href="#services" className="hidden md:flex ml-8 mr-8 mt-3 mb-3 hover:underline underline-offset-4 decoration-4 cursor-pointer">Contact</Navbar.Text>
        </Nav>
        </div>
        <div>
        <Nav>  
        <Navbar.Text href="#services" className="hidden md:flex ml-auto">
        <div class="border-4 border-transparent transition transform hover:-translate-y-1 bg-black p-3 mt-2 text-white">34897329847</div>
        </Navbar.Text>
        </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
