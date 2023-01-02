import React, { useState } from 'react';
import sweetAlert from "../../../components/sweetAlert";
import { PrimaryHeading, } from '../../../globalStyle';
import Button from "../../../components/button";
import Form from "react-bootstrap/Form";
import { AddNgo } from './style';
import axios from "axios";

const Index = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const token = localStorage.getItem('token')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const addNgo = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data, status } = await axios.post('http://localhost:3001/api/ngo/addition', { name, email, password, phone, city }, {
                headers: { token }
            })

            if (status === 201) {
                sweetAlert('success', 'Success', `${data.message}`)
                setLoading(false)
            }
            setName('')
            setEmail('')
            setPassword('')
            setPhone('')
            setCity('')
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false)
        }
    }

    return (
        <AddNgo>
            <PrimaryHeading size="40px">Add Ngo</PrimaryHeading>
            <div className="addNgo_form">
                <Form className='was-validated' onSubmit={addNgo}>
                    <div className='addNgo_form_fieldControl'>
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="name">Name of Ngo</Form.Label>
                            <Form.Control
                                id="name"
                                required
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                required
                                id="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </div>

                    <div className='addNgo_form_fieldControl'>
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                required
                                id="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control
                                required
                                id="phone"
                                type="number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Form.Group>
                    </div>

                    <div className='addNgo_form_fieldControl'>
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="city">City</Form.Label>
                            <Form.Control
                                required
                                id="city"
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </Form.Group>
                    </div>
                    <Button type="submit" text="Add Ngo" loading={loading} />
                </Form>
            </div>
        </AddNgo>
    )
}

export default Index