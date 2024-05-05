import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const DataTable = () => {
    const [users, setUsers] = useState([]);

    const columns = [
        {
            name: "image",
            label: "Ticket details",
            options: {
                customBodyRender: (value, tableMeta) => {
                    const statusVal = tableMeta.rowData[tableMeta.columnIndex + 1];
                    const lastDay = tableMeta.rowData[tableMeta.columnIndex + 2];
        
                    return (
                        <div className="flex items-center gap-6 ">
                            <img
                                src={value}
                                className="w-[44px] h-[44px] rounded-full object-cover  "
                                alt="image"
                            />
                            <div>
                                <p className="text-[16px] text-[--balck] leading-4  ">
                                    {statusVal}
                                </p>
                                <span className=" text-[12px] text-[#C5C7CD] ">
                                    Updated {lastDay} day ago
                                </span>
                            </div>
                        </div>
                    );
                },
                filter: false,
            },
        },
        
        {
            name: "status",
            options: {
                display: false,
            },
        },
        
        {
            name: "lastSeen",
            options: {
                display: false,
            },
        },
        

        {
            name: "userName",
            label: "Customer name",
            options: {
                customBodyRender: (value, tableMeta ) => (
                    <div>
                        <p className="text-[16px] text-[--balck] leading-4 ">
                            {value}
                        </p>
                        <span className=" text-[12px] text-[#C5C7CD] ">
                          on  {tableMeta.rowData[tableMeta.columnIndex + 1]}
                        </span>
                    </div>
                ),
            },
        },

        {
            name: "date",
            label: "Date",
            options: {
                customBodyRender: (value, tableMeta) => (
                    <div>
                        <p className="text-[16px] text-[--balck] leading-4 ">
                            {value}
                        </p>
                        <span className=" text-[12px] text-[#C5C7CD] ">
                            {tableMeta.rowData[tableMeta.columnIndex + 1]}
                        </span>
                    </div>
                ),
            },
        },
        
        {
            name: "time",
            options: {
                display: false,
            },
        },

        {
            name: "priority",
            label: "Priority",
            options: {
                customBodyRender: (value) => (
                    <p
                        className={` uppercase text-white py-1 px-3 rounded-full inline-block ${
                            value == "high" ? "bg-red-500" : null
                        } ${
                            value == "low" ? "bg-yellow-500" : null
                        }  ${
                            value == "normal" ? "bg-[#29CC97]" : null
                        }
                         `}
                    >
                        {value}{" "}
                    </p>
                ),
            },
        },
        {
            name: "phone",
            label: " ",
            options: {
                customBodyRender: () => (
                    <span>
                        <i className="fa-solid fa-ellipsis-vertical"></i>{" "}
                    </span>
                ),
            },
        },
    ];

    useEffect(() => {
        fetch("../../Data.json")
            .then((res) => res.json())
            .then((data) => setUsers(data.users));
    }, []);

    const options = {
        filterType: "checkbox",
        selectableRows: "none",
        elevation: 0,
        rowsPerPage: 8,
        rowsPerPageOptions: [8, 20, 40, 100],
    };

    const getMuiTheme = () =>
        createTheme({
            typography: {
                fontFamily: "Mulish",
            },

            components: {
                MuiTableCell: {
                    styleOverrides: {
                        head: {
                            padding: " 0 12px 12px",
                            color: "var(--grey)",
                            textTransform: "capitalize",
                            
                        },
                        body: {
                            padding: "24px 32px ",
                            color: "var(--black)",
                            fontWeight: "600",
                            
                        },
                        footer: {},
                    },
                },
            },
        });

    return (
        <div>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"All tickets"}
                    columns={columns}
                    data={users}
                    options={options}
                />
            </ThemeProvider>
        </div>
    );
};

export default DataTable;
