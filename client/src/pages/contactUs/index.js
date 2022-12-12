import React from "react"
import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
import Header from "../../components/header/index"
import Footer from "../../components/footer/index"
import Button from "../../components/button/index"
import { PrimaryHeading, Underline, FormContainer } from '../../globalStyle'
import { Contact } from './style'

const Index = () => {

    return (
        <React.Fragment>
            <Header />
            <Contact>
                <div className="contact_heading">
                    <PrimaryHeading>Contact Us</PrimaryHeading>
                    <Underline></Underline>
                </div>
                <FormContainer maxWidth='500' height='400'>
                    <div className="formContainer_imgBox">
                        <img src={require("../../images/contact.png")} alt="contact" />
                    </div>
                    <div className="formContainer_form">
                        <Form className='was-validated'>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name='message' rows={3} minLength='5' required />
                            </Form.Group>

                            {/* <Button type="submit">Send a Message</Button> */}
                            <Button type="submit" text="Send a Message" />
                        </Form>
                    </div>
                </FormContainer>
            </Contact>
            <Footer />
        </React.Fragment>
    )
}

export default Index