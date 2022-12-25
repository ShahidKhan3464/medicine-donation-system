import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { PrimaryHeading, Underline } from '../../globalStyle';
import { Work } from './style';

const Index = () => {

    return (
        <Work>
            <div className='work_heading'>
                <PrimaryHeading>How Does It Work</PrimaryHeading>
                <Underline></Underline>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img src={require("../../images/registration.png")} />
                            <Card.Body>
                                <Card.Title>Registration</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veritatis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img src={require("../../images/packing.png")} />
                            <Card.Body>
                                <Card.Title>Packing</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugiat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img src={require("../../images/delivery.png")} />
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
        </Work>
    )
}

export default Index