import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MainDash from "./mainDash/MainDash";
import Medicine from "./medicine/Medicine";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import AddNgo from "./addNgo/AddNgo";
import Stock from "./stock/Stock";
import Users from "./users/index";
import Ngos from "./ngos/index";
import './style.css'

const Index = () => {
    // const navigate = useNavigate()
    // const token = localStorage.getItem('token');

    // useEffect(() => {
    //     if (!token) navigate('/admin/login')
    // })

    return (
        <div className="grid-container">
            <Sidebar />
            <Navbar />
            <div className="main-container" style={{ margin: '5rem 0' }}>
                <Routes>
                    <Route exact path='/dashboard' element={<MainDash />} />
                    <Route exact path='/medicine' element={<Medicine />} />
                    <Route exact path='/stock' element={<Stock />} />
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/ngos' element={<Ngos />} />
                    <Route exact path='/addNgo' element={<AddNgo />} />
                </Routes>
            </div>
        </div>
    )
}

export default Index