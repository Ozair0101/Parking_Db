import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Index from "./Index";
import OverViewCars from "./Dashboard/OverViewCars";
import Report from "./Dashboard/Report";

export default function Dashboard({
    count_cars,
    count_exit,
    report,
    last_month_revenue,
    today_revenue,
}) {
    return (
        <Index>
            <OverViewCars
                count_cars={count_cars}
                count_exit={count_exit}
                last_month_revenue={last_month_revenue}
                today_revenue={today_revenue}
            />
            <Report report={report} />
        </Index>
        // <AuthenticatedLayout
        //     header={
        //         <h2 className="text-xl font-semibold leading-tight text-gray-800">
        //             Dashboard
        //         </h2>
        //     }
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        //             <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">
        //                     You're logged in!
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
    );
}
