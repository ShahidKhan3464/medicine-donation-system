// import { useState, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
// import Table from 'react-bootstrap/Table'
// import Alert from 'react-bootstrap/Alert'
// import Loader from "../../loader/Loader"
// import Header from "../header/Header"
// import Modal from "../modal/Modal"
// import Footer from "../../footer/Footer"

// const DonationList = () => {
//     const navigate = useNavigate()
//     const [show, setShow] = useState(true)
//     const [modal, setModal] = useState(false)
//     const [loading, setLoading] = useState(true)
//     const [donations, setDonations] = useState([])
//     const [medicine, setMedicine] = useState({})
//     const [error, setError] = useState('')
//     const token = localStorage.getItem("token")

//     const donationList = useCallback(async () => {
//         try {
//             setLoading(true)
//             const { data, status } = await axios.get("http://localhost:3001/api/donation/tome", {
//                 headers: { token }
//             })

//             if (status === 200) {
//                 setLoading(false)
//                 setDonations(data)
//             }
//         }
//         catch (err) {
//             setLoading(true)
//             setError(err.response && err.response.data ? err.response.data.message : err.message)
//             setLoading(false)
//         }
//     }, [token])

//     const handleModal = (donatedMedicine) => {
//         setMedicine(donatedMedicine)
//         setModal(true)
//     }

//     useEffect(() => {
//         if (!token) return navigate("/ngo/login")
//         if (!error) donationList()
//     }, [donationList, token, error, navigate])

//     return (
//         <>
//             <Header />
//             {error && show && <Alert variant="danger" onClose={() => setShow(false)} dismissible> <strong>Error!</strong> {error}</Alert>}
//             {modal && <Modal modal={modal} setModal={setModal} medicine={medicine} />}
//             <section className="my-donation">
//                 <div className="title">
//                     <h2>Donation List</h2>
//                     <div className="underline"></div>
//                 </div>
//                 {loading
//                     ? <Loader />
//                     : !error && <Table striped bordered hover responsive className="Table">
//                         <thead>
//                             <tr>
//                                 <th>Donor</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Address</th>
//                                 <th>Date</th>
//                                 <th>Medicine</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {donations.length === 0
//                                 ? <tr>
//                                     <td
//                                         colSpan='6'
//                                         style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}
//                                     >
//                                         No Donations Yet !!!
//                                     </td>
//                                 </tr>
//                                 : donations.map(({ _id, donatedMedicine, donor, isApproved, date }) => (
//                                     <tr key={_id}>
//                                         <td>{donor.fullName}</td>
//                                         <td>{donor.email}</td>
//                                         <td>{donor.phone}</td>
//                                         <td>{donor.address}</td>
//                                         <td>{new Date(date).toLocaleDateString('en-GB')}</td>
//                                         <td>
//                                             <button onClick={() => handleModal(donatedMedicine)}>Details</button>
//                                         </td>
//                                         <td className={isApproved ? 'approved' : 'not-approved'}>{isApproved ? 'Approved' : 'Not yet approved'}</td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </Table>
//                 }
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default DonationList