import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerCaptain } from "../services/captainService";
import { toast } from "react-toastify";

const CaptainSignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        licenseNumber: "",
        password: "",
        confirmPassword: "",
        vehicleType: "",
        vehicleColor: "",
        vehiclePlate: "",
        vehicleCapacity: "",
        latitude: "",
        longitude: ""
    });

    const [errors, setErrors] = useState({});

    const inputStyle =
        "w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black outline-none";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName)
            newErrors.firstName = "First name is required";

        if (!formData.lastName)
            newErrors.lastName = "Last name is required";

        if (!formData.email)
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email address";

        if (!formData.phone)
            newErrors.phone = "Phone number required";

        if (!formData.licenseNumber)
            newErrors.licenseNumber = "License number required";

        if (!formData.password)
            newErrors.password = "Password required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Confirm password required";
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        if (!formData.vehicleType)
            newErrors.vehicleType = "Vehicle type required";

        if (!formData.vehicleColor)
            newErrors.vehicleColor = "Vehicle color required";

        if (!formData.vehiclePlate)
            newErrors.vehiclePlate = "Plate number required";

        if (!formData.vehicleCapacity)
            newErrors.vehicleCapacity = "Vehicle capacity required";

        if (!formData.latitude)
            newErrors.latitude = "Latitude required";

        if (!formData.longitude)
            newErrors.longitude = "Longitude required";

        return newErrors;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const payload = {
            fullName: {
                firstName: formData.firstName,
                lastName: formData.lastName
            },
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            licenseNumber: formData.licenseNumber,
            vehicleType: formData.vehicleType,
            vehicle: {
                color: formData.vehicleColor,
                plate: formData.vehiclePlate,
                capacity: Number(formData.vehicleCapacity),
                vehicleType: formData.vehicleType
            },
            location: {
                latitude: Number(formData.latitude),
                longitude: Number(formData.longitude)
            }
        };

        try {

            const response = await registerCaptain(payload);
            console.log("Captain Registered:", response);
            if (response?.data?.success) {
                navigate('/captain-dashboard')
                localStorage.setItem("captainToken", response?.data?.token);
                localStorage.setItem("captain", JSON.stringify(response?.data?.captain));
                toast.success(response?.data?.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    licenseNumber: "",
                    password: "",
                    confirmPassword: "",
                    vehicleType: "",
                    vehicleColor: "",
                    vehiclePlate: "",
                    vehicleCapacity: "",
                    latitude: "",
                    longitude: ""
                })
            }
        } catch (error) {
            console.log("Register Error:", error);
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Captain Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First Name */}
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className={inputStyle}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className={inputStyle}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={inputStyle}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className={inputStyle}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* License */}
                    <div>
                        <input
                            type="text"
                            name="licenseNumber"
                            placeholder="License Number"
                            className={inputStyle}
                            value={formData.licenseNumber}
                            onChange={handleChange}
                        />
                        {errors.licenseNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className={inputStyle}
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span
                            className="absolute right-4 top-4 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className={inputStyle}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <span
                            className="absolute right-4 top-4 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>

                    {/* Vehicle Type */}
                    <div>
                        <select
                            name="vehicleType"
                            className={inputStyle}
                            value={formData.vehicleType}
                            onChange={handleChange}
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="scooter">Scooter</option>
                        </select>
                        {errors.vehicleType && (
                            <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
                        )}
                    </div>

                    {/* Vehicle Color */}
                    <div>
                        <input
                            type="text"
                            name="vehicleColor"
                            placeholder="Vehicle Color"
                            className={inputStyle}
                            value={formData.vehicleColor}
                            onChange={handleChange}
                        />
                        {errors.vehicleColor && (
                            <p className="text-red-500 text-sm mt-1">{errors.vehicleColor}</p>
                        )}
                    </div>

                    {/* Vehicle Plate */}
                    <div>
                        <input
                            type="text"
                            name="vehiclePlate"
                            placeholder="Vehicle Plate"
                            className={inputStyle}
                            value={formData.vehiclePlate}
                            onChange={handleChange}
                        />
                        {errors.vehiclePlate && (
                            <p className="text-red-500 text-sm mt-1">{errors.vehiclePlate}</p>
                        )}
                    </div>

                    {/* Vehicle Capacity */}
                    <div>
                        <input
                            type="number"
                            name="vehicleCapacity"
                            placeholder="Vehicle Capacity"
                            className={inputStyle}
                            value={formData.vehicleCapacity}
                            onChange={handleChange}
                        />
                        {errors.vehicleCapacity && (
                            <p className="text-red-500 text-sm mt-1">{errors.vehicleCapacity}</p>
                        )}
                    </div>

                    {/* Latitude */}
                    <div>
                        <input
                            type="number"
                            name="latitude"
                            placeholder="Latitude"
                            className={inputStyle}
                            value={formData.latitude}
                            onChange={handleChange}
                        />
                        {errors.latitude && (
                            <p className="text-red-500 text-sm mt-1">{errors.latitude}</p>
                        )}
                    </div>

                    {/* Longitude */}
                    <div>
                        <input
                            type="number"
                            name="longitude"
                            placeholder="Longitude"
                            className={inputStyle}
                            value={formData.longitude}
                            onChange={handleChange}
                        />
                        {errors.longitude && (
                            <p className="text-red-500 text-sm mt-1">{errors.longitude}</p>
                        )}
                    </div>

                    <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
                        Register Captain
                    </button>

                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have account?{" "}
                    <Link to="/captain-login" className="font-semibold text-black">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default CaptainSignUp;