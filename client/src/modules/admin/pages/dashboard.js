import React, { useState, useEffect, useCallback } from "react";
import donationsIcon from "../../../images/donations.png";
import sweetAlert from "../../../components/sweetAlert";
import { PrimaryHeading } from "../../../globalStyle";
import usersIcon from "../../../images/users.png";
import ngosIcon from "../../../images/ngos.png";
import Loader from "../../../components/loader";
import DashboardTable from "./dashboardTable";
import Cards from "../cards";
import axios from "axios";

const Index = () => {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const [recentDonations, setRecentDonations] = useState([]);
    const [ngos, setNgos] = useState({ title: "Ngos", icon: ngosIcon, count: 0 });
    const [users, setUsers] = useState({ title: "Users", icon: usersIcon, count: 0 });
    const [donations, setDonations] = useState({ title: "Donations", icon: donationsIcon, count: 0 });

    const loadData = useCallback(async () => {
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
    }, [token])

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <React.Fragment>
            {loading
                ? <Loader />
                : <>
                    <PrimaryHeading size="40px">Dashboard</PrimaryHeading>
                    <Cards users={users} ngos={ngos} donations={donations} />
                    <DashboardTable recentDonations={recentDonations} loadData={loadData} />
                </>
            }
        </React.Fragment>
    );
};

export default Index;