import { FaCarSide, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Index from "./Index";

const Report = () => {
    return (
        <Index>
            <div className="mt-4">
                <div className="flex items-center gap-4">
                    <div className="text-5xl text-blue-700">
                        <FaCarSide />
                    </div>
                    <h3 className="font-bold">Report</h3>
                </div>
                <div></div>
            </div>
            <section className="mt-8 p-4 bg-white">
                <div className="bg-white rounded shadow">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4">Id</th>
                                <th className="py-3 px-4">Reg #</th>
                                <th className="py-3 px-4">Category</th>
                                <th className="py-3 px-4">Customer</th>
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
        </Index>
    );
};

export default Report;
