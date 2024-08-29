'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@/app/css/Navbar.css';

function Header() {
  return (
    <Navbar expand="md" fixed="static" className="header drop-shadow-2xl">
      <Container className="md:mt-5 mt-2 md:mb-5 mb-2">
        <div>
          <Navbar.Brand className="text-base md:text-4xl" href="/">
            B Solutions
          </Navbar.Brand>
        </div>
        <div>
          <Nav className="w-full">
            <Navbar.Text
              href="/"
              className="hidden md:flex text-sm md:text-base ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer"
            >
              Home
            </Navbar.Text>
            <Navbar.Text
              href="/about"
              className="hidden md:flex text-sm md:text-base ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer"
            >
              About
            </Navbar.Text>
            <Navbar.Text
              href="/contact"
              className="hidden md:flex text-sm md:text-base ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer"
            >
              Services
            </Navbar.Text>
            <Navbar.Text
              href="#contact"
              className="hidden md:flex text-sm md:text-base ml-2 md:ml-8 mr-2 md:mr-8 mt-1 md:mt-3 mb-1 md:mb-3 hvr-underline-from-left decoration-4 cursor-pointer"
            >
              Contact
            </Navbar.Text>
          </Nav>
        </div>
        <div>
          <Nav>
            <Navbar.Text href="#services" className="hidden md:flex ml-auto">
              <div className="border-4 border-transparent transition transform hover:-translate-y-1 bg-blue-950 p-2 md:p-3 mt-1 md:mt-2 text-white text-sm md:text-base">
                34897329847
              </div>
            </Navbar.Text>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
