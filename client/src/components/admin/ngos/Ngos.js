import React from 'react'
import Table from 'react-bootstrap/Table'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Ngos = () => {

    const remove = {
        color: 'red',
        margin: '0 10px',
        cursor: 'pointer',
    }

    const edit = {
        color: 'green',
        margin: '0 10px',
        cursor: 'pointer',
    }

    const ngos = [
        {
            id: 1,
            name: 'edhi',
            email: 'edhi@gmail.com',
            phone: '12345',
            city: 'Karachi'
        },
        {
            id: 2,
            name: 'fatimid',
            email: 'fatimid@gmail.com',
            phone: '12345',
            city: 'Peshawar'
        },
        {
            id: 3,
            name: 'ehsaas',
            email: 'ehsaas@gmail.com',
            phone: '12345',
            city: 'Lahore'
        },
    ]

    return (
        <div className='Ngos'>
            <h3>View Ngos</h3>
            <div className="Tabl">
                <h5>Ngos Details</h5>
                <div className="Table-container">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Ngo</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ngos.map((ngo, index) => (
                                <tr key={index}>
                                    <td>{ngo.id}</td>
                                    <td>{ngo.name}</td>
                                    <td>{ngo.email}</td>
                                    <td>{ngo.phone}</td>
                                    <td>{ngo.city}</td>
                                    <td>
                                        <FaTrash style={remove} />
                                        <FaEdit style={edit} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Ngos;