import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/dashboard";
import Stocks from "./pages/stocks";
import Users from "./pages/users";
import Ngos from "./pages/ngos";
import AddNgo from "./pages/addNgo";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Index = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/signin')
    })

    return (
        <div className="sidebar-grid">
            <Sidebar />
            <Navbar />
            <main className="main">
                <Routes>
                    <Route exact path='/dashboard' element={<MainDashboard />} />
                    <Route exact path='/stock' element={<Stocks />} />
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/ngos' element={<Ngos />} />
                    <Route exact path='/addNgo' element={<AddNgo />} />
                </Routes>
            </main>
        </div>
    )
}

export default Index