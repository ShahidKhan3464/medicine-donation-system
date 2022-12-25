import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import sweetAlert from "../../components/sweetAlert";
import { FormContainer, PrimaryHeading, Underline } from "../../globalStyle";
import { SignUp } from "./style";

const Index = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data, status } = await axios.post("http://localhost:3001/api/user/signup", {
                username: username,
                email: email,
                password: password,
                address: address
            })

            if (status === 201) {
                sweetAlert('success', 'Success', `${data.message}`)
                setLoading(false)
            }
            setUserName('')
            setEmail('')
            setPassword('')
            setAddress('')
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
            setLoading(false)
        }
    }

    return (
        <React.Fragment>
            <Header />
            <SignUp>
                <div className="signUp_heading">
                    <PrimaryHeading>Sign Up</PrimaryHeading>
                    <Underline></Underline>
                </div>
                <FormContainer maxWidth='530' height='500'>
                    <div className="formContainer_imgBox">
                        <img src={require("../../images/signup.png")} alt="signup" />
                    </div>
                    <div className="formContainer_form">
                        <Form className='was-validated' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Username</Form.Label>
                                <Form.Control
                                    required
                                    id="name"
                                    type="text"
                                    minLength='5'
                                    maxLength='30'
                                    value={username}
                                    onChange={e => setUserName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    required
                                    id="email"
                                    type="email"
                                    value={email}
                                    minLength='10'
                                    maxLength='30'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control
                                    required
                                    minLength='5'
                                    id="password"
                                    maxLength='10'
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="address">Address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    id="address"
                                    minLength='5'
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Form.Group>

                            <Button type="submit" text="Create Account" loading={loading} />
                            <p>
                                Already have an account?
                                <Link to="/signin"> Sign In</Link>
                            </p>
                        </Form>
                    </div>
                </FormContainer>
            </SignUp>
            <Footer />
        </React.Fragment>
    )
}

export default Index