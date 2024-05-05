import React from "react";

const Filter = () => {
    return (
        <div className="flex justify-between px-[32px] items-center mb-[48px] ">
            <p className="text-[19px] font-bold ">All Tickets</p>
            <div>
                <ul className="flex items-center gap-8" >
                    <li  className="flex items-center gap-2 cursor-pointer text-[#4B506D] font-semibold " >
                        <i className="fa-solid fa-arrow-up-wide-short text-[--grey] "></i>
                        <span>Sort</span>
                    </li>

                    <li className="flex items-center gap-2 cursor-pointer text-[#4B506D] font-semibold " >
                        <i className="fa-solid fa-filter text-[--grey] "></i>
                        <span>Filter</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;
