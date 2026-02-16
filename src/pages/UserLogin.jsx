import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Email validation
    const validateEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const validatePassword = (value) => {
        return value.length >= 6; // Minimum 6 characters for password
    }

    const handleContinue = () => {
        if (!email) {
            alert("Please enter email address");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters");
            return;
        }

        alert("Login successful!");
        console.log("Login with:", email);
        return;
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                {/* Mobile Container */}
                <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg">

                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        What's your email address?
                    </h2>

                    {/* Email Input */}
                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Continue Button */}
                    <button
                        onClick={handleContinue}
                        className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-900 transition"
                    >
                        Continue
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Google */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-3 hover:bg-gray-50 transition">
                        <FaGoogle className="text-red-500 text-lg" />
                        <span className="font-medium text-gray-700">
                            Continue with Google
                        </span>
                    </button>

                    {/* Apple */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 mb-3 hover:bg-gray-50 transition">
                        <FaApple className="text-black text-xl" />
                        <span className="font-medium text-gray-700">
                            Continue with Apple
                        </span>
                    </button>

                    {/* Facebook */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-50 transition">
                        <FaFacebookF className="text-blue-600 text-lg" />
                        <span className="font-medium text-gray-700">
                            Continue with Facebook
                        </span>
                    </button>

                </div>



            </div>
            <Link to="/captain-login" className="w-full flex items-end justify-center gap-3 border border-gray-300 rounded-xl py-5 bg-green-300 hover:bg-gray-50 transition fixed bottom-0 left-0">
                <span className="font-medium text-gray-700">
                    Captain Login
                </span>
            </Link>
        </>
    );
}
