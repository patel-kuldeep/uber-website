import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const RecentTripItem = ({ trip }) => {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-900">
          {trip?.pickup} → {trip?.drop}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {trip?.timeText} • {trip?.distanceText}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-slate-900">₹{trip?.fare}</p>
          <p className="text-xs text-slate-500">{trip?.status}</p>
        </div>
        <button
          type="button"
          className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
          aria-label="View trip"
        >
          <FaArrowUpRightFromSquare className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentTripItem;

