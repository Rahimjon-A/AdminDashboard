import React from "react";
import Sidebar from "../container/Sidebar";
import Title from "../components/Title";
import DataTable from "../components/DataTable";


const Tickets = () => {
    return (
        <div className="flex min-h-[100vh] " >
            <Sidebar/>
            <div className=" py-[36px] px-[30px] bg-[--bg-white] w-full " >
                    <Title title={"Tickets"} />
                    <div className=" bg-white border border-[--border] rounded-lg pt-[32px]" >
                        <DataTable/>
                    </div>
            </div>
        </div>
    );
};

export default Tickets;
