import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.jpg';
import { Header } from './style';

const index = ({ children }) => {

    return (
        <Header>
            <Navbar expand='lg'>
                <Container>
                    <Link to="/" className='logo'>
                        <img src={logo} className="logoImg" alt="logo" />
                        <span className='logo-text'>Medicine Donation</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {children
                            ? children
                            : (
                                <>
                                    <Nav className="me-auto">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/about">About</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                        <NavLink to="/faq">Faqs</NavLink>
                                    </Nav>
                                    <div className='links'>
                                        <Link to='/signin'>Sign In</Link>
                                        <Link to='/signup'>Sign Up</Link>
                                    </div>
                                </>
                            )
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Header>
    )
}

export default index