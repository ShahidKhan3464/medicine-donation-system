import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from './header/Header'
import Banner from './banner/Banner';
import Footer from '../footer/Footer';
import './style.css'

const Index = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/ngo/login')
    })

    return (
        <>
            <Header />
            <Banner />
            <Footer />
        </>
    )
}

export default Index