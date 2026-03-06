import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import uberImage from "../assets/images/uber-map.gif";

const Dashboard = () => {

    const [panelOpen, setPanelOpen] = useState(false);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Map */}
            <img
                src={uberImage}
                alt="map"
                className="w-full h-full object-cover"
            />

            {/* Uber Logo */}
            <h1 className="text-3xl font-bold absolute top-5 left-5 bg-white px-3 py-1 rounded">
                Uber
            </h1>

            {/* Bottom Panel */}
            <div
                className={`
                absolute left-0 w-full bg-white rounded-t-3xl shadow-lg
                p-6 transition-all duration-800
                ${panelOpen ? "bottom-0 h-[100%]" : "bottom-0 h-[45%]"}
                `}
            >
                {/* Header */}
                <div className="flex items-center mb-6">
                    {panelOpen && (
                        <FaArrowLeft
                            className="text-xl cursor-pointer mr-4"
                            onClick={() => setPanelOpen(false)}
                        />
                    )}

                    <h2 className="text-2xl font-bold">
                        Find a trip
                    </h2>
                </div>

                {/* Pickup */}
                <div
                    onClick={() => setPanelOpen(true)}
                    className="bg-gray-200 rounded-lg p-4 mb-4 cursor-pointer"
                >
                    Add a pick-up location
                </div>

                {/* Destination */}
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                    Enter your destination
                </div>

                {/* Time */}
                <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    Leave Now
                </button>

            </div>

        </div>
    );
};

export default Dashboard;