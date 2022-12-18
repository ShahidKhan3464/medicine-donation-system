import React, { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Form from "react-bootstrap/Form"
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Button from '../../../components/button/index';
import sweetAlert from '../../../components/sweetAlert/index';
import { FormContainer, PrimaryHeading, Underline } from "../../../globalStyle";
import { Profile } from "./style";

const Index = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const token = localStorage.getItem('token')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const getUserData = useCallback(async () => {
        try {
            setLoading(true)
            const { data, status } = await axios.get('http://localhost:3001/api/user/profile', {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                setUserName(data.username)
                setEmail(data.email)
                setAddress(data.address)
            }
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
            setLoading(false)
        }
    }, [token])

    const updateProfile = async (e) => {
        e.preventDefault()
        const updateData = { username, email, password, address }
        try {
            setLoading(true)
            const { data, status } = await axios.put('http://localhost:3001/api/user/profile', updateData, {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                sweetAlert('success', 'Success', `${data.message}`)
            }
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!token) return navigate("signin")
        getUserData()
    }, [token, navigate, getUserData])


    return (
        <React.Fragment>
            <Header />
            <Profile>
                <div className="profile_heading">
                    <PrimaryHeading>My Profile</PrimaryHeading>
                    <Underline></Underline>
                </div>
                <FormContainer maxWidth='500' height='450'>
                    <div className="formContainer_imgBox">
                        <img src={require("../../../images/profile.png")} alt="profile" />
                    </div>
                    <div className="formContainer_form">
                        <Form className='was-validated' onSubmit={updateProfile} >
                            <Form.Group>
                                <Form.Label htmlFor="name">Username</Form.Label>
                                <Form.Control
                                    id="name"
                                    type="text"
                                    value={username}
                                    onChange={e => setUserName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="address">Address</Form.Label>
                                <Form.Control
                                    id="address"
                                    type="text"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Form.Group>

                            <Button type="submit" text="Update Profile" loading={loading} />
                        </Form>
                    </div>
                </FormContainer>
            </Profile>
            <Footer />
        </React.Fragment>
    )
}

export default Index