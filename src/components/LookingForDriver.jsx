import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";

const LookingForDriver = ({ vehicleSelect, selectedLocation }) => {
    return (
        <div className="h-screen w-full bg-white flex flex-col justify-between">

            {/* Top Section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                    Looking for a driver
                </h2>
                <p className="text-gray-500">
                    We are finding the nearest driver for you...
                </p>
            </div>

            {/* Loader + Car */}
            <div className="flex flex-col items-center justify-center flex-1">
                <img
                    src={vehicleSelect?.image}
                    alt="vehicle"
                    className="w-32 mb-6 animate-bounce"
                />

                <FaSpinner className="text-4xl animate-spin text-black mb-4" />

                <p className="text-gray-600 text-sm">
                    Searching nearby drivers...
                </p>
            </div>

            {/* Ride Details */}
            <div className="bg-gray-100 rounded-t-3xl p-6 shadow-inner">

                {/* Pickup */}
                <div className="flex gap-4 py-3 border-b">
                    <FaMapMarkerAlt className="mt-1" />
                    <div>
                        <h3 className="font-semibold">{selectedLocation}</h3>
                        <p className="text-gray-500 text-sm">Pickup</p>
                    </div>
                </div>

                {/* Ride */}
                <div className="flex gap-4 py-3 border-b">
                    <FaSquare className="mt-2" />
                    <div>
                        <h3 className="font-semibold">{vehicleSelect?.title}</h3>
                        <p className="text-gray-500 text-sm">
                            {vehicleSelect?.description}
                        </p>
                    </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center pt-4">
                    <span className="text-gray-600">Fare</span>
                    <span className="font-bold text-lg">
                        ₹{vehicleSelect?.price}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default LookingForDriver;