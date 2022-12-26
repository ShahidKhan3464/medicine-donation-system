import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/dashboard";
// import Medicine from "./medicine/Medicine";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
// import AddNgo from "./addNgo/AddNgo";
// import Stock from "./stock/Stock";
// import Users from "./users/index";
// import Ngos from "./ngos/index";

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
            <Routes>
                <Route exact path='/dashboard' element={<MainDashboard />} />
                {/* <Route exact path='/medicine' element={<Medicine />} /> */}
                {/* <Route exact path='/stock' element={<Stock />} /> */}
                {/* <Route exact path='/users' element={<Users />} /> */}
                {/* <Route exact path='/ngos' element={<Ngos />} /> */}
                {/* <Route exact path='/addNgo' element={<AddNgo />} /> */}
            </Routes>
        </div>
    )
}

export default Index