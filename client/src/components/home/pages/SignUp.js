// import { useState } from "react"
// import { Link } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import axios from 'axios'
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import Loader from "../../loader/Loader";
// import Header from "../header/Header"
// import Footer from "../../footer/Footer"

// const SignUp = () => {
//     const [username, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [address, setAddress] = useState('')
//     const [loading, setLoading] = useState(false)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         try {
//             setLoading(true)
//             const { data, status } = await axios.post("http://localhost:3001/api/user/signup", {
//                 username: username,
//                 email: email,
//                 password: password,
//                 address: address
//             })

//             if (status === 201) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success',
//                     text: `${data.message}`
//                 })
//                 setLoading(false)
//             }
//             setUserName('')
//             setEmail('')
//             setPassword('')
//             setAddress('')
//         }
//         catch (err) {
//             setLoading(true)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error!',
//                 text: `${err.response && err.response.data ? err.response.data.message : err.message}`
//             })
//             setLoading(false)
//         }
//     }

//     return (
//         <>
//             <Header />
//             <section className="sign-up">
//                 <div className="title">
//                     <h2>Sign Up</h2>
//                     <div className="underline"></div>
//                 </div>
//                 {loading
//                     ? <Loader />
//                     : <div className="flex-container">
//                         <img src={require("..//..//..///images/signup.png")} alt="signup" />
//                         <Form className='was-validated' onSubmit={handleSubmit}>
//                             <Form.Group>
//                                 <Form.Label htmlFor="name">Username</Form.Label>
//                                 <Form.Control
//                                     id="name"
//                                     type="text"
//                                     value={username}
//                                     onChange={e => setUserName(e.target.value)}
//                                     minLength='5'
//                                     maxLength='30'
//                                     required
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="email">Email</Form.Label>
//                                 <Form.Control
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={e => setEmail(e.target.value)}
//                                     minLength='10'
//                                     maxLength='30'
//                                     required
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="password">Password</Form.Label>
//                                 <Form.Control
//                                     id="password"
//                                     type="password"
//                                     value={password}
//                                     onChange={e => setPassword(e.target.value)}
//                                     minLength='5'
//                                     maxLength='10'
//                                     required
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="address">Address</Form.Label>
//                                 <Form.Control
//                                     id="address"
//                                     type="text"
//                                     value={address}
//                                     onChange={e => setAddress(e.target.value)}
//                                     minLength='5'
//                                     required
//                                 />
//                             </Form.Group>

//                             <Button variant="success" type="submit">Create Account</Button>
//                             <p>
//                                 Already have an account?
//                                 <Link to="/user/login"> Sign in</Link>
//                             </p>
//                         </Form>
//                     </div>
//                 }
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default SignUp