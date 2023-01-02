import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DonorLinks from "./donorLinks";
import Table from 'react-bootstrap/Table';
import Modal from '../../../components/modal';
import Footer from '../../../components/footer';
import Loader from '../../../components/loader';
import sweetAlert from '../../../components/sweetAlert';
import { PrimaryHeading, TableContainer, Underline } from "../../../globalStyle";
import { Donations } from './style';

const MyDonations = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(true)
    const [medicine, setMedicine] = useState({})
    const [donations, setDonations] = useState([])

    const donationList = useCallback(async () => {
        try {
            setLoading(true)
            const { data, status } = await axios.get("http://localhost:3001/api/donation/mine", {
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
            <DonorLinks />
            {open && <Modal open={open} setOpen={setOpen} medicine={medicine} />}
            <Donations>
                <div className='donations_heading'>
                    <PrimaryHeading>My Donations</PrimaryHeading>
                    <Underline></Underline>
                </div>
                {loading
                    ? <Loader />
                    : <TableContainer maxWidth="1100">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Ngo</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Date</th>
                                    <th>Medicine</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.length === 0
                                    ? <tr>
                                        <td
                                            colSpan='7'
                                            style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}
                                        >
                                            No Donations Yet !!!
                                        </td>
                                    </tr>
                                    : donations.map(({ _id, donatedMedicine, ngo, isApproved, date }) => (
                                        <tr key={_id} >
                                            <td>{ngo.name}</td>
                                            <td>{ngo.email}</td>
                                            <td>{ngo.phone}</td>
                                            <td>{ngo.city}</td>
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

export default MyDonations