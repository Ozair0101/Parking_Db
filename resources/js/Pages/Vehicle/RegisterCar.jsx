import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Index from "../Index";
import * as Yup from "yup";
import { router } from "@inertiajs/react";
import Cart from "../CartSuccess/Cart";
import RegisterSelect2 from "./RegisterSelect";

const RegisterCar = ({ cars }) => {
    // Validation Schema
    const [message, setMessage] = useState("");
    const validationSchema = Yup.object({
        entry_date: Yup.date().required(),
        parkingCharges: Yup.number().min(1).required(),
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
    const submit = (values, { resetForm }) => {
        router.post(route("vehiclesStore.register"), values, {
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
                <div className="bg-white rounded shadow max-w-prose">
                    <h2 className="text-xl font-bold mb-4 border-b p-6">
                        اضافه نمودن وسایل
                    </h2>

                    <Formik
                        initialValues={{
                            number_plate: "",
                            entry_date: "",
                            parkingCharges: 50,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={submit}
                    >
                        {({
                            handleSubmit,
                            submitForm,
                            values,
                            setFieldValue,
                        }) => (
                            <Form onSubmit={handleSubmit} className="px-4 pb-4">
                                {/* Second row: Vehicle Name, Vehicle Plat Number */}
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-4">
                                    <div className="" dir="">
                                        <label
                                            htmlFor="vehiclePlateNumber"
                                            className="block font-semibold mb-1"
                                        >
                                            نمبر پلیت
                                        </label>
                                        <RegisterSelect2
                                            id="vehiclePlateNumber"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            options1={cars}
                                            name="number_plate"
                                            placeholder=" نمبر پلیت"
                                            // className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                        <ErrorMessage
                                            name="vehiclePlateNumber"
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
                                            value={values.parkingCharges}
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
                                <div className="flex gap-2 space-x-4 mt-6">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 h-8 flex items-center text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-gray-200 h-8 flex items-center text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
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

export default RegisterCar;
