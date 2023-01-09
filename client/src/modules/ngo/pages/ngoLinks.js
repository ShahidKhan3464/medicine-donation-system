import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Header from '../../../components/header';
import { SignOutBtn } from '../../../globalStyle';

const ngoLinks = () => {

    const handleSignOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <Header>
            <Nav className="me-auto">
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/ngo">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/ngo/donationList">Donation list</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/ngo/profile">Profile</NavLink>
            </Nav>
            <SignOutBtn onClick={handleSignOut}>
                Sign Out
            </SignOutBtn>
        </Header>
    )
}

export default ngoLinks