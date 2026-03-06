import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/authService";

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // ================= VALIDATION =================

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validateForm = () => {
        let newErrors = {};

        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(form.email)) {
            newErrors.email = "Enter valid email";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ================= HANDLE LOGIN =================

    const handleContinue = async () => {
        if (!validateForm()) return;
        try {
            setLoading(true);
            const response = await loginUser({
                email: form.email,
                password: form.password
            });
            if (response?.data?.success) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", response.data.user);
                toast.success(response.data?.message)
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                alert("Login failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg">

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        What's your email address?
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleContinue}
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-900 transition disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Continue"}
                    </button>

                    {/* Register */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-black font-medium hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social Buttons */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-3 hover:bg-gray-50 transition">
                        <FaGoogle className="text-red-500 text-lg" />
                        <span className="font-medium text-gray-700">
                            Continue with Google
                        </span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-3 hover:bg-gray-50 transition">
                        <FaApple className="text-black text-xl" />
                        <span className="font-medium text-gray-700">
                            Continue with Apple
                        </span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
                        <FaFacebookF className="text-blue-600 text-lg" />
                        <span className="font-medium text-gray-700">
                            Continue with Facebook
                        </span>
                    </button>

                </div>
            </div>

            <Link
                to="/captain-login"
                className="w-full flex items-end justify-center gap-3 border border-gray-300 rounded-xl py-5 bg-green-300 hover:bg-gray-50 transition fixed bottom-0 left-0"
            >
                <span className="font-medium text-gray-700">
                    Captain Login
                </span>
            </Link>
        </>
    );
}