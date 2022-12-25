import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { TableContainer } from '../../globalStyle';

const MedicineModal = ({ open, setOpen, medicine }) => (
    <React.Fragment>
        <Modal show={open} onHide={() => setOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Medicine Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TableContainer>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Mgf Date</th>
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
                            </tr>
                        </tbody>
                    </Table>
                </TableContainer>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </React.Fragment >
)

export default MedicineModal