import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaFlagCheckered } from "react-icons/fa";
import { HiOutlineCreditCard } from "react-icons/hi";

const ActiveTripCard = ({ trip, onCall, onComplete }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">Active trip</p>
          <p className="mt-1 text-xs text-slate-500">
            OTP: <span className="font-semibold text-slate-700">{trip?.otp}</span>{" "}
            • {trip?.etaText}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
            En route
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold">
            {trip?.riderName?.slice(0, 1) || "R"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">
              {trip?.riderName || "Rider"}
            </p>
            <p className="text-xs text-slate-500">{trip?.riderRating} ★</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onCall}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50"
        >
          <FaPhoneAlt className="h-4 w-4" />
          Call
        </button>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex gap-3">
          <FaMapMarkerAlt className="mt-0.5 h-5 w-5 text-emerald-600" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500">PICKUP</p>
            <p className="truncate text-sm font-medium text-slate-900">
              {trip?.pickup}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaFlagCheckered className="mt-0.5 h-5 w-5 text-slate-700" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500">DROP</p>
            <p className="truncate text-sm font-medium text-slate-900">
              {trip?.drop}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <HiOutlineCreditCard className="h-5 w-5 text-emerald-600" />
            ₹{trip?.fare}
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            {trip?.payment || "Cash"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onComplete}
        className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Complete trip
      </button>
    </div>
  );
};

export default ActiveTripCard;

