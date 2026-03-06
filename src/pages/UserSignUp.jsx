import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { toast } from "react-toastify";

export default function UserSignUp() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // ================= VALIDATIONS =================

    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validateForm = () => {
        let newErrors = {};

        if (!form.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

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

    // ================= HANDLE SUBMIT =================

    const handleRegister = async () => {
        if (!validateForm()) return;

        const payload = {
            fullName: {
                firstName: form.firstName,
                lastName: form.lastName,
            },
            email: form.email,
            password: form.password,
            phone: form.phone,
        }

        try {
            setLoading(true);
            const response = await registerUser(payload);
            if (response.data?.success) {
                navigate("/dashboard");
                toast(response?.data?.message);
                localStorage.setItem("token", response?.data?.token);
                localStorage.setItem("user", response?.data?.user);
            }
        } catch (error) {
            console.error(error);
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg">

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Create your account
                </h2>

                {/* First Name */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={(e) =>
                            setForm({ ...form, firstName: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Last Name (Optional)"
                        value={form.lastName}
                        onChange={(e) =>
                            setForm({ ...form, lastName: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
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
                        placeholder="Password"
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

                {/* Phone */}
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Phone (Optional)"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Register Button */}
                <button
                    onClick={handleRegister}
                    disabled={loading}
                    className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-900 transition disabled:opacity-50"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                {/* Login Redirect */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-black font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}