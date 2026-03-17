import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import uberImage from "../assets/images/uber-map.gif";

import LocationPanel from "../components/locationPanel";
import RideSelection from "../components/RideSelection";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Dashboard = () => {
    const [showLocationPanel, setShowLocationPanel] = useState(false);
    const [showRideSelection, setShowRideSelection] = useState(false);
    const [vehicleSelect, setVehicleSelect] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [lookingForDriver, setLookingForDriver] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    useEffect(() => {
        if (lookingForDriver) {
            const timer = setTimeout(() => {
                setLookingForDriver(false);   // stop loading screen
                setWaitingForDriver(true);    // show waiting screen
            }, 10000); // 30 sec delay

            return () => clearTimeout(timer);
        }
    }, [lookingForDriver]);

    return (
        <div className="relative h-screen w-full overflow-hidden">

            <img
                src={uberImage}
                alt="map"
                className="w-full h-full object-cover"
            />

            <h1 className="text-3xl font-bold absolute top-5 left-5 bg-white px-3 py-1 rounded">
                Uber
            </h1>

            <div className="absolute bottom-0 w-full bg-white rounded-t-3xl p-6">

                {/* DEFAULT */}
                {!showRideSelection && vehicleSelect === null && (
                    <>
                        <h2 className="text-2xl font-bold mb-6">Find a trip</h2>

                        <input
                            placeholder="Pickup location"
                            className="w-full p-3 mb-3 bg-gray-200 rounded"
                            onFocus={() => setShowLocationPanel(true)}
                        />

                        <input
                            placeholder="Destination"
                            className="w-full p-3 mb-3 bg-gray-200 rounded"
                            onFocus={() => setShowLocationPanel(true)}
                        />
                    </>
                )}

                {/* LOCATION */}
                {showLocationPanel && !showRideSelection && (
                    <LocationPanel
                        setSelectedLocation={setSelectedLocation}
                        onLocationSelect={() => {
                            setShowLocationPanel(false);
                            setShowRideSelection(true);
                        }}
                    />
                )}

                {/* RIDE */}
                {showRideSelection && vehicleSelect === null && (
                    <div>
                        <FaArrowLeft
                            className="mb-4 cursor-pointer"
                            onClick={() => {
                                setShowRideSelection(false);
                                setShowLocationPanel(true);
                            }}
                        />

                        <RideSelection setVehicleSelect={setVehicleSelect} />
                    </div>
                )}

                {/* CONFIRM */}
                {vehicleSelect && !lookingForDriver && !waitingForDriver && (
                    <div>
                        <FaArrowLeft
                            className="mb-4 cursor-pointer"
                            onClick={() => {
                                setVehicleSelect(null);
                                setShowRideSelection(true);
                            }}
                        />

                        <ConfirmRide
                            vehicleSelect={vehicleSelect}
                            selectedLocation={selectedLocation}
                            setLookingForDriver={setLookingForDriver}
                        />
                    </div>
                )}

                {lookingForDriver && !waitingForDriver && (
                    <LookingForDriver
                        vehicleSelect={vehicleSelect}
                        selectedLocation={selectedLocation}
                    />
                )}

                {waitingForDriver && (
                    <WaitingForDriver
                        vehicleSelect={vehicleSelect}
                        selectedLocation={selectedLocation}
                    />
                )}
            </div>
        </div>
    );
};

export default Dashboard;