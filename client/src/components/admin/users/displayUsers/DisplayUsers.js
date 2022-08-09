import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'

const DisplayUsers = ({ users }) => {
    const remove = { color: 'red', margin: '0 10px', cursor: 'pointer' }
    const edit = { color: 'green', margin: '0 10px', cursor: 'pointer' }

    return (
        <div className="Tabl">
            <h5>Users Details</h5>
            <div className="Table-container">
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index + 1}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
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

export default DisplayUsers