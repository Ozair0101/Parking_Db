import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Index from "../Index";
import * as Yup from "yup";
import { router } from "@inertiajs/react";
import Cart from "../CartSuccess/Cart";

const CreateVehicleForm = () => {
    // Validation Schema
    const [message, setMessage] = useState("");
    const validationSchema = Yup.object({
        name: Yup.string().min(2).required("Required"),
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
        router.post(route("categroy.store"), values, {
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
                        اضافه نمودن مودل
                    </h2>

                    <Formik
                        initialValues={{
                            name: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={submit}
                    >
                        {({ handleSubmit, submitForm }) => (
                            <Form onSubmit={handleSubmit} className="px-4 pb-4">
                                {/* Second row: Vehicle Name, Vehicle Plat Number */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block font-semibold mb-1"
                                        >
                                            نام
                                        </label>
                                        <Field
                                            id="name"
                                            name="name"
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, submitForm)
                                            }
                                            placeholder="Vehicle Name"
                                            className="w-full border h-8 border-gray-300 rounded px-3 py-2"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            className="text-red-500"
                                            component="p"
                                        />
                                        {/* <ErrorMessage /> */}
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
                                            router.get(route("categroy.index"));
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

export default CreateVehicleForm;
