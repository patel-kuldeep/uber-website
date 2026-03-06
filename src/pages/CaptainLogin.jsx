import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginCaptain } from "../services/captainService";

const CaptainLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    // ================= VALIDATION =================

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Enter valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ================= HANDLE CHANGE =================

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Remove error while typing
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    // ================= HANDLE SUBMIT =================

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        // Structured console output
        const loginData = {
            email: formData.email,
            password: formData.password,
            remember: formData.remember,
            role: "captain"
        };
        console.log("✅ Captain Login Data:", loginData);
        try {
            const response = await loginCaptain(loginData)
            console.log('response: ', response);
            if (response?.data?.success) {
                navigate('/captain-dashboard')
                localStorage.setItem("captainToken", response?.data?.token);
                localStorage.setItem("captain", JSON.stringify(response?.data?.captain));
                toast.success(response?.data?.message);
                setFormData({
                    email: "",
                    password: "",
                    remember: false,
                })
            }
        } catch (error) {
            console.log('error: ', error);
            toast.error(error?.error?.message)
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Captain Login
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Sign in to access your dashboard
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="captain@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-black focus:border-black pr-12"
                        />

                        <span
                            className="absolute right-4 top-[42px] cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Remember */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                                className="w-4 h-4"
                            />
                            Remember me
                        </label>

                        <span className="text-black font-medium hover:underline cursor-pointer">
                            Forgot password?
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have a captain account?{" "}
                    <Link
                        to="/captain-signup"
                        className="text-black font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

            <Link
                to="/login"
                className="w-full flex items-end justify-center gap-3 border border-gray-300 rounded-xl py-5 bg-green-300 hover:bg-gray-50 transition fixed bottom-0 left-0"
            >
                <span className="font-medium text-gray-700">
                    User Login
                </span>
            </Link>
        </div>
    );
};

export default CaptainLogin;