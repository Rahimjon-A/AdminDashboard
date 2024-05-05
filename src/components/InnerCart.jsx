import React from "react";

const InnerCart = ({ cartTitle, qunatitiy }) => {
    return (
        <div className=" border-b text-center w-full py-6 " >
            <p className="text-[16px] text-[--grey] font-semibold mb-1 " > {cartTitle} </p>
            <span className="text-[24px] font-semibold " > {qunatitiy} </span>
        </div>
    );
};

export default InnerCart;
