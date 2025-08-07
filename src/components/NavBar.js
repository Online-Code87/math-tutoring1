import React from 'react';
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import Home from './Home';
import MathTutoring from './MathTutoring';
import Skills from './Skills';
import OtherServices from './OtherServices';





const NavBar=() =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);



    useEffect(()=>{
        const onScroll = (e) => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/Home">
                    <img src={logo} className='logo-nav' alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "Home" ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(Home)}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'Skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(Skills)}>Skills</Nav.Link>
                        <Nav.Link href="#online-math-tutoring" className={activeLink === 'MathTutoring' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(MathTutoring)}>Math Tutoring</Nav.Link>
                        <Nav.Link href="#other-services" className={activeLink === 'OtherServices' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(OtherServices)}>Other Services</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <a href='#connect'><button className="vvd" onClick={()=>console.log('connect')}> <span>Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar