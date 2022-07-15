import { useState, useEffect, useCallback } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import Table from 'react-bootstrap/Table'
import Loader from '../../loader/Loader'
import Swal from 'sweetalert2'
import axios from 'axios'

const Ngos = () => {
    const [ngos, setNgos] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")

    const remove = { color: 'red', margin: '0 10px', cursor: 'pointer' }
    const edit = { color: 'green', margin: '0 10px', cursor: 'pointer' }

    const getNgos = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:3001/api/ngo', {
                headers: { token }
            })
            setNgos(data)
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
        getNgos()
    }, [getNgos])

    return (
        <div className='Ngos'>
            <h3>View Ngos</h3>
            {loading
                ? <Loader />
                : <div className="Tabl">
                    <h5>Ngos Details</h5>
                    <div className="Table-container">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
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
                                        <td>{index + 1}</td>
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
            }
        </div>
    )
}

export default Ngos;