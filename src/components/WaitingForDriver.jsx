import React from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";

const WaitingForDriver = ({ vehicleSelect, selectedLocation }) => {
    const driver = {
        name: "Rohit Sharma",
        rating: 4.8,
        carNumber: "MP 04 AB 1234",
        carModel: vehicleSelect?.title,
        time: "2 mins away",
        otp: "4721",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    };

    return (
        <div className="h-screen w-full bg-white flex flex-col">

            {/* HEADER */}
            <div className="p-6 border-b">
                <h2 className="text-2xl font-bold">Driver is on the way</h2>
                <p className="text-gray-500">{driver.time}</p>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="flex-1 bg-gray-200 flex items-center justify-center text-gray-500">
                Map View
            </div>

            {/* DRIVER DETAILS */}
            <div className="bg-white rounded-t-3xl shadow-xl p-6">

                {/* Driver Info */}
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-4">
                        <img
                            src={driver.image}
                            alt="driver"
                            className="w-14 h-14 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{driver.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <FaStar className="text-yellow-400" />
                                {driver.rating}
                            </div>
                        </div>
                    </div>

                    <button className="bg-black text-white p-3 rounded-full">
                        <FaPhone />
                    </button>
                </div>

                {/* Car Details */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div>
                        <p className="text-gray-500 text-sm">Vehicle</p>
                        <h3 className="font-semibold">{driver.carModel}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm">Number</p>
                        <h3 className="font-semibold">{driver.carNumber}</h3>
                    </div>
                </div>

                {/* OTP */}
                <div className="bg-gray-100 p-4 rounded-xl text-center mb-4">
                    <p className="text-gray-500 text-sm">Share OTP with driver</p>
                    <h2 className="text-2xl font-bold tracking-widest">
                        {driver.otp}
                    </h2>
                </div>

                {/* Ride Info */}
                <div className="border-t pt-4">

                    <div className="flex gap-4 py-2">
                        <FaMapMarkerAlt />
                        <p className="text-sm">{selectedLocation}</p>
                    </div>

                    <div className="flex gap-4 py-2">
                        <FaSquare />
                        <p className="text-sm">Your Destination</p>
                    </div>

                </div>

                {/* Cancel Button */}
                <button className="w-full mt-5 border border-red-500 text-red-500 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
                    Cancel Ride
                </button>

            </div>
        </div>
    );
};

export default WaitingForDriver;