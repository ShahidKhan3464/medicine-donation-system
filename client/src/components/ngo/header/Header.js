import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = ({ handleLogout }) => {
    const navigate = useNavigate()

    const handleSignOut = () => {
        // handleLogout();
        localStorage.clear();
        // navigate("/");
        window.location.href = "/";
    }

    return (
        <header>
            <Navbar>
                <Container>
                    <Link to="/user/homepage">
                        <img src={require('../../..//images/logo.jpg')} className="logo" alt="logo" />
                        <span className='logo-text'>Medicine Donation</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/ngo/homepage">Home</NavLink>
                            <NavLink to="/donationList">Donation list</NavLink>
                            <NavLink to="/ngo/profile">Profile</NavLink>
                        </Nav>
                        <Button className='signOutBtn' variant="warning" onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header