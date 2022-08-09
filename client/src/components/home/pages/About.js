import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../header/Header'
import Footer from '../../footer/Footer'
import './/style.css'

const About = () => {

    return (
        <>
            <Header />
            <section className='about'>
                <div className='title'>
                    <h2>About Us</h2>
                    <div className="underline"></div>
                </div>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="about-container">
                                <div className="mission">
                                    <img src={require("..//..//..//assets/images/medicine.png")} alt="mission" />
                                    <h3>Why Medicine</h3>
                                    <p>
                                        Our health is a fundamental part of being human. Report shows, nearly 2 billion people have no access to basic medicines, causing a cascade of preventable misery and suffering.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="about-container">
                                <div className="vision">
                                    <img src={require("..//..//..//assets/images/vision.png")} alt="vision" />
                                    <h3>Our Vision</h3>
                                    <p>
                                        Our website drives the future of healthcare by connecting people with surplus medication. Our system is built to ensure compliance and provide full liability protection.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="about-container">
                                <div className="joinUs">
                                    <img src={require("..//..//..//assets/images/join.png")} alt="joinUs" />
                                    <h3>Join Us</h3>
                                    <p>
                                        You can join us easily with different aspects to become a part of our community. You can be a Donor, a Receiver, Volunteer or any Non Governmental Organization.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default About