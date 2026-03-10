import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquare } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import car from "../assets/images/car.svg";

const ConfirmRide = ({ vehicleSelect }) => {
    console.log('vehicleSelect: ', vehicleSelect);
    return (
        <div className="w-90 bg-white rounded-t-3xl shadow-lg">

            {/* Car Image */}
            <div className="flex justify-center items-center py-6 bg-gray-100">
                <img
                    src={vehicleSelect?.image}
                    alt="car"
                    className="w-40"
                />
            </div>

            <div className="px-6">

                {/* Pickup Location */}
                <div className="flex gap-4 py-5 border-b">
                    <FaMapMarkerAlt className="text-lg mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">562/11-A</h3>
                        <p className="text-gray-500 text-sm">
                            {vehicleSelect?.description}
                        </p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex gap-4 py-5 border-b">
                    <FaSquare className="text-sm mt-2" />
                    <div>
                        <h3 className="font-semibold text-lg">
                            {vehicleSelect?.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {vehicleSelect?.description}
                        </p>
                    </div>
                </div>

                {/* Price */}
                <div className="flex gap-4 py-5">
                    <FaEquals className="text-lg mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">{vehicleSelect?.price}</h3>
                        <p className="text-gray-500 text-sm">
                            Cash Cash
                        </p>
                    </div>
                </div>

            </div>

            {/* Confirm Button */}
            <div className="px-6 pb-6">
                <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">
                    Confirm Ride
                </button>
            </div>

        </div>
    );
};

export default ConfirmRide;