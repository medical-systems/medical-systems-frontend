import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/component/Header"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/*Navbar*/}
      <Navbar expand="lg" className="flex items-center justify-between p-1 bg-gray-500 text-gray-50 ml-0">
          <Image src="/edental_logo.png" alt='' width={100} height={100} className="logo mr-80"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-4" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="">
              <Nav.Link href={'/LoginForm'} >Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>

  )
}
