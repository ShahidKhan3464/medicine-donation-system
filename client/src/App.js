import { Routes, Route } from 'react-router-dom';
import './App.css';

// HOME
import Home from './components/home/home';
import About from './components/home/pages/About';
import Contact from './components/home/pages/Contact';
import User from './components/home/pages/User';
import Ngo from './components/home/pages/Ngo';
import Admin from './components/home/pages/Admin';
import SignUp from './components/home/pages/SignUp';

// USER
import UserHomepage from './components/donor/index';
import DonateMedicine from './components/donor/donateMedicine/DonateMedicine';
import DonateForm from './components/donor/donateForm/DonateForm';
import MyDonations from './components/donor/myDonations/MyDonations';
import UserProfile from './components/donor/profile/Profile';

// NGO
import NgoHomepage from './components/ngo/index';
import DonationList from './components/ngo/donationList/DonationList';
import NgoProfile from './components/ngo/profile/Profile';

// Admin
import AdminDashboard from './components/admin/index';

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(null);

  // const handleLoggedIn = (loggedIn) => {
  //   setLoggedIn(loggedIn);
  // }

  // const handleLogout = () => {
  //   setLoggedIn(null);
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) setLoggedIn(true);
  // }, []);

  return (
    <>
      <Routes>
        {/* **********HOME******** */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/user/login' element={<User />} />
        <Route exact path='/ngo/login' element={<Ngo />} />
        <Route exact path='/admin/login' element={<Admin />} />
        <Route exact path='/signup' element={<SignUp />} />

        {/* *********USER***********/}
        <Route exact path='/user/homepage' element={<UserHomepage />} />
        <Route exact path='/donateMedicine' element={<DonateMedicine />} />
        <Route exact path='/donateForm' element={<DonateForm />} />
        <Route exact path='/myDonations' element={<MyDonations />} />
        <Route exact path='/user/profile' element={<UserProfile />} />

        {/* *********NGO********** */}
        <Route exact path='/ngo/homepage' element={<NgoHomepage />} />
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