import React from "react";
import Cards from "../cards/Cards";
import Table from "../table/Table";
import "./style.css";

const MainDash = () => {

    return (
        <>
            <main className="MainDash">
                <h3>Dashboard</h3>
                <Cards />
                <Table />
            </main>
        </>
    );
};

export default MainDash;