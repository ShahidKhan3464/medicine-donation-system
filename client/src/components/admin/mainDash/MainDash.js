import React from "react";
import { useFetch } from './data/data'
import Loader from "../../../components/loader/Loader";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import "./style.css";

const MainDash = () => {
    const { loading, allData, allDonations } = useFetch();

    return (
        <>
            <main className="MainDash">
                {loading
                    ? <Loader />
                    : <>
                        <h3>Dashboard</h3>
                        <Cards allData={allData} />
                        <Table allDonations={allDonations} />
                    </>
                }
            </main>
        </>
    );
};

export default MainDash;