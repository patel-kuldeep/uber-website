import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi";

const RideRequestCard = ({ request, onAccept, onDecline }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">
            New trip request
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {request?.distanceText} • {request?.etaText}
          </p>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-100">
          {request?.rideType || "UberGo"}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex gap-3">
          <MdMyLocation className="mt-0.5 h-5 w-5 text-emerald-600" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500">PICKUP</p>
            <p className="truncate text-sm font-medium text-slate-900">
              {request?.pickup}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaMapMarkerAlt className="mt-0.5 h-5 w-5 text-slate-700" />
          <div className="min-w-0">
            <p className="text-xs text-slate-500">DROP</p>
            <p className="truncate text-sm font-medium text-slate-900">
              {request?.drop}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <HiOutlineCreditCard className="h-5 w-5 text-emerald-600" />
            ₹{request?.fare}
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            {request?.payment || "Cash"}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onDecline}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RideRequestCard;

