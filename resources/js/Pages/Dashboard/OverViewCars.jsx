import {
    FaBitcoin,
    FaCarSide,
    FaCoins,
    FaFolder,
    FaMoneyBill,
    FaMoneyBillAlt,
    FaMoneyBillWave,
    FaMoneyBillWaveAlt,
    FaMoneyCheck,
    FaMoneyCheckAlt,
    FaMousePointer,
    FaRegMoneyBillAlt,
    FaViacoin,
} from "react-icons/fa";

const OverViewCars = ({
    count_cars,
    count_exit,
    last_month_revenue,
    today_revenue,
}) => {
    return (
        //    {/* STATS CARDS */}
        <section className="grid grid-cols-4 gap-4 mt-6">
            {/* Card 1 */}
            <div className="bg-white border-b-8 border-b-green-400 rounded shadow p-4">
                <h2 className="text-lg font-semibold">وسایل پارک شده</h2>
                <p className="text-2xl flex items-center justify-between font-bold mt-2">
                    <div>{count_cars}</div>
                    <FaCarSide className="text-5xl text-gray-700" />
                </p>
                <p className="text-sm text-gray-500 mt-1">Total in Vehicles</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-b-8 border-b-red-400 rounded shadow p-4">
                <h2 className="text-lg font-semibold">وسایل خارج شده</h2>
                <p className="text-2xl flex items-center justify-between font-bold mt-2">
                    <div>{count_exit}</div>
                    <FaCarSide className="text-5xl text-gray-700" />
                </p>
                <p className="text-sm text-gray-500 mt-1">Total Out Vehicles</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border-b-8 border-b-green-400 rounded shadow p-4">
                <h2 className="text-lg font-semibold">درآمد امروز</h2>
                <p className="text-2xl flex items-center justify-between font-bold mt-2">
                    <div>{today_revenue}</div>
                    <FaRegMoneyBillAlt className="text-5xl text-gray-700" />
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    Total Daily Revenue
                </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-b-8 border-b-blue-400 rounded shadow p-4">
                <h2 className="text-lg font-semibold">درآمد ماهانه</h2>
                <p className="text-2xl flex items-center justify-between font-bold mt-2">
                    <div>{last_month_revenue}</div>
                    <FaMoneyBillAlt className="text-5xl text-gray-700" />
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    Total Monthly Revenue
                </p>
            </div>
        </section>
    );
};
export default OverViewCars;
