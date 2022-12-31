import { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Loader from "../../loader"
import Swal from 'sweetalert2'
import axios from "axios"
import './style.css'

const AddNgo = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token')

    const addNgo = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data, status } = await axios.post('http://localhost:3001/api/ngo/addition', { name, email, password, phone, city }, {
                headers: { token }
            })

            if (status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${data.message}`
                })
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
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `${err.response && err.response.data ? err.response.data.message : err.message}`
            })
            setLoading(false)
        }
    }

    return (
        <div className='addNgo'>
            <h3>Add Ngo</h3>
            {loading
                ? <Loader />
                : <div className="ngo-form">
                    <Form className='was-validated' onSubmit={addNgo} >
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="name">Name of Ngo</Form.Label>
                            <Form.Control
                                id="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control
                                id="phone"
                                type="number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor="city">City</Form.Label>
                            <Form.Control
                                id="city"
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit">Add Ngo</Button>

                    </Form>
                </div>
            }
        </div>
    )
}

export default AddNgo