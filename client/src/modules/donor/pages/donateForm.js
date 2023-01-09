import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import DonorLinks from "./donorLinks";
import Form from "react-bootstrap/Form";
import Footer from '../../../components/footer';
import Button from '../../../components/button';
import uploadImg from '../../../images/uploadImg.png';
import sweetAlert from '../../../components/sweetAlert';
import { PrimaryHeading, Underline } from "../../../globalStyle";
import filledCrossIcon from '../../../images/filledCrossIcon.svg';
import { DonateForm } from './style';

const Index = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(false)
  const [uploadImage, setUploadImage] = useState([])
  console.log(uploadImage)
  const [donor, setDonor] = useState({ fullName: "", email: "", phone: "", address: "", })
  const [medicine, setMedicine] = useState({ name: "", type: "", quantity: "", mfgDate: "", expDate: "" })

  const handleDonorChange = (e) => {
    if (e.target.name === "phone") return setDonor({ ...donor, [e.target.name]: Number(e.target.value) })
    setDonor({ ...donor, [e.target.name]: e.target.value })
  }

  const handleMedicineChange = (e) => {
    if (e.target.name === 'quantity') {
      if (e.target.value > 0) {
        setMedicine({ ...medicine, [e.target.name]: Number(e.target.value) })
      }
      return
    }
    setMedicine({ ...medicine, [e.target.name]: e.target.value })
  }

  const handleDonation = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data, status } = await axios.post("http://localhost:3001/api/donation", { donor, medicine, images: uploadImage, ngoId: state.ngoId }, {
        headers: { token }
      })

      if (status === 200) {
        sweetAlert('success', 'Success', `${data.message}`)
        setLoading(false)
      }
      setDonor({ fullName: "", email: "", phone: "", address: "", })
      setMedicine({ name: "", type: "", quantity: "", mfgDate: "", expDate: "" })
    }
    catch (err) {
      setLoading(true)
      sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
      setLoading(false)
    }
  }

  // const handleFileChange = (e) => {
  //   let id = uuidv4()
  //   console.log(e.target.files[0])
  //   let checkType = e.target.files[0].type;
  //   if (checkType === "image/png" || checkType === "image/jpeg" || checkType === "image/jpg") {
  //     const filePath = URL.createObjectURL(e.target.files[0])
  //     setUploadImage([...uploadImage, { id, filePath }])
  //     return
  //   }
  //   sweetAlert('warning', 'Warning', "Please Choose Correct File")
  // }

  const removeUploadImage = (id) => {
    const removedImage = uploadImage.filter((img) => img.id !== id)
    setUploadImage(removedImage)
  }

  useEffect(() => {
    if (!token) return navigate("/donor/donateMedicine")
  })

  return (
    <React.Fragment>
      <DonorLinks />
      <DonateForm>
        <div className='donateForm_heading'>
          <PrimaryHeading>Donate Form</PrimaryHeading>
          <Underline></Underline>
        </div>
        <div className="donateForm_form">
          <div className="donateForm_form_detail">
            <Form className="was-validated" onSubmit={handleDonation}>
              <div className="donateForm_form_detail_donor">
                <h5>Donor Detials:</h5>
                <div className="donateForm_form_detail_donor_fieldControl">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="name">FullName:</Form.Label>
                    <Form.Control
                      required
                      id="name"
                      type="text"
                      name="fullName"
                      value={donor.fullName}
                      onChange={handleDonorChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={donor.email}
                      onChange={handleDonorChange}
                    />
                  </Form.Group>
                </div>
                <div className="donateForm_form_detail_donor_fieldControl">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="phone">Phone:</Form.Label>
                    <Form.Control
                      required
                      id="phone"
                      name="phone"
                      type="number"
                      value={donor.phone}
                      onChange={handleDonorChange}
                    />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="address">Address:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      id="address"
                      name="address"
                      value={donor.address}
                      onChange={handleDonorChange}
                    />
                  </Form.Group>
                </div>

              </div>
              <div className="donateForm_form_detail_medicine">
                <h5>Medicine Details:</h5>
                <div className="donateForm_form_detail_medicine_fieldControl">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="name">Medicine Name:</Form.Label>
                    <Form.Control
                      required
                      id="name"
                      name="name"
                      type="text"
                      value={medicine.name}
                      onChange={handleMedicineChange}
                    />
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label htmlFor="type">MedicineType:</Form.Label>
                    <Form.Control
                      required
                      id="type"
                      name="type"
                      type="text"
                      value={medicine.type}
                      onChange={handleMedicineChange}
                    />
                  </Form.Group>
                </div>

                <div className="donateForm_form_detail_medicine_fieldControl">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="quantity">Quantity:</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={medicine.quantity}
                      onChange={handleMedicineChange}
                    />
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label htmlFor="mfgDate">MFG Date:</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      id="mfgDate"
                      name="mfgDate"
                      value={medicine.mfgDate}
                      onChange={handleMedicineChange}
                    />
                  </Form.Group>
                </div>

                <div style={{ alignItems: 'flex-start' }} className="donateForm_form_detail_medicine_fieldControl">
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="expDate">EXP Date:</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      id="expDate"
                      name="expDate"
                      value={medicine.expDate}
                      onChange={handleMedicineChange}
                    />
                  </Form.Group>

                  {/* <Form.Group className="form-group">
                    <h6>Upload Images:</h6>
                    <div className='donateForm_form_detail_medicine_fieldControl_browseImage_shown'>
                      {uploadImage?.map(({ id, filePath }) => (
                        <div
                          key={id}
                          className='donateForm_form_detail_medicine_fieldControl_browseImage_shown_imgBox'
                        >
                          <img
                            className='image'
                            alt='randomImage'
                            src={filePath}
                          />
                          <img
                            src={filledCrossIcon}
                            alt='filledCrossIcon'
                            className='filledCrossIcon'
                            onClick={() => removeUploadImage(id)}
                          />
                        </div>
                      ))}
                    </div>
                    <Form.Label htmlFor="file" className="upload-file">
                      <Form.Control
                        required
                        id="file"
                        type="file"
                        className="file-input"
                        onChange={(e) => handleFileChange(e)}
                      />
                      <img src={uploadImg} alt='upload-img' />
                    </Form.Label>
                  </Form.Group> */}
                </div>
              </div>
              <Button type="submit" text="Donate Now" loading={loading} />
            </Form>
          </div>
        </div>
      </DonateForm >
      <Footer />
    </React.Fragment >
  )
}

export default Index