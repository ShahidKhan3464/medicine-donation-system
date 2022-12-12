// import { useEffect, useState } from "react"
// import { BsSearch } from "react-icons/bs"
// import { useNavigate } from "react-router-dom";
// import axios from "axios"
// import Alert from 'react-bootstrap/Alert'
// import Table from 'react-bootstrap/Table'
// import Loader from "../../loader/Loader"
// import Header from "../header/Header"
// import Footer from "../../footer/Footer";

// const DonateMedicine = () => {
//     const navigate = useNavigate()
//     const [message, setMessage] = useState('')
//     const [location, setLocation] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [ngos, setNgos] = useState([])
//     const token = localStorage.getItem("token")

//     const handleDonate = (e) => {
//         navigate("/donateForm", { state: { ngoId: e.target.id } })
//     }

//     const searchNgo = async () => {
//         try {
//             setNgos([])
//             if (!location) return setMessage("Please enter a location")
//             setLoading(true)
//             const { data, status } = await axios.get(`http://localhost:3001/api/ngo/search?location=${location}`, {
//                 headers: { token }
//             })

//             if (status === 200) {
//                 setLoading(false)
//                 setNgos(data)
//             }
//         }
//         catch (err) {
//             setLoading(true)
//             setMessage(err.response && err.response.data ? err.response.data.message : err.message)
//             setLoading(false)
//         }
//         setLocation('')
//     }

//     useEffect(() => {
//         if (!token) return navigate("/user/login")
//         setTimeout(() => {
//             setMessage('')
//         }, 3000)
//     }, [token, message, navigate])


//     return (
//         <>
//             <Header />
//             {message && <Alert variant='warning'> <strong>Error!</strong> {message}</Alert>}
//             <section className="donate">
//                 <div className="search-input">
//                     <label htmlFor="search">search location to find NGOs</label>
//                     <input
//                         id="search"
//                         type="text"
//                         name="text"
//                         value={location}
//                         onChange={e => setLocation(e.target.value)}
//                     />
//                     <button onClick={searchNgo}>
//                         <BsSearch />
//                     </button>
//                 </div>
//                 {loading
//                     ? <Loader />
//                     : ngos.length !== 0 && <Table striped bordered hover responsive className="Table">
//                         <thead>
//                             <tr>
//                                 <th>S.No</th>
//                                 <th>Ngo</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>City</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {ngos.map((ngo, index) => (
//                                 <tr key={ngo._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{ngo.name}</td>
//                                     <td>{ngo.email}</td>
//                                     <td>{ngo.phone}</td>
//                                     <td>{ngo.city}</td>
//                                     <td>
//                                         <button
//                                             id={ngo._id}
//                                             type="button"
//                                             onClick={handleDonate}
//                                         >
//                                             Donate
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 }
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default DonateMedicine