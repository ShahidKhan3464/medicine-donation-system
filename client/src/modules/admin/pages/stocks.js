import React, { useState, useEffect, useCallback } from 'react';
import { PrimaryHeading, TableContainer } from '../../../globalStyle';
import sweetAlert from "../../../components/sweetAlert";
import Loader from '../../../components/loader';
import Table from 'react-bootstrap/Table';
import Pagination from '../pagination';
import { List } from './style';
import axios from 'axios';

const Index = () => {
    const [stocksPerPage] = useState(5)
    const [stocks, setStocks] = useState([])
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const pagesVisited = currentPage * stocksPerPage
    const start = pagesVisited - stocksPerPage
    const currentStocks = stocks.slice(start, pagesVisited)
    const paginate = (number) => setCurrentPage(number)

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(stocks.length / stocksPerPage)) setCurrentPage(currentPage + 1)
    }

    const getApprovedMedicine = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:3001/api/donation/approved', {
                headers: { token }
            })
            setStocks(data)
            setLoading(false)
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getApprovedMedicine()
    }, [getApprovedMedicine])

    return (
        <>
            <PrimaryHeading size="40px">View Stocks</PrimaryHeading>
            <List>
                {loading
                    ? <Loader />
                    : <>
                        <PrimaryHeading size="25px">Stocks Details</PrimaryHeading>
                        <TableContainer>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Quantity</th>
                                        <th>MFG Date</th>
                                        <th>EXP Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStocks.length === 0
                                        ? <tr>
                                            <td
                                                colSpan='7'
                                                style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', paddingTop: '20px' }}
                                            >
                                                No Stock Available !!!
                                            </td>
                                        </tr>
                                        : currentStocks.map(({ _id, donatedMedicine, isApproved }) => (
                                            <tr key={_id}>
                                                <td>{donatedMedicine.name}</td>
                                                <td>{donatedMedicine.type}</td>
                                                <td>{donatedMedicine.quantity}</td>
                                                <td>{new Date(donatedMedicine.mfgDate).toLocaleDateString('en-GB')}</td>
                                                <td>{new Date(donatedMedicine.expDate).toLocaleDateString('en-GB')}</td>
                                                <td>
                                                    <div className={`${isApproved ? 'approved' : ''}`}>{isApproved ? 'Approved' : null}</div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </TableContainer>
                        <Pagination
                            itemsPerPage={stocksPerPage}
                            totalItems={stocks.length}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            paginate={paginate}
                            page={currentPage}
                        />
                    </>
                }
            </List>
        </>
    )
}

export default Index