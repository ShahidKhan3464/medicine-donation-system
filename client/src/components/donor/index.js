import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header'
import Banner from './Banner';
import './style.css'

const Index = ({ handleLogout }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/user/login')
    })

    return (
        <>
            <Header handleLogout={handleLogout} />
            <Banner />
        </>
    )
}

export default Index