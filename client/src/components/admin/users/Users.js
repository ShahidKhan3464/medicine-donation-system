import React from 'react'
import Table from 'react-bootstrap/Table'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Users = () => {

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

    const users = [
        {
            id: 1,
            name: 'shahid',
            email: 'shahid@gmail.com',
            address: 'Ring road, Peshawar'
        },
        {
            id: 2,
            name: 'tariq',
            email: 'tariq@gmail.com',
            address: 'Ring road, Peshawar'
        },
        {
            id: 3,
            name: 'khan',
            email: 'khan@gmail.com',
            address: 'Ring road, Peshawar'
        },
    ]

    return (
        <div className='Users'>
            <h3>View Users</h3>
            <div className="Tabl">
                <h5>Users Details</h5>
                <div className="Table-container">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
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
        </div>
    )
}

export default Users