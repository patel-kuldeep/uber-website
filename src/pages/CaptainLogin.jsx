import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Please fill all fields");
            return;
        }

        console.log("Captain Login:", formData);
        // 👉 Call your backend login API here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Captain Login
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Sign in to access your dashboard
                </p>

                {/* Form */}
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

                        {/* Eye Icon */}
                        <span
                            className="absolute right-4 top-[42px] cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Remember + Forgot */}
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

                        <a href="#" className="text-black font-medium hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Bottom text */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have a captain account?{" "}
                    <span className="text-black font-semibold cursor-pointer hover:underline">
                        <Link to="/captain-signup"> Register</Link>
                    </span>
                </p>

            </div>

            <Link to="/login" className="w-full flex items-end justify-center gap-3 border border-gray-300 rounded-xl py-5 bg-green-300 hover:bg-gray-50 transition fixed bottom-0 left-0">
                <span className="font-medium text-gray-700">
                    User Login
                </span>
            </Link>
        </div>
    );
};

export default CaptainLogin;
