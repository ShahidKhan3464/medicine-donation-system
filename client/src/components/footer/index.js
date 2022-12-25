import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from './style';

const Index = () => {

    return (
        <Footer>
            <div className="footer_upper">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#home">About Us</a></li>
                                <li><a href="#home">Contact Us</a></li>
                                <li><a href="#home">Privacy Policy</a></li>
                                <li><a href="#home">Terms of Use</a></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <h6>Donations</h6>
                            <ul>
                                <li><a href="#home">How to Donate</a></li>
                                <li><a href="#home">Donation List</a></li>
                                <li><a href="#home">Volunteer</a></li>
                                <li><a href="#home">FAQs</a></li>
                            </ul>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="last-col">
                                <h6>Keep in Touch</h6>
                                <div className="address">
                                    <p>Address: Ring Road Peshawar</p>
                                    <p>Phone: +92-345-678-9012</p>
                                    <p>Email: shahidafridi26360@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer_lower">
                <p>Copyright &copy; 2022 Medicine Donation | All Rights Reserved. </p>
            </div>
        </Footer>
    )
}

export default Index