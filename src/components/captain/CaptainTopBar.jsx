import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const CaptainTopBar = ({ captainName = "Captain", isOnline, onLogout }) => {
  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-semibold">
            U
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">
              {captainName}
            </p>
            <div className="mt-0.5 flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${isOnline
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                    : "bg-slate-50 text-slate-600 ring-1 ring-slate-100"
                  }`}
              >
                {isOnline ? "Online" : "Offline"}
              </span>
              <span className="text-xs text-slate-500">Driver</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <FaSignOutAlt className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default CaptainTopBar;

