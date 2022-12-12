// import { useState, useEffect, useCallback } from "react"
// import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import axios from 'axios'
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import Loader from "../../loader/Loader";
// import Header from "../header/Header"
// import Footer from "../../footer/Footer"

// const Profile = () => {
//     const navigate = useNavigate()
//     const [username, setUserName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [address, setAddress] = useState('')
//     const [loading, setLoading] = useState(false)
//     const token = localStorage.getItem('token')

//     const getUserData = useCallback(async () => {
//         try {
//             setLoading(true)
//             const { data, status } = await axios.get('http://localhost:3001/api/user/profile', {
//                 headers: { token }
//             })

//             if (status === 200) {
//                 setLoading(false)
//                 setUserName(data.username)
//                 setEmail(data.email)
//                 setAddress(data.address)
//             }
//         }
//         catch (err) {
//             setLoading(true)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: err.response && err.response.data ? err.response.data.message : err.message
//             })
//             setLoading(false)
//         }
//     }, [token])

//     const updateProfile = async (e) => {
//         e.preventDefault()
//         const updateData = { username, email, password, address }
//         try {
//             setLoading(true)
//             const { data, status } = await axios.put('http://localhost:3001/api/user/profile', updateData, {
//                 headers: { token }
//             })

//             if (status === 200) {
//                 setLoading(false)
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success',
//                     text: data.message
//                 })
//             }
//         }
//         catch (err) {
//             setLoading(true)
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: err.response && err.response.data ? err.response.data.message : err.message
//             })
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         if (!token) return navigate("/user/login")
//         getUserData()
//     }, [token, navigate, getUserData])


//     return (
//         <>
//             <Header />
//             <section className="profile">
//                 <div className="title">
//                     <h2>My Profile</h2>
//                     <div className="underline"></div>
//                 </div>
//                 {loading
//                     ? <Loader />
//                     : <div className="flex-container">
//                         <img src={require("..//..//..///images/profile.png")} alt="profile" />
//                         <Form className='was-validated' onSubmit={updateProfile} >
//                             <Form.Group>
//                                 <Form.Label htmlFor="name">Username</Form.Label>
//                                 <Form.Control
//                                     id="name"
//                                     type="text"
//                                     value={username}
//                                     onChange={e => setUserName(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="email">Email</Form.Label>
//                                 <Form.Control
//                                     id="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={e => setEmail(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="password">Password</Form.Label>
//                                 <Form.Control
//                                     id="password"
//                                     type="password"
//                                     value={password}
//                                     onChange={e => setPassword(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Form.Group>
//                                 <Form.Label htmlFor="address">Address</Form.Label>
//                                 <Form.Control
//                                     id="address"
//                                     type="text"
//                                     value={address}
//                                     onChange={e => setAddress(e.target.value)}
//                                 />
//                             </Form.Group>

//                             <Button variant="success" type="submit">Update Profile</Button>
//                         </Form>
//                     </div>
//                 }
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default Profile