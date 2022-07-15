import React from 'react'
import Table from 'react-bootstrap/Table'

const Stock = () => {

    const stocks = [
        {
            name: 'Calpol',
            type: 'Tablet',
            quantity: '10',
            mfg: '2/6/2022',
            exp: '2/6/2022',
            status: 'Approved',
        },
        {
            name: 'Amoxil',
            type: 'Tablet',
            quantity: '10',
            mfg: '2/6/2022',
            exp: '2/6/2022',
            status: 'Approved',
        },
        {
            name: 'Calpol',
            type: 'Tablet',
            quantity: '10',
            mfg: '2/6/2022',
            exp: '2/6/2022',
            status: 'Approved',
        }
    ]

    return (
        <div className='Stock'>
            <h3>View Stock</h3>
            <div className="Tabl">
                <h5>Medicine Details</h5>
                <div className="Table-container">
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
                            {stocks.map((stock, index) => (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>{stock.type}</td>
                                    <td>{stock.quantity}</td>
                                    <td>{stock.mfg}</td>
                                    <td>{stock.exp}</td>
                                    <td>{stock.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Stock