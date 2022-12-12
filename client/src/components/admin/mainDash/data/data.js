import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import usersPng from "../../../..//images/users.png";
import ngosPng from "../../../..//images/ngos.png";
import donationsPng from "../../../..//images/donations.png";

export const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState({ title: "Users", icon: usersPng, count: 0 });
    const [ngos, setNgos] = useState({ title: "Ngos", icon: ngosPng, count: 0 });
    const [donations, setDonations] = useState({ title: "Donations", icon: donationsPng, count: 0 });
    const [allDonations, setAllDonations] = useState([]);
    const token = localStorage.getItem("token");
    const allData = [users, ngos, donations];

    const loadData = async () => {
        try {
            setLoading(true);
            const users = axios.get("http://localhost:3001/api/user", { headers: { token } });
            const ngos = axios.get("http://localhost:3001/api/ngo", { headers: { token } });
            const donations = axios.get("http://localhost:3001/api/donation", { headers: { token } });
            await axios.all([users, ngos, donations])
                .then(axios.spread((...allData) => {
                    setUsers(pre => ({
                        ...pre,
                        count: allData[0].data.length
                    }));

                    setNgos(pre => ({
                        ...pre,
                        count: allData[1].data.length
                    }));

                    setDonations(pre => ({
                        ...pre,
                        count: allData[2].data.donations
                    }));

                    setAllDonations(allData[2].data.notApproved)
                }));
            setLoading(false);
        }
        catch (err) {
            setLoading(true);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `${err.response && err.response.data ? err.response.data.message : err.message}`
            })
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return { loading, allData, allDonations };
}