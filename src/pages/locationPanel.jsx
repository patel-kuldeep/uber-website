import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
    "National College, Bangalore",
    "South City Hospital, Bangalore",
    "Sagar Chandramma Bus Stop",
    "VV Puram Food Street",
    "Lalbagh Botanical Garden"
];

const LocationPanel = () => {
    return (
        <div className="bg-white rounded-t-3xl shadow-lg p-5">
            {locations.map((location, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 p-3 border-b cursor-pointer hover:bg-gray-100 rounded-lg transition"
                >
                    <div className="bg-gray-200 p-3 rounded-full">
                        <FaMapMarkerAlt className="text-gray-700 text-lg" />
                    </div>

                    <p className="text-gray-800 font-medium">{location}</p>
                </div>
            ))}
        </div>
    );
};

export default LocationPanel;