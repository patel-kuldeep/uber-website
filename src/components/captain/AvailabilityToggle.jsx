import React from "react";
import { FaCircle } from "react-icons/fa";

const AvailabilityToggle = ({ isOnline, onToggle }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <FaCircle
              className={`h-2.5 w-2.5 ${isOnline ? "text-emerald-500" : "text-slate-400"
                }`}
            />
            <p className="text-sm font-semibold text-slate-900">
              {isOnline ? "You’re online" : "You’re offline"}
            </p>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {isOnline
              ? "You can receive trip requests."
              : "Go online to start earning."}
          </p>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className={`relative inline-flex h-9 w-16 items-center rounded-full transition ${isOnline ? "bg-emerald-600" : "bg-slate-300"
            }`}
          aria-pressed={isOnline}
          aria-label="Toggle online status"
        >
          <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition ${isOnline ? "translate-x-8" : "translate-x-1"
              }`}
          />
        </button>
      </div>
    </div>
  );
};

export default AvailabilityToggle;

