import React, { useState, useEffect, useCallback } from 'react';
import { PrimaryHeading, TableContainer } from '../../../globalStyle';
import sweetAlert from "../../../components/sweetAlert";
import { FaTrash, FaEdit } from 'react-icons/fa';
import Loader from '../../../components/loader';
import Table from 'react-bootstrap/Table';
import Pagination from '../pagination';
import { List } from './style';
import axios from 'axios';

const Index = () => {
    const [usersPerPage] = useState(5)
    const [users, setUsers] = useState([])
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const pagesVisited = currentPage * usersPerPage
    const start = pagesVisited - usersPerPage
    const currentUsers = users.slice(start, pagesVisited)
    const paginate = (number) => setCurrentPage(number)

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(users.length / usersPerPage)) setCurrentPage(currentPage + 1)
    }

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
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <List>
            {loading
                ? <Loader />
                : <>
                    <PrimaryHeading size="25px">Users Details</PrimaryHeading>
                    <TableContainer>
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
                                {currentUsers.map((user, index) => (
                                    <tr key={index + 1}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <FaTrash style={{ color: 'red' }} />
                                            <FaEdit style={{ color: 'green' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                    <Pagination
                        itemsPerPage={usersPerPage}
                        totalItems={users.length}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        paginate={paginate}
                        page={currentPage}
                    />
                </>
            }
        </List>
    )
}

export default Index