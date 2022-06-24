import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import Header from "./Header"
import Loader from "./Loader";
import Modal from "./Modal"

const DonationList = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(true)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [donations, setDonations] = useState([])
    const [medicines, setMedicines] = useState({})
    const [error, setError] = useState('')
    const token = localStorage.getItem("token")

    const donationList = useCallback(async () => {
        try {
            setLoading(true)
            const { data, status } = await axios.get("http://localhost:3001/api/donation", {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                setDonations(data)
            }
        }
        catch (err) {
            setLoading(true)
            setError(err.response && err.response.data ? err.response.data.message : err.message)
            setLoading(false)
        }
    }, [token])

    const handleModal = (donation) => {
        setMedicines(donation)
        setModal(true)
    }

    useEffect(() => {
        if (!token) return navigate("/ngo/login")
        if (!error) donationList()
    }, [donationList, token, error, navigate])

    return (
        <>
            <Header />
            {error && show && <Alert variant="danger" onClose={() => setShow(false)} dismissible> <strong>Error!</strong> {error}</Alert>}
            {modal && <Modal modal={modal} setModal={setModal} medicines={medicines} />}
            <section className="my-donation">
                <div className="title">
                    <h1>Donation List</h1>
                    <div className="underline"></div>
                </div>
                {loading
                    ? <Loader />
                    : !error && <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Donor</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Medicine</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donations.length === 0
                                ? <tr>
                                    <td
                                        colSpan='6'
                                        style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}
                                    >
                                        No Donations Yet !!!
                                    </td>
                                </tr>
                                : donations.map(donation => (
                                    <tr key={donation._id}>
                                        <td>{donation.donor.fullName}</td>
                                        <td>{donation.donor.email}</td>
                                        <td>{donation.donor.phone}</td>
                                        <td>{donation.donor.address}</td>
                                        <td>{new Date(donation.date).toLocaleDateString('en-GB')}</td>
                                        <td>
                                            <button onClick={() => handleModal(donation)}>Details</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                }
            </section>
        </>
    )
}

export default DonationList