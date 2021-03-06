import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// HOME
import Header from './components/home/header/Header';
import Home from './components/home/home';
import About from './components/home/pages/About';
import Contact from './components/home/pages/Contact';
import User from './components/home/pages/User';
import Ngo from './components/home/pages/Ngo';
import Admin from './components/home/pages/Admin';
import SignUp from './components/home/pages/SignUp';
import Footer from './components/home/footer/Footer';

// USER
import UserHomepage from './components/donor/index';
import Donate from './components/donor/Donate';
import DonateForm from './components/donor/DonateForm';
import MyDonation from './components/donor/MyDonation';
import UserProfile from './components/donor/Profile';

// NGO
import NgoHomepage from './components/ngo/index';
import DonationList from './components/ngo/DonationList';
import NgoProfile from './components/ngo/Profile';

// Admin
import AdminDashboard from './components/admin/index';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  const handleLoggedIn = (loggedIn) => {
    setLoggedIn(loggedIn);
  }

  const handleLogout = () => {
    setLoggedIn(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setLoggedIn(true);
  }, []);

  return (
    <>
      {loggedIn !== null && <Header />}
      <Routes>
        {/* **********HOME******** */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/user/login' element={<User handleLoggedIn={handleLoggedIn} />} />
        <Route exact path='/ngo/login' element={<Ngo handleLoggedIn={handleLoggedIn} />} />
        <Route exact path='/admin/login' element={<Admin handleLoggedIn={handleLoggedIn} />} />
        <Route exact path='/signup' element={<SignUp />} />

        {/* *********USER***********/}
        <Route exact path='/user/homepage' element={<UserHomepage handleLogout={handleLogout} />} />
        <Route exact path='/donateMedicine' element={<Donate />} />
        <Route exact path='/donateForm' element={<DonateForm />} />
        <Route exact path='/myDonation' element={<MyDonation />} />
        <Route exact path='/user/profile' element={<UserProfile />} />

        {/* *********NGO********** */}
        <Route exact path='/ngo/homepage' element={<NgoHomepage handleLogout={handleLogout} />} />
        <Route exact path='/donationList' element={<DonationList />} />
        <Route exact path='/ngo/profile' element={<NgoProfile />} />

        {/* ********ADMIN********* */}
        <Route exact path='/admin/*' element={<AdminDashboard />} />

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;