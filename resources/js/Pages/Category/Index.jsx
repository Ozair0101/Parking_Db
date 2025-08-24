import {
    FaCarSide,
    FaChevronCircleLeft,
    FaChevronDown,
    FaChevronRight,
    FaDropbox,
    FaEdit,
    FaEye,
    FaTrash,
} from "react-icons/fa";
import Index from "../Index";
import { router } from "@inertiajs/react";

const Index1 = ({ report }) => {
    const handleDelete = (id) => {
        if (confirm("Are You Sure you want to delete!")) {
            router.delete(route("categroy.delete", id));
        }
    };
    return (
        <Index>
            <div className="mt-4">
                <div className="flex items-center gap-4">
                    <div className="text-5xl text-blue-700">
                        <FaCarSide />
                    </div>
                    <h3 className="font-bold">Model List</h3>
                </div>
                <div></div>
            </div>
            <section className="mt-8 p-4 bg-white">
                <div className="bg-white rounded shadow">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4">NO</th>
                                <th className="py-3 px-4"> نام</th>
                                <th className="py-3 px-4">ساخته شده</th>
                                <th className="py-3 px-4">Operation</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        {report.map((item, index) => (
                            <tbody key={index}>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4">{item.name}</td>
                                    <td className="py-3 px-4">
                                        {item.user?.name}
                                    </td>
                                    <td
                                        className="py-3 px-4 flex space-x-2"
                                        onClick={() => {
                                            router.get(
                                                route("categroy.edit", item.id)
                                            );
                                        }}
                                    >
                                        {/* <FaEye className="text-blue-500 cursor-pointer" /> */}
                                        <FaEdit className="text-green-500 cursor-pointer" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <FaTrash
                                            className="text-red-500 cursor-pointer"
                                            onClick={() => {
                                                handleDelete(item.id);
                                            }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </section>
        </Index>
    );
};

export default Index1;
