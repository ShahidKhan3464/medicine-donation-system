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
    const [ngosPerPage] = useState(5)
    const [ngos, setNgos] = useState([])
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const pagesVisited = currentPage * ngosPerPage
    const start = pagesVisited - ngosPerPage
    const currentNgos = ngos.slice(start, pagesVisited)
    const paginate = (number) => setCurrentPage(number)

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(ngos.length / ngosPerPage)) setCurrentPage(currentPage + 1)
    }

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
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getNgos()
    }, [getNgos])

    return (
        <List>
            {loading
                ? <Loader />
                : <>
                    <PrimaryHeading size="25px">Ngos Details</PrimaryHeading>
                    <TableContainer>
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
                                {currentNgos.map((ngo, index) => (
                                    <tr key={index + 1}>
                                        <td>{ngo.name}</td>
                                        <td>{ngo.email}</td>
                                        <td>{ngo.phone}</td>
                                        <td>{ngo.city}</td>
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
                        itemsPerPage={ngosPerPage}
                        totalItems={ngos.length}
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