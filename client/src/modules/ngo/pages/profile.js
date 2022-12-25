import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NgoLinks from './ngoLinks';
import Form from "react-bootstrap/Form";
import Footer from '../../../components/footer';
import Button from '../../../components/button';
import sweetAlert from '../../../components/sweetAlert';
import { FormContainer, PrimaryHeading, Underline } from "../../../globalStyle";
import { Profile } from "./style";

const Index = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const token = localStorage.getItem('token')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const getNgoData = useCallback(async () => {
        try {
            setLoading(true)
            const { data, status } = await axios.get('http://localhost:3001/api/ngo/profile', {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                setName(data.name)
                setEmail(data.email)
                setPhone(data.phone)
                setCity(data.city)
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
        const updateData = { name, email, password, phone, city }
        try {
            setLoading(true)
            const { data, status } = await axios.put('http://localhost:3001/api/ngo/profile', updateData, {
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
        if (!token) return navigate("/signin")
        getNgoData()
    }, [token, navigate, getNgoData])


    return (
        <React.Fragment>
            <NgoLinks />
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
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                <Form.Label htmlFor="phone">Phone</Form.Label>
                                <Form.Control
                                    id="phone"
                                    type="number"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label htmlFor="city">City</Form.Label>
                                <Form.Control
                                    id="city"
                                    type="text"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
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