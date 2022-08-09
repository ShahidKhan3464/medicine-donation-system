import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Header from "../header/Header"
import Footer from "../../footer/Footer"
import './/style.css'

const Contact = () => {

    return (
        <>
            <Header />
            <section className="contact">
                <div className="title">
                    <h2>Contact Us</h2>
                    <div className="underline"></div>
                </div>
                <div className="flex-container">
                    <img src={require("..//..//..//assets/images/contact.png")} alt="contact" />
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

                        <Button type="submit">Send a Message</Button>
                    </Form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact