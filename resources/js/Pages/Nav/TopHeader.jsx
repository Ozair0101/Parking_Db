import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";
import {
    FaAddressBook,
    FaBell,
    FaListOl,
    FaPersonBooth,
    FaRegAddressCard,
    FaRegistered,
    FaRegRegistered,
    FaSearch,
    FaThList,
} from "react-icons/fa";

const TopHeader = () => {
    return (
        /* TOP HEADER */
        <header className="flex items-center shadow-md px-4 py-1 bg-white justify-between">
            <div className="flex items-center bg-white px-2 py-1 rounded shadow-sm">
                {/* <FaSearch className="text-gray-400 mr-2" /> */}
                <Link href={route("vehicles.create")}>
                    <FaRegAddressCard className="text-gray-700 mr-2 text-2xl" />
                </Link>
                <Link href={route("vehicles.register")}>
                    <FaThList className="text-gray-700 mr-2 text-xl" />
                </Link>
            </div>

            <div className="flex items-center gap-2 space-x-4">
                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                    <div className="relative ms-3">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-xl font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                    >
                                        <FaAddressBook />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                {/* <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link> */}
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default TopHeader;
