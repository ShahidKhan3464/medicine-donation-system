import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Button from "../../components/button";
import sweetAlert from "../../components/sweetAlert";
import { PrimaryHeading, Underline, FormContainer } from "../../globalStyle";
import { SignIn } from './style';

const Index = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [select, setSelect] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            if (select === 'user' || select === 'admin') {
                const { data, status } = await axios.post("http://localhost:3001/api/user/signin", {
                    email: email,
                    password: password
                })

                if (status === 200) {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('isAdmin', data.isAdmin)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    setLoading(false)
                    navigate("/donor")
                }
            }

            else if (select === 'ngo') {
                const { data, status } = await axios.post("http://localhost:3001/api/ngo/signin", {
                    email: email,
                    password: password
                })

                if (status === 200) {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('isNgo', JSON.stringify(data.isNgo))
                    setLoading(false)
                    navigate("/ngo")
                }
            }
            else {
                sweetAlert('warning', 'Warning!', 'Select are required')
                setLoading(false)
            }
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
            <SignIn>
                <div className="signIn_heading">
                    <PrimaryHeading>Sign In</PrimaryHeading>
                    <Underline></Underline>
                </div>
                <FormContainer maxWidth='500' height='350'>
                    <div className="formContainer_imgBox">
                        <img src={require("../../images/login.png")} alt="login" />
                    </div>
                    <div className="formContainer_form">
                        <Form className='was-validated' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="type">Login Type</Form.Label>
                                <Form.Select isInvalid={true} onChange={(e) => setSelect(e.target.value)} id="type" aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="user">User</option>
                                    <option value="ngo">Ngo</option>
                                    <option value="admin">Admin</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    required
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control
                                    required
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Button type="submit" text="Sign In" loading={loading} />
                            <p>
                                Don't have an account?
                                <Link to="/signup"> Sign Up</Link>
                            </p>
                        </Form>
                    </div>
                </FormContainer>
            </SignIn>
            <Footer />
        </React.Fragment >
    )
}

export default Index