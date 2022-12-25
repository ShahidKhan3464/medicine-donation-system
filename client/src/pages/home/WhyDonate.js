import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { PrimaryHeading, Underline } from '../../globalStyle';
import { WhyDonate } from './style';

const Index = () => {

    return (
        <WhyDonate>
            <div className='whyDonate_heading'>
                <PrimaryHeading>Why Donate to us</PrimaryHeading>
                <Underline></Underline>
                <p>Because Health is the fundamental part of human being.</p>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={require("../../images/serve.webp")} />
                            <Card.Body>
                                <Card.Title>Donate For Needy People</Card.Title>
                                <Card.Text>
                                    Serving all people through exemplary health care and community outreach.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={require("../../images/health.jpg")} />
                            <Card.Body>
                                <Card.Title>Donate For Needy People</Card.Title>
                                <Card.Text>
                                    Building a Healthy Community One Individual at a Time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={require("../../images/saves.jpg")} />
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
        </WhyDonate>
    )
}

export default Index