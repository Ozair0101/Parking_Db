import React from "react";
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
    FaFile,
    FaFolder,
} from "react-icons/fa";
import SideHeader from "../Nav/SideHeader";
import OverViewCars from "./OverViewCars";
import Report from "./Report";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <SideHeader />
            {/* MAIN CONTENT */}
            <main className="flex-1 p-6">
                {/* TOP HEADER */}
                <header className="flex items-center justify-between">
                    <div className="flex items-center bg-white px-2 py-1 rounded shadow-sm">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-sm text-gray-600"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaBell className="text-gray-600" />
                        {/* Profile circle with "M" (as in screenshot) */}
                        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                            M
                        </div>
                    </div>
                </header>

                {/* STATS CARDS */}
                <section className="grid grid-cols-4 gap-4 mt-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-lg font-semibold">
                            Vechile In Today
                        </h2>
                        <p className="text-2xl flex items-center justify-between font-bold mt-2">
                            <div>1</div>
                            <FaCarSide className="text-5xl text-gray-700" />
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                            6% higher than last month
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-lg font-semibold">
                            Vechile Out Today
                        </h2>

                        <p className="text-2xl flex items-center justify-between font-bold mt-2">
                            <div>0</div>
                            <FaCarSide className="text-5xl text-gray-700" />
                        </p>

                        <p className="text-green-600 text-sm mt-1">
                            61% higher than last month
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-lg font-semibold">
                            Total Vechiles
                        </h2>
                        <p className="text-2xl flex items-center justify-between font-bold mt-2">
                            <div>1</div>
                            <FaCarSide className="text-5xl text-gray-700" />
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Total Vechiles
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-lg font-semibold">Revenue</h2>
                        <p className="text-2xl flex items-center justify-between font-bold mt-2">
                            <div>1800</div>
                            <FaFolder className="text-5xl text-gray-700" />
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Total Revenue
                        </p>
                    </div>
                </section>

                {/* TABLE SECTION */}
                <section className="mt-8">
                    <div className="bg-white rounded shadow">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    {/* <th className="py-3 px-4">Id</th> */}
                                    <th className="py-3 px-4">Reg #</th>
                                    <th className="py-3 px-4">Category</th>
                                    {/* <th className="py-3 px-4">Customer</th> */}
                                    <th className="py-3 px-4">Vehicle Name</th>
                                    <th className="py-3 px-4">Plat Number</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Created At</th>
                                    <th className="py-3 px-4">Operation</th>
                                    <th className="py-3 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">1</td>
                                    <td className="py-3 px-4">2</td>
                                    <td className="py-3 px-4">Corolla</td>
                                    <td className="py-3 px-4">Ozair</td>
                                    <td className="py-3 px-4">Corolla</td>
                                    <td className="py-3 px-4">2244</td>
                                    <td className="py-3 px-4 text-red-600">
                                        InActive
                                    </td>
                                    <td className="py-3 px-4">-</td>
                                    <td className="py-3 px-4 flex space-x-2">
                                        <FaEye className="text-blue-500 cursor-pointer" />
                                        <FaEdit className="text-green-500 cursor-pointer" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <FaTrash className="text-red-500 cursor-pointer" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
                    <p>
                        Copyright © 2018 JSS Parking System v2.0. All Rights
                        Reserved.
                    </p>
                    <p>
                        Crafted with <span className="text-red-500">♥</span> by
                        Jambasangsang
                    </p>
                </footer>
                <OverViewCars />
            </main>
        </div>
    );
};

export default Dashboard;
