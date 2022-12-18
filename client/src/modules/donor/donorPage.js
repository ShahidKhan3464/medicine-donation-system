import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Homepage from './pages/homePage'
import DonateMedicine from './pages/donateMedicine'
import DonateForm from './pages/donateForm'
import Donations from './pages/donations'
import Profile from './pages/profile'

const DonorPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/signin')
    })

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/donateMedicine" element={<DonateMedicine />} />
            <Route path="/donateForm" element={<DonateForm />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default DonorPage