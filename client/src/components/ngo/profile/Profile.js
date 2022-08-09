import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Header from "../header/Header"
import Loader from "../../loader/Loader";
import Footer from "../../footer/Footer";

const Profile = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem('token')

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
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.response && err.response.data ? err.response.data.message : err.message
            })
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
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: data.message
                })
            }
        }
        catch (err) {
            setLoading(true)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: err.response && err.response.data ? err.response.data.message : err.message
            })
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!token) return navigate("/ngo/login")
        getNgoData()
    }, [token, navigate, getNgoData])


    return (
        <>
            <Header />
            <section className="profile">
                <div className="title">
                    <h2>My Profile</h2>
                    <div className="underline"></div>
                </div>
                {loading
                    ? <Loader />
                    : <div className="flex-container">
                        <img src={require("..//..//..//assets/images/profile.png")} alt="profile" />
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

                            <Button variant="success" type="submit">Update Profile</Button>
                        </Form>
                    </div>
                }
            </section>
            <Footer />
        </>
    )
}

export default Profile