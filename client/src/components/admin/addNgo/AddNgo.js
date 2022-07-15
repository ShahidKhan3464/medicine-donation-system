import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './style.css'

const AddNgo = () => {

    return (
        <div className='addNgo'>
            <h3>Add Ngo</h3>
            <div className="ngo-form">
                <Form className='was-validated'>
                    <Form.Group className='form-group'>
                        <Form.Label htmlFor="name">Name of Ngo</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            value=''
                            // onChange={e => setUserName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            id="email"
                            type="email"
                            value=''
                            // onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control
                            id="password"
                            type="password"
                            value=''
                            // onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label htmlFor="phone">Phone</Form.Label>
                        <Form.Control
                            id="phone"
                            type="number"
                            value=''
                            // onChange={e => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label htmlFor="city">City</Form.Label>
                        <Form.Control
                            id="city"
                            type="text"
                            value=''
                            // onChange={e => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button type="submit">Add Ngo</Button>

                </Form>
            </div>
        </div>
    )
}

export default AddNgo