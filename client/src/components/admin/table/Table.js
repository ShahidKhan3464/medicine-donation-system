import React from 'react'

const Table = () => {

    function createData(name, email, phone, address, date, medicine, status) {
        return { name, email, phone, address, date, medicine, status };
    }

    const donations = [
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Calpol", "Approved"),
        createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Calpol", "Pending"),
        // createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Approved"),
        // createData("Shahid Khan", "s@gmail.com", 12345, "Peshawar", "2/6/2022", "Amoxil", "Delivered"),
    ];

    return (
        <div className="Table">
            <h3>Recent Donations</h3>
            <div className="Table-container">
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
                            <th>Action</th>
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
                                <td>{donation.medicine}</td>
                                <td>{donation.status}</td>
                                <td>
                                    <button>Action</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Table