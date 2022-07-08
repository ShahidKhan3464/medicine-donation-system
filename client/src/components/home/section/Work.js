import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Top = () => {

    return (
        <section className='system-work'>
            <div className='title'>
                <h2>How Does it Work</h2>
                <div className="underline"></div>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img src={require("..//..//..//assets/images/registration.png")} />
                            <Card.Body>
                                <Card.Title>Registration</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veritatis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img src={require("..//..//..//assets/images/packing.png")} />
                            <Card.Body>
                                <Card.Title>Packing</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugiat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card>
                            <Card.Img src={require("..//..//..//assets/images/delivery.png")} />
                            <Card.Body>
                                <Card.Title>Delivery</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, quis.
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