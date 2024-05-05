import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/assets/images/logo.svg";

const Sidebar = () => {
    const [arrow, setArrow] = useState(true);

    const changeArrow = () => {
        setArrow((prev) => !prev);
    };

    return (
        <nav
            className={` ${
                arrow ? "min-w-[255px]" : "max-w-[100px]"
            } bg-[--black]  text-[--grey]  pt-[37px]    `}
        >
            <div className=" sticky top-[37px] ">
                <div
                    onClick={changeArrow}
                    className=" z-10 cursor-pointer absolute grid place-content-center w-8 h-8 rounded-lg bg-[--grey] top-[50px] right-[-14px] "
                >
                    {arrow ? (
                        <i className="fa-solid fa-chevron-left text-[--black] "></i>
                    ) : (
                        <i className="fa-solid fa-chevron-right text-[--black] "></i>
                    )}
                </div>

                <div className="flex items-center gap-3 mb-[60px] pl-[32px] ">
                    <img src={Logo} alt="logo" />
                    <p
                        className={`text-[19px] font-bold ${
                            arrow ? "visible" : "hidden"
                        } `}
                    >
                        Dashboard Kit
                    </p>
                </div>

                <ul className=" flex flex-col  mb-4 border-b  border-[#DFE0EB]  ">
                    <NavLink
                        to={"/"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className="  flex gap-6 items-center ">
                            <i className="fa-solid fa-chart-pie"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Home
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/tickets"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className="  flex gap-6 items-centepr-10r ">
                            <i className="fa-solid fa-ticket"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Tickets
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/ideas"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className={`flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-lightbulb"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Ideas
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/contacts"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className={` flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-users"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Contacts
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/agents"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className={` flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-user-tie"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Agents
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/article"}
                        className="py-5 pl-[32px] flex gap-6 items-center mb-4 "
                    >
                        <li className={` flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-newspaper"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Article
                            </span>
                        </li>
                    </NavLink>
                </ul>

                <ul className=" flex flex-col  mt-[16px] ">
                    <NavLink
                        to={"/settings"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className={` flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-gear"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Settings
                            </span>
                        </li>
                    </NavLink>

                    <NavLink
                        to={"/subscription"}
                        className="py-5 pl-[32px] flex gap-6 items-center"
                    >
                        <li className={` flex gap-6 items-center  pr-10 `}>
                            <i className="fa-solid fa-award"></i>
                            <span
                                className={`${arrow ? "visible" : "hidden"} `}
                            >
                                Subscription
                            </span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
