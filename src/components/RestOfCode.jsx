import React from "react";
import Sidebar from "../container/Sidebar";

const RestOfCode = () => {
    return (
        <div className="flex min-h-[100vh] " >
            <Sidebar />
            <div className="w-full h-full grid place-content-center " >
                    <h1 className="text-[50px] " >Rest Of Code</h1>
            </div>
        </div>
    );
};

export default RestOfCode;
