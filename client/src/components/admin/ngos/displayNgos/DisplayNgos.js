import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'

const DisplayNgos = ({ ngos }) => {
    const remove = { color: 'red', margin: '0 10px', cursor: 'pointer' }
    const edit = { color: 'green', margin: '0 10px', cursor: 'pointer' }

    return (
        <div className="Tabl">
            <h5>Ngos Details</h5>
            <div className="Table-container">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Ngo</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ngos.map((ngo, index) => (
                            <tr key={index + 1}>
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
    )
}

export default DisplayNgos