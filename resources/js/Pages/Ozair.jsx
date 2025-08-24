import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import bgImg from "../slider-1.jpg";
// import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    // Validation Schema
    // const validationSchema = Yup.object({
    //     email: Yup.string().email("Invalid email").required("Required"),
    //     password: Yup.string().min(6, "Too short").required("Required"),
    // });

    // Handle Form Submission
    const handleSubmit = (values) => {
        console.log("Login Data:", values);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side Image */}
            <div
                className="hidden md:block w-2/3 bg-cover bg-center bg-parking relative"
                // style={{ backgroundImage: `url${bgImg}` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Right Side Login Form */}
            <div className="w-full md:w-1/3 flex justify-center items-center p-6">
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-2">
                        Sign In to Parking System
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                        Happy to see you again!
                    </p>

                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            remember: false,
                        }}
                        // validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="space-y-4">
                                {/* Email Field */}
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-2 text-gray-400" />
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full h-8 flex items-center pl-10 p-2 border rounded focus:ring focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="relative">
                                    <FaLock className="absolute left-3 top-2 text-gray-400" />
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="w-full pl-10 h-8 flex items-center p-2 border rounded focus:ring focus:ring-blue-400"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="p"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center">
                                        <Field
                                            type="checkbox"
                                            name="remember"
                                            className="mr-2 w-3 h-3"
                                        />
                                        Remember Me
                                    </label>
                                    <a
                                        href="/forgot-password"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Forgot Your Password?
                                    </a>
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gray-700 hover:bg-gray-400 text-white py-2 rounded-md transition"
                                >
                                    Login
                                </button>

                                {/* Sign Up Link */}
                                <p className="text-center text-sm">
                                    Don't have an account?{" "}
                                    <a
                                        href="/register"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Create an Account
                                    </a>
                                </p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
