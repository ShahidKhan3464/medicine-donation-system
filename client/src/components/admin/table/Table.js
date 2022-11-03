import { useState } from 'react'
import { MdDone, MdOutlineCancel } from 'react-icons/md'
import { Style } from "../data/Data";
import Loader from "../../../components/loader/Loader";
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'
import axios from 'axios'
import Modal from '../modal/Modal'
import './style.css'

const DonationTable = ({ allDonations, useFetch }) => {
    const { done, cancel } = Style
    const [setLoad] = useFetch
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [medicine, setMedicine] = useState({})
    const token = localStorage.getItem('token')

    // const medicineDetails = (donatedMedicine) => {
    //     navigate("/admin/medicine", { state: { medicine: donatedMedicine } })
    // }

    const handleModal = (donatedMedicine) => {
        setMedicine(donatedMedicine)
        setModal(true)
    }

    const HandleApprove = async (id) => {
        try {
            setLoading(true)
            const { data, status } = await axios.patch(`http://localhost:3001/api/donation/approve/${id}`, {
                headers: { token }
            })

            if (status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `${data.message}`
                })
                setLoading(false)
                setLoad()
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
        <>
            {modal && <Modal modal={modal} setModal={setModal} medicine={medicine} />}
            {loading
                ? <Loader />
                : <div className='Tabl'>
                    <h5>Recent Donations</h5>
                    <div className="Table-container">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Donor</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Medicine</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allDonations.map(({ _id, donor, donatedMedicine, date }) => (
                                    <tr key={_id}>
                                        <td>{donor.fullName}</td>
                                        <td>{donor.email}</td>
                                        <td>{donor.phone}</td>
                                        <td>{donor.address}</td>
                                        <td>{new Date(date).toLocaleDateString('en-GB')}</td>
                                        <td>
                                            <button onClick={() => handleModal(donatedMedicine)}>Details</button>
                                        </td>
                                        <td>
                                            <MdDone style={done} onClick={() => HandleApprove(_id)} />
                                            <MdOutlineCancel style={cancel} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            }
        </>
    )
}

export default DonationTable