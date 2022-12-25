import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NgoLinks from "./ngoLinks";
import Table from 'react-bootstrap/Table';
import Modal from '../../../components/modal';
import Footer from '../../../components/footer';
import Loader from '../../../components/loader';
import sweetAlert from '../../../components/sweetAlert';
import { PrimaryHeading, TableContainer, Underline } from "../../../globalStyle";
import { Donations } from './style';

const DonationList = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(true)
    const [medicine, setMedicine] = useState({})
    const [donations, setDonations] = useState([])

    const donationList = useCallback(async () => {
        try {
            setLoading(true)
            const { data, status } = await axios.get("http://localhost:3001/api/donation/tome", {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                setDonations(data)
            }
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
            setLoading(false)
        }
    }, [token])

    const handleModal = (donatedMedicine) => {
        setMedicine(donatedMedicine)
        setOpen(true)
    }

    useEffect(() => {
        if (!token) return navigate("/signin")
        donationList()
    }, [token, donationList, navigate])

    return (
        <React.Fragment>
            <NgoLinks />
            {open && <Modal open={open} setOpen={setOpen} medicine={medicine} />}
            <Donations>
                <div className='donations_heading'>
                    <PrimaryHeading>Donation List</PrimaryHeading>
                    <Underline></Underline>
                </div>
                {loading
                    ? <Loader />
                    : <TableContainer>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Donor</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Medicine</th>
                                    <th>Status</th>
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
                                    : donations.map(({ _id, donatedMedicine, donor, isApproved, date }) => (
                                        <tr key={_id}>
                                            <td>{donor.fullName}</td>
                                            <td>{donor.email}</td>
                                            <td>{donor.phone}</td>
                                            <td>{donor.address}</td>
                                            <td>{new Date(date).toLocaleDateString('en-GB')}</td>
                                            <td>
                                                <button onClick={() => handleModal(donatedMedicine)}>Details</button>
                                            </td>
                                            <td className={isApproved ? 'approved' : 'not-approved'}>{isApproved ? 'Approved' : 'Not yet approved'}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                }
            </Donations>
            <Footer />
        </React.Fragment>
    )
}

export default DonationList