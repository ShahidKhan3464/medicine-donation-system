import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Header from '../../../components/header';
import { SignOutBtn } from '../../../globalStyle';

const donorLinks = () => {

    const handleSignOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <Header>
            <Nav className="me-auto">
                <NavLink activeclassname="active" to="/donor">Home</NavLink>
                <NavLink activeclassname="active" to="/donor/donateMedicine">Donate Medicine</NavLink>
                <NavLink activeclassname="active" to="/donor/donations">My Donations</NavLink>
                <NavLink activeclassname="active" to="/donor/profile">Profile</NavLink>
            </Nav>
            <SignOutBtn onClick={handleSignOut}>
                Sign Out
            </SignOutBtn>
        </Header>
    )
}

export default donorLinks