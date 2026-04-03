import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineAccessTime, MdOutlineBusinessCenter } from 'react-icons/md'
import { HiOutlineCreditCard } from 'react-icons/hi'
import { IoMdArrowRoundForward } from 'react-icons/io'

const Riding = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            {/* Main Card */}
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

                {/* Header with route and time */}
                <div className="p-6 pb-4 border-b border-gray-100">
                    <div className="flex items-start gap-3">
                        <div className="mt-1">
                            <IoLocationOutline className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1">FROM</p>
                            <p className="font-semibold text-gray-800">Local Education</p>
                            <p className="text-sm text-gray-600 mt-1">Contemporary Art Museum</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-3">
                        <div className="mt-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-600 ring-4 ring-emerald-50" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1 flex items-center">
                                <MdOutlineAccessTime className="w-3.5 h-3.5 mr-1" /> ETA
                            </p>
                            <p className="font-semibold text-gray-800 text-lg">Arrival 7 min</p>
                        </div>
                    </div>
                </div>

                {/* Location highlights */}
                <div className="px-6 py-3 bg-gray-50/80 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                        <MdOutlineBusinessCenter className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">San Francisco of Modernism</span>
                        <span className="text-gray-400 mx-1">·</span>
                        <span className="text-gray-700">Westfield San Francisco Centre</span>
                        <span className="text-gray-400 mx-1">·</span>
                        <span className="text-gray-700">Children's Creativity Museum</span>
                    </div>
                </div>

                {/* Driver / vehicle info */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                                S
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-800 text-lg">Sarthak</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-mono text-gray-700">
                                        MP04 AB 1234
                                    </span>
                                    <span className="text-sm text-gray-600">Maruti Suzuki Alto</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Address and payment details */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <IoLocationOutline className="w-5 h-5 text-gray-400 mt-0.5" />
                        <div>
                            <p className="text-sm text-gray-500 mb-1">DROP LOCATION</p>
                            <p className="font-medium text-gray-800">562/11-A Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2">
                            <HiOutlineCreditCard className="w-5 h-5 text-emerald-600" />
                            <span className="font-semibold text-gray-800">₹193.20</span>
                        </div>
                        <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                            Cash Cash
                        </span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-2">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-200">
                        Make a Payment
                        <IoMdArrowRoundForward className="w-5 h-5" />
                    </button>
                </div>

                {/* Fine print (optional) */}
                <div className="px-6 pb-4 text-center">
                    <p className="text-xs text-gray-400">Trip fare includes all taxes · Receipt via email</p>
                </div>
            </div>
        </div>
    )
}

export default Riding