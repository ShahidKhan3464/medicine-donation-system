import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Button from 'react-bootstrap/Button';

const Header = () => {

    return (
        <header>
            <Navbar>
                <Container>
                    <Link to="/">
                        <img src={require('../../../assets/images/logo.jpg')} className="logo" alt="logo" />
                        <span className='logo-text'>Medicine Donation</span>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/faq">Faqs</NavLink>
                        </Nav>
                        <div className="modules">
                            <NavLink to="/user/login">User</NavLink>
                            <NavLink to="/ngo/login">Ngo</NavLink>
                            <NavLink to="/admin/login">Admin</NavLink>
                        </div>
                        {/* <Link to="/user/login">
                            <Button className="btn btn-warning">Sign In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="btn btn-warning">Sign Up</Button>
                        </Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header