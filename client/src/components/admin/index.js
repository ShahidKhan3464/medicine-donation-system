import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import MainDash from "./mainDash/MainDash";
import Stock from "./stock/Stock";
import Users from "./users/Users";
import Ngos from "./ngos/Ngos";
import AddNgo from "./addNgo/AddNgo";
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