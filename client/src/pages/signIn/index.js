import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
import Loader from "../../components/loader/Loader";
import Header from "../../components/header/index"
import Footer from "../../components/footer/index"
import Button from "../../components/button/index"
import { PrimaryHeading, Underline, FormContainer } from "../../globalStyle";
import { SignIn } from './style'

const Index = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data, status } = await axios.post("http://localhost:3001/api/user/signin", {
                email: email,
                password: password
            })

            if (status === 200) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('isAdmin', data.isAdmin)
                localStorage.setItem('user', JSON.stringify(data.user))
                setLoading(false)
                navigate("/user/homepage")
            }
        }
        catch (err) {
            setLoading(true)
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `${err.response && err.response.data ? err.response.data.message : err.message}`
            })
            setLoading(false)
        }
    }

    return (
        <React.Fragment>
            <Header />
            <SignIn>
                <div className="signIn_heading">
                    <PrimaryHeading>User Login</PrimaryHeading>
                    <Underline></Underline>
                </div>
                {loading
                    ? <Loader />
                    : <FormContainer maxWidth='500' height='350'>
                        <div className="formContainer_imgBox">
                            <img src={require("../../images/login.png")} alt="login" />
                        </div>
                        <div className="formContainer_form">
                            <Form className='was-validated' onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label htmlFor="type">Login Type</Form.Label>
                                    <Form.Select isInvalid={true} id="type" aria-label="Default select example">
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

                                {/* <Button variant="success" type="submit">Login</Button> */}
                                <Button type="submit" text="Login" />
                                <p>
                                    Don't have an account?
                                    <Link to="/signup"> Sign Up</Link>
                                </p>
                            </Form>
                        </div>
                    </FormContainer>
                }
            </SignIn>
            <Footer />
        </React.Fragment>
    )
}

export default Index