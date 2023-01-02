import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/index'
import About from './pages/aboutUs/index';
import Contact from './pages/contactUs/index';
import SignIn from './pages/signIn/index';
import SignUp from './pages/signUp/index';
import Donor from './modules/donor/donorPage';
import Ngo from './modules/ngo/ngoPage';
import Admin from './modules/admin/adminPage';


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
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/donor/*' element={<Donor />} />
        <Route exact path='/ngo/*' element={<Ngo />} />
        <Route exact path='/admin/*' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;