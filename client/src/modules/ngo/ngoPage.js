import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/homePage';
import DonationList from './pages/donationList';
import Profile from './pages/profile';

const NgoPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/signin')
    })

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/donationList" element={<DonationList />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default NgoPage