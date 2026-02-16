import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        vehicleType: "",
        vehicleModel: "",
        plateNumber: "",
        vehicleColor: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Captain Register Data:", formData);
        // 👉 Call your backend API: POST /api/captain/register
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Captain Registration
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Create your captain account
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Personal Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">
                            Personal Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Full Name */}
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                        </div>
                    </div>

                    {/* Password Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">
                            Security
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none pr-12"
                                />
                                <span
                                    className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none pr-12"
                                />
                                <span
                                    className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Vehicle Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">
                            Vehicle Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {/* Vehicle Type */}
                            <select
                                name="vehicleType"
                                value={formData.vehicleType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="bike">Bike</option>
                                <option value="auto">Auto</option>
                                <option value="car">Car</option>
                            </select>

                            {/* Vehicle Model */}
                            <input
                                type="text"
                                name="vehicleModel"
                                placeholder="Vehicle Model (e.g. Swift, Activa)"
                                value={formData.vehicleModel}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                            {/* Plate Number */}
                            <input
                                type="text"
                                name="plateNumber"
                                placeholder="Plate Number"
                                value={formData.plateNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                            {/* Vehicle Color */}
                            <input
                                type="text"
                                name="vehicleColor"
                                placeholder="Vehicle Color"
                                value={formData.vehicleColor}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none"
                            />

                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
                    >
                        Register as Captain
                    </button>
                </form>

                {/* Bottom link */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <span className="text-black font-semibold cursor-pointer hover:underline">
                        <Link to="/captain-login"> Login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CaptainSignUp;
