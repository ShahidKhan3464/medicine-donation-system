import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Top = () => {

    return (
        <section className='top'>
            <div className='title'>
                <h2>Why Donate to us</h2>
                <div className="underline"></div>
                <p>Because Health is the fundamental part of human being.</p>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={require("..//..//..//assets/images/serve.webp")} />
                            <Card.Body>
                                <Card.Title>Donate For Needy People</Card.Title>
                                <Card.Text>
                                    Serving all people through exemplary health care and community outreach.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={require("..//..//..//assets/images/health.jpg")} />
                            <Card.Body>
                                <Card.Title>Donate For Needy People</Card.Title>
                                <Card.Text>
                                    Building a Healthy Community One Individual at a Time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src={require("..//..//..//assets/images/saves.jpg")} />
                            <Card.Body>
                                <Card.Title>Donate For Needy People</Card.Title>
                                <Card.Text>
                                    The Knowledge to Saves Lives. The Location to Save Time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Top