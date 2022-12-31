import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/dashboard";
import Users from "./pages/users";
import Ngos from "./pages/ngos";
import AddNgo from "./pages/addNgo";
// import Users from '../../components/admin/users'
// import Medicine from "./medicine/Medicine";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
// import Stock from "./stock/Stock";

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
                    {/* <Route exact path='/medicine' element={<Medicine />} /> */}
                    {/* <Route exact path='/stock' element={<Stock />} /> */}
                    <Route exact path='/users' element={<Users />} />
                    <Route exact path='/ngos' element={<Ngos />} />
                    <Route exact path='/addNgo' element={<AddNgo />} />
                </Routes>
            </main>
        </div>
    )
}

export default Index