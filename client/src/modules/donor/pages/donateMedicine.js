import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DonorLinks from "./donorLinks";
import Table from 'react-bootstrap/Table';
import Footer from '../../../components/footer';
import Loader from '../../../components/loader';
import sweetAlert from '../../../components/sweetAlert';
import { TableContainer } from "../../../globalStyle";
import { DonateMedicine } from './style';

const Index = () => {
    const navigate = useNavigate()
    const [ngos, setNgos] = useState([])
    const token = localStorage.getItem("token")
    const [location, setLocation] = useState('')
    const [loading, setLoading] = useState(false)

    const handleDonate = (e) => {
        navigate("/donor/donateForm", { state: { ngoId: e.target.id } })
    }

    const searchNgo = async () => {
        try {
            setNgos([])
            if (!location) return sweetAlert('error', 'Error', 'Please Enter a Location')
            setLoading(true)
            const { data, status } = await axios.get(`http://localhost:3001/api/ngo/search?location=${location}`, {
                headers: { token }
            })

            if (status === 200) {
                setLoading(false)
                setNgos(data)
            }
        }
        catch (err) {
            setLoading(true)
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`)
            setLoading(false)
        }
        setLocation('')
    }

    useEffect(() => {
        if (!token) return navigate("/user/login")
    }, [token, navigate])

    return (
        <React.Fragment>
            <DonorLinks />
            <DonateMedicine>
                <div className="donateMedicine_search-field">
                    <label htmlFor="search">search location to find NGOs</label>
                    <input
                        id="search"
                        type="text"
                        name="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                    <button onClick={searchNgo}>
                        <BsSearch />
                    </button>
                </div>
                {loading
                    ? <Loader />
                    : ngos.length !== 0 && <TableContainer maxWidth="1100">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Ngo</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ngos.map((ngo, index) => (
                                    <tr key={ngo._id}>
                                        <td>{index + 1}</td>
                                        <td>{ngo.name}</td>
                                        <td>{ngo.email}</td>
                                        <td>{ngo.phone}</td>
                                        <td>{ngo.city}</td>
                                        <td>
                                            <button
                                                id={ngo._id}
                                                type="button"
                                                onClick={handleDonate}
                                            >
                                                Donate
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                }
            </DonateMedicine>
            <Footer />
        </React.Fragment>
    )
}

export default Index