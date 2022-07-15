import React from 'react'
import { MdDone, MdOutlineCancel } from 'react-icons/md'
import Table from 'react-bootstrap/Table'
import './style.css'

const DonationTable = () => {

    function createData(name, email, phone, address, date, medicine, status) {
        return { name, email, phone, address, date, medicine, status };
    }

    const donations = [
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Calpol", "Approved"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Calpol", "Pending"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Not Approved"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Delivered"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Delivered"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Delivered"),
    ];

    const done = {
        color: 'white',
        margin: '0 10px',
        cursor: 'pointer',
        fontSize: '1.2rem',
        borderRadius: '50%',
        background: 'green',
    }

    const cancel = {
        color: 'white',
        margin: '0 10px',
        cursor: 'pointer',
        background: 'red',
        fontSize: '1.2rem',
        borderRadius: '50%',
    }

    const makeStyle = (status) => {
        if (status === 'Approved') {
            return {
                color: 'green',
            }
        }
        else if (status === 'Not Approved') {
            return {
                color: 'red',
            }
        }
    }

    return (
        <div className='Tabl'>
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
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((donation, index) => (
                            <tr key={index}>
                                <td>{donation.name}</td>
                                <td>{donation.email}</td>
                                <td>{donation.phone}</td>
                                <td>{donation.address}</td>
                                <td>{new Date(donation.date).toLocaleDateString('en-GB')}</td>
                                <td>
                                    <button>Details</button>
                                </td>
                                <td className='status' style={makeStyle(donation.status)} >{donation.status}</td>
                                <td>
                                    <MdDone style={done} />
                                    <MdOutlineCancel style={cancel} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DonationTable