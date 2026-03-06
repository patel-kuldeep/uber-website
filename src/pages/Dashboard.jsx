import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import uberImage from "../assets/images/uber-map.gif";
import LocationPanel from "./locationPanel";

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
                ${panelOpen ? "bottom-0 h-[100%]" : "bottom-0 h-[30%]"}
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
                {/* Pickup Location */}
                <div
                    onClick={() => setPanelOpen(true)}
                    className="flex items-center gap-3 bg-gray-200 rounded-lg px-4 py-3 mb-4"
                >
                    <div className="w-3 h-3 rounded-full border-2 border-black"></div>

                    <input
                        type="text"
                        placeholder="Add a pick-up location"
                        className="bg-transparent outline-none w-full"
                        onFocus={() => setPanelOpen(true)}
                    />
                </div>

                {/* Destination */}
                <div className="flex items-center gap-3 bg-gray-200 rounded-lg px-4 py-3 mb-4">
                    <div className="w-3 h-3 bg-black"></div>

                    <input
                        type="text"
                        placeholder="Enter your destination"
                        className="bg-transparent outline-none w-full"
                    />
                </div>
                {/* Time */}
                <button className="bg-gray-200 px-4 py-2 rounded-lg">
                    Leave Now
                </button>

                {panelOpen && (
                    <div className="absolute bottom-0 h-[70%] p-0 bg-white">
                        <LocationPanel />
                    </div>
                )}


            </div>

        </div>
    );
};

export default Dashboard;