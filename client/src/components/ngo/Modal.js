import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const MedicineModal = ({ modal, setModal, medicines: { donatedMedicine, isApproved } }) => {

    return (
        <>
            <Modal show={modal} onHide={() => setModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Medicine Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover responsive className='Table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Manufacture Date</th>
                                <th>Expiry Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donatedMedicine.map(medicine => (
                                <tr key={medicine._id}>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.type}</td>
                                    <td>{medicine.quantity}</td>
                                    <td>{new Date(medicine.mfgDate).toLocaleDateString('en-GB')}</td>
                                    <td>{new Date(medicine.expDate).toLocaleDateString('en-GB')}</td>
                                    <td className={isApproved ? 'approved' : 'not-approved'}>{isApproved ? 'Approved' : 'Not yet approved'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MedicineModal