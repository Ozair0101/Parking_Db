import { FaCarSide, FaEye, FaHandsWash, FaSearch } from "react-icons/fa";
import Index from "../Index";
import { useEffect } from "react";
const Bill = ({ bill }) => {
    useEffect(() => {
        window.print();
    }, []);

    return (
        <>
            <section className="mt-8 p-4 bg-white" dir="rtl">
                <div className="bg-white rounded shadow">
                    <table className="w-full text-right border-collapse">
                        <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <th className="py-3 px-4">نام</th>
                                <td className="py-1 px-4">
                                    {bill.category["label"]}
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <th className="py-3 px-4">مودل موتر</th>
                                <td className="py-1 px-4">
                                    {bill.vehicleName}
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <th className="py-3 px-4">مقدار پول</th>
                                <td className="py-1 px-4">
                                    {bill.parkingCharges}
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <th className="py-3 px-4">پلیت نمبر</th>
                                <td
                                    className="py-1 text-left flex gap-2  px-4"
                                    dir="ltr"
                                >
                                    <span>{bill.number_plate}</span>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <th className="py-3 px-4">تاریخ دخول</th>
                                <td className="py-1 px-4">{bill.entry_date}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Bill;
