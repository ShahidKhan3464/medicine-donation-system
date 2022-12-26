import React, { useState } from 'react';
import { PrimaryHeading, TableContainer } from '../../../globalStyle';
import sweetAlert from "../../../components/sweetAlert";
import { MdDone, MdCancel } from 'react-icons/md';
import Button from '../../../components/button';
import Modal from '../../../components/modal';
import Table from 'react-bootstrap/Table';
import { List } from './style';
import axios from 'axios';

const Index = ({ recentDonations, loadData }) => {
    // const [setLoad] = useFetch
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem('token')
    const [medicine, setMedicine] = useState({})
    const [loading, setLoading] = useState(false)

    // const medicineDetails = (donatedMedicine) => {
    //     navigate("/admin/medicine", { state: { medicine: donatedMedicine } })
    // }

    const handleModal = (donatedMedicine) => {
        setMedicine(donatedMedicine)
        setOpen(true)
    }

    const handleApprove = async (id) => {
        try {
            setLoading(true)
            const { data, status } = await axios.patch(`http://localhost:3001/api/donation/approve/${id}`, {
                headers: { token }
            })

            if (status === 200) {
                sweetAlert('success', 'Success', `${data.message}`);
                setLoading(false)
                loadData()
            }
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false)
        }
    }

    return (
        <List>
            {open && <Modal open={open} setOpen={setOpen} medicine={medicine} />}
            <PrimaryHeading size="25px">Recent Donations</PrimaryHeading>
            <TableContainer>
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
                        {recentDonations.map(({ _id, donor, donatedMedicine, date }) => (
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
                                    {loading ? <Button type="button" text="" loading={loading} /> : <MdDone style={{ background: 'green' }} className='done' onClick={() => handleApprove(_id)} />}
                                    <MdCancel style={{ color: 'red' }} className='cancel' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </List >
    )
}

export default Index