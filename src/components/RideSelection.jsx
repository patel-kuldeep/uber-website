import { useState } from "react";
import RideOption from "./RideOption";
import car from "../assets/images/car.svg";
import bike from "../assets/images/bike.svg";
import auto from "../assets/images/auto.svg";
import { FaChevronDown } from "react-icons/fa";

const RideSelection = ({
    locationRidePanel,
    setLocationRidePanel,
    setVehicleSelect
}) => {

    const [selectedRide, setSelectedRide] = useState(null);

    const rides = [
        {
            image: car,
            title: "UberGo",
            seats: 4,
            time: "2 mins away • 15:24",
            description: "Affordable, compact rides",
            price: "193.20"
        },
        {
            image: bike,
            title: "Moto",
            seats: 1,
            time: "3 mins away • 15:24",
            description: "Affordable motorcycle rides",
            price: "65.17"
        },
        {
            image: auto,
            title: "Auto",
            seats: 3,
            time: "4 mins away • 15:25",
            description: "Comfortable auto rides",
            price: "120.00"
        }
    ];

    const handleSelect = (ride) => {
        setSelectedRide(ride.title);
        setVehicleSelect(ride);
    };

    return (
        <div className="bg-white rounded-t-3xl w-full">

            {/* Close Panel */}
            <button
                className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full mb-5"
                onClick={() => setLocationRidePanel(false)}
            >
                <FaChevronDown />
            </button>

            {/* Ride List */}
            {rides.map((ride, index) => (
                <div
                    key={index}
                    onClick={() => handleSelect(ride)}
                    className={`transition cursor-pointer rounded-xl mb-3 w-90
          
          ${selectedRide === ride.title
                            ? "border-2 border-black "
                            : "border border-transparent hover:border-black hover:shadow-md"
                        }
          
          `}
                >
                    <RideOption {...ride} />
                </div>
            ))}

        </div>
    );
};

export default RideSelection;