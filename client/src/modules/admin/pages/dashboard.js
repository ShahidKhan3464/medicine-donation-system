import React, { useState, useEffect } from "react";
import axios from "axios";
import donationsIcon from "../../../images/donations.png";
import usersIcon from "../../../images/users.png";
import ngosIcon from "../../../images/ngos.png";
import sweetAlert from "../../../components/sweetAlert";
import Loader from "../../../components/loader";
import Cards from "../cards";
import Table from "../table";
import { Dashboard } from './style';
import { PrimaryHeading } from "../../../globalStyle";

const Index = () => {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const [recentDonations, setRecentDonations] = useState([]);
    const [ngos, setNgos] = useState({ title: "Ngos", icon: ngosIcon, count: 0 });
    const [users, setUsers] = useState({ title: "Users", icon: usersIcon, count: 0 });
    const [donations, setDonations] = useState({ title: "Donations", icon: donationsIcon, count: 0 });

    const loadData = async () => {
        try {
            setLoading(true);
            const users = axios.get("http://localhost:3001/api/user", { headers: { token } });
            const ngos = axios.get("http://localhost:3001/api/ngo", { headers: { token } });
            const donations = axios.get("http://localhost:3001/api/donation", { headers: { token } });
            await axios.all([users, ngos, donations])
                .then(axios.spread((...allData) => {
                    setUsers(pre => ({ ...pre, count: allData[0].data.length }));
                    setNgos(pre => ({ ...pre, count: allData[1].data.length }));
                    setDonations(pre => ({ ...pre, count: allData[2].data.donations }));
                    setRecentDonations(allData[2].data.notApproved)
                }));
            setLoading(false);
        }
        catch (err) {
            setLoading(true);
            sweetAlert('error', 'Error!', `${err.response && err.response.data ? err.response.data.message : err.message}`);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Dashboard>
            {loading
                ? <Loader />
                : <>
                    <PrimaryHeading size="40px">Dashboard</PrimaryHeading>
                    <Cards users={users} ngos={ngos} donations={donations} />
                    <Table recentDonations={recentDonations} loadData={loadData} />
                </>
            }
        </Dashboard>
    );
};

export default Index;