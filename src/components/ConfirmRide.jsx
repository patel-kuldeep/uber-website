import React from "react";
import { FaMapMarkerAlt, FaEquals } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";

const ConfirmRide = ({ vehicleSelect, selectedLocation, setLookingForDriver }) => {
    return (
        <div className="bg-white rounded-t-3xl shadow-lg">

            <div className="flex justify-center py-6 bg-gray-100">
                <img src={vehicleSelect?.image} alt="car" className="w-40" />
            </div>

            <div className="px-6">
                <div className="flex gap-4 py-5 border-b">
                    <FaMapMarkerAlt className="mt-1" />
                    <div>
                        <h3 className="font-semibold">{selectedLocation}</h3>
                        <p className="text-gray-500 text-sm">
                            Pickup Location
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 py-5 border-b">
                    <FaSquare className="mt-2" />
                    <div>
                        <h3 className="font-semibold">{vehicleSelect?.title}</h3>
                        <p className="text-gray-500 text-sm">
                            {vehicleSelect?.description}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 py-5">
                    <FaEquals className="mt-1" />
                    <div>
                        <h3 className="font-semibold">₹{vehicleSelect?.price}</h3>
                        <p className="text-gray-500 text-sm">Cash</p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setLookingForDriver(true)}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
                Confirm Ride
            </button>
        </div>
    );
};

export default ConfirmRide;