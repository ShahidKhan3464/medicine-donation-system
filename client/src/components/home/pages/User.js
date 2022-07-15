import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Loader from "../../loader/Loader"

const User = ({ handleLoggedIn }) => {
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
                handleLoggedIn(true)
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
        <section className="Login">
            <div className="title">
                <h2>User Login</h2>
                <div className="underline"></div>
            </div>
            {loading
                ? <Loader />
                : <div className="flex-container">
                    <img src={require("../../../assets/images/login.png")} alt="login" />
                    <Form className='was-validated' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                id="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="success" type="submit">Login</Button>
                        <p>
                            Don't have an account?
                            <Link to="/signup"> Sign Up</Link>
                        </p>
                    </Form>
                </div>
            }
        </section>
    )
}

export default User