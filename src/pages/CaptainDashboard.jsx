import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineAttachMoney, MdOutlineDirectionsCar } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";

import CaptainTopBar from "../components/captain/CaptainTopBar";
import AvailabilityToggle from "../components/captain/AvailabilityToggle";
import StatCard from "../components/captain/StatCard";
import RideRequestCard from "../components/captain/RideRequestCard";
import ActiveTripCard from "../components/captain/ActiveTripCard";
import RecentTripItem from "../components/captain/RecentTripItem";

const CaptainDashboard = () => {
    const navigate = useNavigate();
    const [isOnline, setIsOnline] = useState(true);
    const [incomingRequest, setIncomingRequest] = useState(true);
    const [activeTrip, setActiveTrip] = useState(false);

    const captain = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem("captain") || "{}");
        } catch {
            return {};
        }
    }, []);

    const captainName =
        captain?.fullName?.firstName ||
        captain?.name ||
        captain?.email ||
        "Captain";

    const request = {
        rideType: "UberGo",
        distanceText: "2.6 km",
        etaText: "Pickup in 6 min",
        pickup: "DB Mall, Bhopal",
        drop: "New Market, Bhopal",
        fare: "193.20",
        payment: "Cash",
    };

    const trip = {
        otp: "4721",
        etaText: "Arrive in 4 min",
        riderName: "Sarthak",
        riderRating: 4.8,
        pickup: request.pickup,
        drop: request.drop,
        fare: request.fare,
        payment: request.payment,
    };

    const recentTrips = [
        {
            pickup: "MP Nagar",
            drop: "Habibganj",
            timeText: "Today, 10:12 AM",
            distanceText: "5.1 km",
            fare: "152.00",
            status: "Completed",
        },
        {
            pickup: "Airport",
            drop: "New Market",
            timeText: "Yesterday, 6:34 PM",
            distanceText: "11.8 km",
            fare: "318.50",
            status: "Completed",
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem("captainToken");
        localStorage.removeItem("captain");
        navigate("/captain-login");
    };

    const handleToggleOnline = () => {
        setIsOnline((prev) => !prev);
        setIncomingRequest(false);
        setActiveTrip(false);
    };

    const handleAccept = () => {
        setIncomingRequest(false);
        setActiveTrip(true);
    };

    const handleDecline = () => {
        setIncomingRequest(false);
        setActiveTrip(false);
    };

    const handleComplete = () => {
        setActiveTrip(false);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <CaptainTopBar
                captainName={captainName}
                isOnline={isOnline}
                onLogout={handleLogout}
            />

            <div className="mx-auto max-w-6xl px-4 py-6">
                <div className="grid gap-4 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-4">
                        <AvailabilityToggle isOnline={isOnline} onToggle={handleToggleOnline} />

                        <div className="grid gap-4 sm:grid-cols-3">
                            <StatCard
                                title="Today’s earnings"
                                value="₹1,248"
                                subtext="+12% vs yesterday"
                                icon={MdOutlineAttachMoney}
                                tone="emerald"
                            />
                            <StatCard
                                title="Trips"
                                value="8"
                                subtext="Avg. 14 min/trip"
                                icon={MdOutlineDirectionsCar}
                                tone="indigo"
                            />
                            <StatCard
                                title="Rating"
                                value={
                                    <span className="inline-flex items-center gap-2">
                                        4.86 <FaStar className="text-amber-400" />
                                    </span>
                                }
                                subtext="Last 100 trips"
                                icon={HiOutlineClock}
                                tone="amber"
                            />
                        </div>

                        {!isOnline ? (
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <p className="text-lg font-semibold text-slate-900">
                                    You’re offline
                                </p>
                                <p className="mt-1 text-sm text-slate-600">
                                    Turn online to start receiving trip requests.
                                </p>
                            </div>
                        ) : activeTrip ? (
                            <ActiveTripCard
                                trip={trip}
                                onCall={() => { }}
                                onComplete={handleComplete}
                            />
                        ) : incomingRequest ? (
                            <RideRequestCard
                                request={request}
                                onAccept={handleAccept}
                                onDecline={handleDecline}
                            />
                        ) : (
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <p className="text-lg font-semibold text-slate-900">
                                    Waiting for requests
                                </p>
                                <p className="mt-1 text-sm text-slate-600">
                                    Stay online — we’ll match you with nearby riders.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setIncomingRequest(true)}
                                    className="mt-4 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                                >
                                    Simulate new request
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <p className="text-sm font-semibold text-slate-900">Quick actions</p>
                            <div className="mt-3 grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    Support
                                </button>
                                <button
                                    type="button"
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    Documents
                                </button>
                                <button
                                    type="button"
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    Wallet
                                </button>
                                <button
                                    type="button"
                                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                >
                                    Settings
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-900">Recent trips</p>
                            <button
                                type="button"
                                className="text-sm font-semibold text-slate-700 hover:underline"
                            >
                                View all
                            </button>
                        </div>

                        <div className="space-y-3">
                            {recentTrips.map((t, idx) => (
                                <RecentTripItem key={idx} trip={t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainDashboard;
