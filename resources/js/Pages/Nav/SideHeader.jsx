import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
    FaSearch,
    FaBell,
    FaTh,
    FaUserFriends,
    FaUsers,
    FaCarSide,
    FaClipboardList,
    FaEye,
    FaEdit,
    FaTrash,
    FaChevronRight,
    FaChevronDown,
} from "react-icons/fa";

const SideHeader = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Function to toggle dropdown for a specific menu
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return (
        <aside
            className="w-64 bg-slate-800 text-white flex flex-col text-right"
            dir="rlt"
        >
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                سیستم پارکینک
            </div>

            {/* NAVIGATION */}
            <nav className="flex-1 py-4">
                <ul className="space-y-2">
                    <li className="bg-gray-600 py-1 px-4">
                        <span className="text-gray-400 ">Navigation</span>
                    </li>
                    <li className="">
                        <Link
                            href={route("dashboard")}
                            className="flex items-center gap-2 space-x-2 px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <FaTh />
                            <span>دشبورد</span>
                        </Link>
                    </li>
                    {/* <li>
                        <a
                            href="#manageAdmins"
                            className="flex items-center space-x-2 px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <FaUserFriends />
                            <span>Manage Admins</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#manageCustomers"
                            className="flex items-center space-x-2 px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <FaUsers />
                            <span>Manage Customers</span>
                        </a>
                    </li> */}

                    {/* <hr className="my-4 border-gray-700" /> */}
                    <li className="bg-gray-600 py-1 px-4">
                        <span className="text-gray-400 ">UI Element</span>
                    </li>
                    <li>
                        <button
                            // href={route("vehicle.create")}
                            onClick={() => toggleDropdown("category")}
                            className="flex w-full items-center justify-between px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <div className="flex gap-2 items-center space-x-2">
                                <FaClipboardList />
                                <span>مدیریت نوعیت</span>
                            </div>
                            <div className="ml-2 cursor-pointer">
                                {openDropdown === "category" ? (
                                    <span className="text-xs">
                                        <FaChevronDown />
                                    </span>
                                ) : (
                                    <span className="text-xs">
                                        <FaChevronRight />
                                    </span>
                                )}
                            </div>
                        </button>
                        {/* Dropdown Items */}
                        {openDropdown === "category" && (
                            <ul className="ml-6 mt-1 space-y-1">
                                <li>
                                    <Link
                                        href={route("categroy.create")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        اضافه نمودن
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("categroy.index")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        لیست
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            onClick={() => toggleDropdown("vehicle")}
                            className="flex w-full items-center justify-between px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <div className="flex gap-2 items-center space-x-2">
                                <FaCarSide />
                                <span>ثبت نام وسایل نقلیه</span>
                            </div>
                            <div className="ml-2 cursor-pointer">
                                {openDropdown === "vehicle" ? (
                                    <span className="text-xs">
                                        <FaChevronDown />
                                    </span>
                                ) : (
                                    <span className="text-xs">
                                        <FaChevronRight />
                                    </span>
                                )}
                            </div>
                        </button>

                        {/* Dropdown Items */}
                        {openDropdown === "vehicle" && (
                            <ul className="ml-6 mt-1 space-y-1">
                                <li>
                                    <Link
                                        href={route("vehicles.create")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        اضافه نمودن
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("vehicles.index")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        لیست وسایل نقلیه
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("vehicles.register")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        ثبت وسایل
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* <li>
                        <button
                            onClick={() => toggleDropdown("manage")}
                            className="flex w-full items-center justify-between px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <div className="flex items-center space-x-2">
                                <FaCarSide />
                                <span>Manage Vehicles</span>
                            </div>
                            <div className="ml-2 cursor-pointer">
                                {openDropdown === "manage" ? (
                                    <span className="text-xs">
                                        <FaChevronDown />
                                    </span>
                                ) : (
                                    <span className="text-xs">
                                        <FaChevronRight />
                                    </span>
                                )}
                            </div>
                        </button>
                        //
                        {openDropdown === "manage" && (
                            <ul className="ml-6 mt-1 space-y-1">
                                <li>
                                    <Link
                                        href={route("vehicles.create")}
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        Create
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="/list-vehicles"
                                        className="block px-4 py-2 hover:bg-gray-700 rounded"
                                    >
                                        List
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li> */}

                    {/* <hr className="my-4 border-gray-700" /> */}
                    {/* <li className="bg-gray-600 py-1 px-4">
                        <span className="text-gray-400 ">Report Section</span>
                    </li> */}
                    {/* <li>
                        <Link
                            href={route("report.report")}
                            className="flex items-center gap-2 space-x-2 px-2 py-2 hover:bg-slate-700 rounded"
                        >
                            <FaClipboardList />
                            <span>Report</span>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </aside>
    );
};

export default SideHeader;
