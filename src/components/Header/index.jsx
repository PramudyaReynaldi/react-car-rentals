import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import rectangle from '../../assets/Rectangle_74.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

export default function Header() {
    return (
        <>
            <Navbar expand="lg" fixed="top" className="navbar-bg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={rectangle} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#000000'
                        }}
                        >
                            <Nav.Link href="#OurService">Our Services</Nav.Link>
                            <Nav.Link href="#WhyUs">Why Us</Nav.Link>
                            <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                            <Nav.Link href="#Faq">FAQ</Nav.Link>
                            <Button className="ms-3 btn-navbar">Register</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}