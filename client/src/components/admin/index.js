import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import MainDash from "./mainDash/MainDash";
import './style.css'

const Index = () => {
    // const navigate = useNavigate()
    // const token = localStorage.getItem('token');

    // useEffect(() => {
    //     if (!token) navigate('/admin/login')
    // })

    return (
        <div className="admin-container">
            <Sidebar />
            <MainDash />
        </div>
    )
}

export default Index