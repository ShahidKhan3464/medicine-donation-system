import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { PrimaryHeading, Underline } from '../../globalStyle';
import { About } from './style';

const Index = () => {

    return (
        <React.Fragment>
            <Header />
            <About>
                <div className='about_heading'>
                    <PrimaryHeading>About Us</PrimaryHeading>
                    <Underline></Underline>
                </div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <div className="about_container">
                                <div className="mission">
                                    <img src={require("../../images/medicine.png")} alt="mission" />
                                    <h3>Why Medicine</h3>
                                    <p>
                                        Our health is a fundamental part of being human. Report shows, nearly 2 billion people have no access to basic medicines, causing a cascade of preventable misery and suffering.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="about_container">
                                <div className="vision">
                                    <img src={require("../../images/vision.png")} alt="vision" />
                                    <h3>Our Vision</h3>
                                    <p>
                                        Our website drives the future of healthcare by connecting people with surplus medication. Our system is built to ensure compliance and provide full liability protection.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="about_container">
                                <div className="joinUs">
                                    <img src={require("../../images/join.png")} alt="joinUs" />
                                    <h3>Join Us</h3>
                                    <p>
                                        You can join us easily with different aspects to become a part of our community. You can be a Donor, a Receiver, Volunteer or any Non Governmental Organization.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </About>
            <Footer />
        </React.Fragment>
    )
}

export default Index