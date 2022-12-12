// import { useState, useEffect } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import Swal from 'sweetalert2'
// import axios from "axios"
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"
// import Loader from "../../loader/Loader"
// import Header from "../header/Header"
// import Footer from "../../footer/Footer"

// const DonateForm = () => {
//     const navigate = useNavigate()
//     const { state } = useLocation()
//     const [loading, setLoading] = useState(false)
//     const [donor, setDonor] = useState({ fullName: "", email: "", phone: "", address: "", })
//     const [medicine, setMedicine] = useState({ name: "", type: "", quantity: "", mfgDate: "", expDate: "" })
//     const token = localStorage.getItem("token")


//     const handleDonorChange = (e) => {
//         if (e.target.name === "phone") return setDonor({ ...donor, [e.target.name]: Number(e.target.value) })
//         setDonor({ ...donor, [e.target.name]: e.target.value })
//     }

//     const handleMedicineChange = (e) => {
//         if (e.target.name === 'quantity') {
//             if (e.target.value > 0) {
//                 setMedicine({ ...medicine, [e.target.name]: Number(e.target.value) })
//             }
//             return
//         }
//         setMedicine({ ...medicine, [e.target.name]: e.target.value })
//     }

//     const handleDonation = async (e) => {
//         e.preventDefault()
//         try {
//             setLoading(true)
//             const { data, status } = await axios.post("http://localhost:3001/api/donation", { donor, medicine, ngoId: state.ngoId }, {
//                 headers: { token }
//             })

//             if (status === 200) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success',
//                     text: `${data.message}`
//                 })
//                 setLoading(false)
//             }
//             setDonor({ fullName: "", email: "", phone: "", address: "", })
//             setMedicine({ name: "", type: "", quantity: "", mfgDate: "", expDate: "" })
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

//     useEffect(() => {
//         if (!token) return navigate("/donateMedicine")
//     })

//     return (
//         <>
//             <Header />
//             <section className="donate-form">
//                 <div className="title">
//                     <h2>Donate Form</h2>
//                     <div className="underline"></div>
//                 </div>
//                 {loading
//                     ? <Loader />
//                     : <div className="details">
//                         <Form className="was-validated" onSubmit={handleDonation}>
//                             <div className="donor-details">
//                                 <h5>Donor Detials:</h5>
//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="name">FullName:</Form.Label>
//                                     <Form.Control
//                                         id="name"
//                                         name="fullName"
//                                         type="text"
//                                         value={donor.fullName}
//                                         onChange={handleDonorChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="email">Email:</Form.Label>
//                                     <Form.Control
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         value={donor.email}
//                                         onChange={handleDonorChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="phone">Phone:</Form.Label>
//                                     <Form.Control
//                                         id="phone"
//                                         name="phone"
//                                         type="number"
//                                         value={donor.phone}
//                                         onChange={handleDonorChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="address">Address:</Form.Label>
//                                     <Form.Control
//                                         id="address"
//                                         name="address"
//                                         type="text"
//                                         value={donor.address}
//                                         onChange={handleDonorChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                             </div>
//                             <div className="medicine-details">
//                                 <h5>Medicine Details:</h5>
//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="name">Medicine Name:</Form.Label>
//                                     <Form.Control
//                                         id="name"
//                                         name="name"
//                                         type="text"
//                                         value={medicine.name}
//                                         onChange={handleMedicineChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="type">MedicineType:</Form.Label>
//                                     <Form.Control
//                                         id="type"
//                                         name="type"
//                                         type="text"
//                                         value={medicine.type}
//                                         onChange={handleMedicineChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="quantity">Quantity:</Form.Label>
//                                     <Form.Control
//                                         id="quantity"
//                                         name="quantity"
//                                         type="number"
//                                         value={medicine.quantity}
//                                         onChange={handleMedicineChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="mfgDate">MFG Date:</Form.Label>
//                                     <Form.Control
//                                         id="mfgDate"
//                                         name="mfgDate"
//                                         type="date"
//                                         value={medicine.mfgDate}
//                                         onChange={handleMedicineChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group className="form-group">
//                                     <Form.Label htmlFor="expDate">EXP Date:</Form.Label>
//                                     <Form.Control
//                                         id="expDate"
//                                         name="expDate"
//                                         type="date"
//                                         value={medicine.expDate}
//                                         onChange={handleMedicineChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                             </div>
//                             <Button type="submit" className="donationBtn">Donate Now</Button>
//                         </Form>
//                     </div>
//                 }
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default DonateForm