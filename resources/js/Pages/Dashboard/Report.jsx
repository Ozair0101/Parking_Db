import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import Index from "../Index";
import { useState } from "react";
import { router } from "@inertiajs/react";

const Report = ({ report }) => {
    const [searchPlate, setSearchPlate] = useState("");

    const filteredData = report.filter((item) => {
        const matchPlate = item.plate_number.includes(searchPlate);
        return matchPlate;
    });

    const handleDelete = (id) => {
        if (confirm("Are You Sure you want to delete!")) {
            router.delete(route("dashboard.delete", id));
        }
    };

    const handleUpdate = (id) => {
        router.get(route("dashboard.edit", id));
    };

    return (
        <section className="mt-8 p-4 bg-white">
            <div className="flex items-center gap-2 bg-white px-2 py-1 mb-3 rounded shadow-sm">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                    type="text"
                    className="h-6 border-gray-300 rounded-md"
                    onChange={(e) => {
                        setSearchPlate(e.target.value);
                    }}
                />
            </div>
            <div className="bg-white rounded shadow">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b text-sm">
                            {/* <th className="py-3 px-4">Reg #</th> */}
                            <th className="py-3 px-4">نام</th>
                            <th className="py-3 px-4">مودل موتر</th>
                            <th className="py-3 px-4">مقدار پول</th>
                            <th className="py-3 px-4">پلیت نمبر</th>
                            <th className="py-3 px-4">شهر</th>
                            <th className="py-3 px-4">تاریخ دخول</th>
                            <th className="py-3 px-4">تاریخ خروج</th>
                            <th className="py-3 px-4">Operation</th>
                            <th className="py-3 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr
                                className="border-b hover:bg-gray-50"
                                key={index}
                            >
                                {/* <td className="py-1 px-4">{item.id}</td> */}
                                <td className="py-1 px-4">{item.category}</td>
                                <td className="py-1 px-4">{item.model}</td>
                                <td className="py-1 px-4">{item.amount}</td>
                                <td
                                    className="py-1 text-left flex gap-2  px-4"
                                    dir="ltr"
                                >
                                    <span>{item.plate_number}</span>
                                    <span className="text-blue-400">--</span>
                                    <span className="text-left" dir="ltr">
                                        {item.type_plate}
                                    </span>
                                </td>
                                <td className="py-1 px-4">{item.city}</td>
                                <td className="py-1 px-4">{item.entry_date}</td>
                                <td className="py-1 px-4">{item.exist_date}</td>
                                <td className="py-1 px-4 space-x-2">
                                    {/* <FaEye className="text-blue-500 cursor-pointer" /> */}
                                    <FaEdit
                                        className="text-green-500 cursor-pointer"
                                        onClick={() => {
                                            handleUpdate(item.id);
                                        }}
                                    />
                                </td>
                                <td className="py-1 px-4">
                                    <FaTrash
                                        className="text-red-500 cursor-pointer"
                                        onClick={() => {
                                            handleDelete(item.id);
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
export default Report;
