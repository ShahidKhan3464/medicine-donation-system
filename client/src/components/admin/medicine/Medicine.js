import React from 'react'
import { useLocation } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

const Medicine = () => {
    const { state: { medicine } } = useLocation()

    const makeStyle = (Approved) => {
        if (Approved) return { color: 'green' }
        else return { color: 'red' }
    }

    return (
        <div className="Medicine">
            <h3>Medicine Details</h3>
            <div className="Tabl">
                <div className="Table-container">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Mfg Date</th>
                                <th>Exp Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{medicine.name}</td>
                                <td>{medicine.type}</td>
                                <td>{medicine.quantity}</td>
                                <td>{new Date(medicine.mfgDate).toLocaleDateString('en-GB')}</td>
                                <td>{new Date(medicine.expDate).toLocaleDateString('en-GB')}</td>
                                {/* <td style={makeStyle(medicine.isApproved)}>{medicine.isApproved ? 'Approved' : 'Not Approved'}</td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Medicine