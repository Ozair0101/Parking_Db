import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

const CartView = ({ isOpen, onClose, dataSet }) => {
    if (!isOpen) return null;
    const { data, setData, post, processing, errors, reset } = useForm({
        type: "",
    });

    const currentDate = new Date();
    const entryData = new Date(dataSet.entry_date);

    const timeDiffMs = currentDate.getTime() - entryData.getTime();
    const totalMinutes = Math.floor(timeDiffMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const result = `${hours}:${minutes}`;
    const total = (totalMinutes * (dataSet.amount / 60)).toFixed(0, 2);

    const submit = (e) => {
        e.preventDefault();

        post(route("typeExpense.store"), {
            onSuccess: () => {
                onClose();
                // setMessage("Employee Successfully addedd!");
                reset("type");
            },
        });
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose} // Close when clicking outside
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div>
                    <h2 className="border-b flex flex-col pb-2">
                        <div className=" flex gap-2">
                            <span className="text-gray-400 text-xl">
                                {dataSet.name}
                            </span>
                            ____
                            <span className="text-gray-400 text-xl">
                                {dataSet.model}
                            </span>
                        </div>
                        <div className="font-bold text-left" dir="ltr">
                            پلیت نمبر : {dataSet.plate_number}
                        </div>
                    </h2>
                    {/* <h2 className="border-b pb-2">
                        {dataSet.model}-{dataSet.name}----{dataSet.plate_number}
                    </h2> */}
                    <div className="flex justify-between mt-4">
                        <p>مدت زمان</p>
                        <p>{result}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p>مقدار پول فی ساعت</p>
                        <p>{dataSet.amount}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p>مقدار قابل پرداخت</p>
                        <p>{total}</p>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <button
                        onClick={onClose}
                        className="flex mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartView;
