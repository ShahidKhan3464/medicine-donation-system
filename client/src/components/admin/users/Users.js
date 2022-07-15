import { useState, useEffect, useCallback } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'
import Loader from '../../loader/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")

    const remove = { color: 'red', margin: '0 10px', cursor: 'pointer' }
    const edit = { color: 'green', margin: '0 10px', cursor: 'pointer' }

    const getUsers = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:3001/api/user', {
                headers: { token }
            })
            setUsers(data)
            setLoading(false)
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
    }, [token])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <div className='Users'>
            <h3>View Users</h3>
            {loading
                ? <Loader />
                : <div className="Tabl">
                    <h5>Users Details</h5>
                    <div className="Table-container">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
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
            }
        </div>
    )
}

export default Users