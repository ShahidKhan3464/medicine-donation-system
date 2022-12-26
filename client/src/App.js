import { Routes, Route } from 'react-router-dom';
import './App.css';

// HOME
import HomePage from './pages/home/index'
import About from './pages/aboutUs/index';
import Contact from './pages/contactUs/index';
import SignIn from './pages/signIn/index';
import SignUp from './pages/signUp/index';

// USER
import Donor from './modules/donor/donorPage';
import Ngo from './modules/ngo/ngoPage';
import Admin from './modules/admin/adminPage';
// import DonateMedicine from './components/donor/donateMedicine/DonateMedicine';
// import DonateForm from './components/donor/donateForm/DonateForm';
// import MyDonations from './components/donor/myDonations/MyDonations';
// import UserProfile from './components/donor/profile/Profile';

// NGO
// import NgoHomepage from './components/ngo/index';
// import DonationList from './components/ngo/donationList/DonationList';
// import NgoProfile from './components/ngo/profile/Profile';

// Admin
// import AdminDashboard from './components/admin/index';

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
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />

        {/* *********USER***********/}
        <Route exact path='/donor/*' element={<Donor />} />
        {/* <Route exact path='/donateMedicine' element={<DonateMedicine />} /> */}
        {/* <Route exact path='/donateForm' element={<DonateForm />} /> */}
        {/* <Route exact path='/myDonations' element={<MyDonations />} /> */}
        {/* <Route exact path='/user/profile' element={<UserProfile />} /> */}

        {/* *********NGO********** */}
        <Route exact path='/ngo/*' element={<Ngo />} />
        {/* <Route exact path='/donationList' element={<DonationList />} /> */}
        {/* <Route exact path='/ngo/profile' element={<NgoProfile />} /> */}

        {/* ********ADMIN********* */}
        <Route exact path='/admin/*' element={<Admin />} />

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;