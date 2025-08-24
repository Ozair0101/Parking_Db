import { FaCarSide, FaEye, FaHandsWash, FaSearch } from "react-icons/fa";
import Index from "../Index";
import { useState } from "react";
import CartView from "./CartView";
import CartExit from "./CartExit";

const Index1 = ({ report, count_cars, count_exit }) => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isExitOpen, setIsExitOpen] = useState(false);
    const [searchPlate, setSearchPlate] = useState("");

    const [data, setData] = useState({
        model: "",
        name: "",
        entry_date: "",
        amount: "",
        plate_number: "",
        id: "",
    });

    // const convertToEnglishNumbers = (input) => {
    //     if (!input) return "";

    //     const dariNumbers = "۰۱۲۳۴۵۶۷۸۹";
    //     const englishNumbers = "0123456789";

    //     const result = input
    //         .toString()
    //         .replace(
    //             /[۰-۹]/g,
    //             (d) => englishNumbers[dariNumbers.indexOf[d] || d]
    //         );
    //     console.log(result);
    //     return result;
    // };
    // // console.log(searchPlate);

    const filteredData = report.filter((item) => {
        // const plateNumber = convertToEnglishNumbers(item.plate_number || "");
        // const searchInput = convertToEnglishNumbers(searchPlate || "");
        const matchPlate = item.plate_number.includes(searchPlate);
        return matchPlate;
    });

    return (
        <Index>
            {isModelOpen && (
                <CartView
                    dataSet={data}
                    isOpen={isModelOpen}
                    onClose={() => {
                        setIsModelOpen(false);
                    }}
                />
            )}
            {isExitOpen && (
                <CartExit
                    dataSet={data}
                    isOpen={isExitOpen}
                    onClose={() => {
                        setIsExitOpen(false);
                    }}
                />
            )}
            <section className="grid grid-cols-4 gap-4 mt-6">
                {/* Card 1 */}
                <div className="bg-white border-b-8 border-b-green-400 rounded shadow p-4">
                    <h2 className="text-lg font-semibold">وسایل پارک شده</h2>
                    <p className="text-2xl flex items-center justify-between font-bold mt-2">
                        <div>{count_cars}</div>
                        <FaCarSide className="text-5xl text-gray-700" />
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white border-b-8 border-b-red-400 rounded shadow p-4">
                    <h2 className="text-lg font-semibold">وسایل خارج شده</h2>
                    <p className="text-2xl flex items-center justify-between font-bold mt-2">
                        <div>{count_exit}</div>
                        <FaCarSide className="text-5xl text-gray-700" />
                    </p>
                </div>
            </section>
            {/* <div className="mt-4">
                <div className="flex items-center gap-4">
                    <div className="text-5xl text-blue-700">
                        <FaCarSide />
                    </div>
                    <h3 className="font-bold">لیست وسایل نقلیه</h3>
                </div>
                
            </div> */}
            <section className="mt-8 p-4 bg-white">
                <div className="flex items-center gap-2 bg-white px-2 py-1 mb-3 rounded shadow-sm">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        className="h-6 border-gray-300 rounded-md"
                        onChange={(e) => {
                            // setSearchPlate(
                            // convertToEnglishNumbers(e.target.value)
                            // );
                            setSearchPlate(e.target.value);
                        }}
                    />
                </div>
                <div className="bg-white rounded shadow">
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b">
                                <th className="py-3 px-4">Reg #</th>
                                <th className="py-3 px-4">نام</th>
                                <th className="py-3 px-4">مودل موتر</th>
                                <th className="py-3 px-4">مقدار پول</th>
                                <th className="py-3 px-4">پلیت نمبر</th>
                                <th className="py-3 px-4">شهر</th>
                                <th className="py-3 px-4">تاریخ دخول</th>
                                <th className="py-3 px-4">Operation</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        {filteredData.map((item, index) => (
                            <tbody key={index}>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-1 px-4">{item.id}</td>
                                    <td className="py-1 px-4">
                                        {item.category}
                                    </td>
                                    <td className="py-1 px-4">{item.model}</td>
                                    <td className="py-1 px-4">{item.amount}</td>
                                    <td
                                        className="py-1 text-left flex gap-2  px-4"
                                        dir="ltr"
                                    >
                                        <span>{item.plate_number}</span>
                                        <span className="text-blue-400">
                                            --
                                        </span>
                                        <span className="text-left" dir="ltr">
                                            {item.type_plate}
                                        </span>
                                    </td>
                                    <td className="py-1 px-4">{item.city}</td>
                                    <td className="py-1 px-4">
                                        {item.entry_date}
                                    </td>
                                    <td className="py-1 px-4 flex space-x-2">
                                        <FaEye
                                            className="text-blue-500 cursor-pointer"
                                            onClick={() => {
                                                setData({
                                                    model: item.category,
                                                    name: item.model,
                                                    amount: item.amount,
                                                    entry_date: item.entry_date,
                                                    plate_number:
                                                        item.plate_number,
                                                });
                                                setIsModelOpen((prev) => !prev);
                                            }}
                                        />
                                        {/* <FaEdit className="text-green-500 cursor-pointer" /> */}
                                    </td>
                                    <td
                                        className="py-1 px-4 text-red-500 cursor-pointer font-bold"
                                        onClick={() => {
                                            setData({
                                                model: item.category,
                                                name: item.model,
                                                amount: item.amount,
                                                entry_date: item.entry_date,
                                                plate_number: item.plate_number,
                                                id: item.id,
                                            });
                                            setIsExitOpen((prev) => !prev);
                                        }}
                                    >
                                        خروج
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
