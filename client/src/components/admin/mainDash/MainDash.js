import React from "react";
import Navbar from "../navbar/Navbar";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import "./style.css";

const MainDash = () => {

    return (
        <>
            <div className="MainDash">
                <Navbar />
                <h1>Dashboard</h1>
                <Cards />
                <Table />
            </div>
        </>
    );
};

export default MainDash;