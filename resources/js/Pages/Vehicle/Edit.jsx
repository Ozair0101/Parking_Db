import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Index from "../Index";
import * as Yup from "yup";
import CustomProductSelect from "./Select";
import { router } from "@inertiajs/react";
import Cart from "../CartSuccess/Cart";

const city = [
    { name: "کابل", id: 1 },
    { name: "بلخ", id: 2 },
    { name: "قندهار", id: 3 },
    { name: "ننگرهار", id: 4 },
    { name: "هرات", id: 5 },
    { name: "بدخشان", id: 6 },
    { name: "وردک", id: 7 },
    { name: "نیمروز", id: 8 },
    { name: "فراه", id: 9 },
    { name: "هلمند", id: 10 },
    { name: "پروان", id: 11 },
    { name: "کندز", id: 12 },
    { name: "پنجشیر", id: 13 },
    { name: "پکتیا", id: 14 },
    { name: "ارزگان", id: 15 },
    { name: "غزنی", id: 16 },
    { name: "خوست", id: 17 },
    { name: "لغمان", id: 18 },
    { name: "زابل", id: 19 },
    { name: "لوگر", id: 20 },
    { name: "کنر", id: 21 },
    { name: "فاریاب", id: 22 },
];

const palteType = [
    { name: "ش", id: 1 },
    { name: "ب", id: 2 },
    { name: "موقت", id: 3 },
    { name: "د", id: 4 },
    { name: "ت", id: 5 },
];

const Edit = ({ category, data }) => {
    // Validation Schema
    const validationSchema = Yup.object({
        vehicleName: Yup.string().required(),
        number_plate: Yup.string().required(),
        parkingCharges: Yup.number().min(1).required(),
        entry_date: Yup.date().required(),
        color: Yup.string().required(),
    });

    const handleKeyDown = (event, submitForm) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const form = event.target.form;
            const index = Array.prototype.indexOf.call(form, event.target);
            const nextInput = form.elements[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                submitForm();
            }
        }
    };
    const [message, setMessage] = useState("");

    const submit = (values, { resetForm }) => {
        router.put(route("dashboard.update", data.id), values, {
            onSuccess: () => {
                setMessage("Information save it!");
                setTimeout(() => setMessage(""), 2000);
                resetForm();
            },
        });
    };
    return (
        <Index>
            <div className="p-4">
                {/* Card container */}
                <div className="max-w-full bg-white rounded shadow" dir="rtl">
                    <h2 className="text-xl font-bold mb-4 border-b p-6">
                        Edit Vehicle
                    </h2>

                    <Formik
                        initialValues={{
                            category: {
                                label: data.category,
                                value: data.category_id,
                            },
                            vehicleName: data.model,
                            car_id: data.car_id,
                            number_plate_id: data.number_plate_id,
                            vehicleName: data.model,
                            number_plate: data.number_plate,
                            color: data.color,
                            entry_date: data.entry_date,
                            parkingCharges: data.amount,
                            paletType: { label: data.type_plate, value: 29999 },
                            city: { label: data.city, value: 242424 },
                        }}
                        validationSchema={validationSchema}
                        onSubmit={submit}
                    >
                        {({
                            handleSubmit,
                            values,
                            setFieldValue,
                            submitForm,
                        }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="p-4 text-right"
                            >
                                {/* Second row: Vehicle Name, Vehicle Plat Number */}
                                <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-4">
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block font-semibold mb-1"
                                        >
                                            نوعیت
                                        </label>
                                        <CustomProductSelect
                                            options1={category}
                                            placeholder="انتخاب نوعیت"
                                            name="category"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="vehicleName"
                                            className="block font-semibold mb-1"
                                        >
                                            مودل موتر
                                        </label>
                                        <Field
                                            id="vehicleName"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            name="vehicleName"
                                            placeholder=" مودل موتر"
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="vehicleName"
                                            className="text-red-500"
                                            component="p"
                                        />
                                    </div>

                                    <div className="" dir="">
                                        <label
                                            htmlFor="vehiclePlateNumber"
                                            className="block font-semibold mb-1"
                                        >
                                            نمبر پلیت
                                        </label>
                                        <Field
                                            id="vehiclePlateNumber"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            name="number_plate"
                                            placeholder=" نمبر پلیت"
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="vehiclePlateNumber"
                                            className="text-red-500"
                                            component="p"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="block font-semibold mb-1"
                                        >
                                            ولایت
                                        </label>
                                        <CustomProductSelect
                                            options1={city}
                                            placeholder="ولایت"
                                            name="city"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="paletType"
                                            className="block font-semibold mb-1"
                                        >
                                            نوع پلیت
                                        </label>
                                        <CustomProductSelect
                                            options1={palteType}
                                            placeholder="نوع پلیت"
                                            name="paletType"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </div>
                                </div>

                                {/* Third row: Parking Duration, Parking Charges, Vehicle Status */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    <div>
                                        <label
                                            htmlFor="color"
                                            className="block font-semibold mb-1"
                                        >
                                            رنگ موتر
                                        </label>
                                        <Field
                                            id="color"
                                            name="color"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            placeholder="رنگ موتر"
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="color"
                                            className="text-red-500"
                                            component="p"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="entry_date"
                                            className="block font-semibold mb-1"
                                        >
                                            تاریخ ورود
                                        </label>
                                        <Field
                                            id="entry_date"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            name="entry_date"
                                            type="datetime-local"
                                            placeholder="Entry Date"
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="entry_date"
                                            className="text-red-500"
                                            component="p"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="parkingCharges"
                                            className="block font-semibold mb-1"
                                        >
                                            مقدار پول
                                        </label>
                                        <Field
                                            id="parkingCharges"
                                            name="parkingCharges"
                                            placeholder="Parking Charges"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="parkingCharges"
                                            className="text-red-500"
                                            component="p"
                                        />
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 space-x-4 mt-6">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 h-8 flex items-center text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-800 h-8 flex items-center px-4 py-2 rounded hover:bg-gray-300"
                                        onClick={() => {
                                            router.get(route("vehicles.index"));
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {message && <Cart message={message} />}
        </Index>
    );
};

export default Edit;
