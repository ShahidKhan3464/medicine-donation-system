import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './/style.css'

const Contact = () => {

    return (
        <section className="contact">
            <div className="title">
                <h1>Contact Us</h1>
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
    )
}

export default Contact