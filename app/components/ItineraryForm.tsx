"use client";
import React, { useState } from "react";

export default function ItineraryForm() {
    const [formData, setFormData] = useState({
        destination: "Tokyo",
        startDate: "2026-12-15",
        endDate: "2026-12-20",
        budget: "2000",
        interests: {
            food: true,
            museums: true,
            anime: true,
        },
        additionalRequests:
            "I'd like to visit hidden cafes and avoid tourist traps.\nPlease leave one afternoon free for shopping.",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Itinerary Request:", formData);
    };

    return (
        <div className="w-full mx-auto my-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 text-white">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Plan Your Trip
                </h2>
                <p className="text-indigo-100 text-sm mt-1">
                    Review and customize your travel preferences.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Destination */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Destination
                    </label>
                    <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                destination: e.target.value,
                            })
                        }
                        className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white transition"
                        placeholder="Where to?"
                        required
                    />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    startDate: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                            End Date
                        </label>
                        <input
                            type="date"
                            value={formData.endDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    endDate: e.target.value,
                                })
                            }
                            className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white transition"
                            required
                        />
                    </div>
                </div>

                {/* Budget */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Budget (USD)
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium text-sm">
                            $
                        </span>
                        <input
                            type="number"
                            value={formData.budget}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    budget: e.target.value,
                                })
                            }
                            className="w-full pl-8 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white transition"
                            placeholder="Total Budget"
                            min="0"
                            required
                        />
                    </div>
                </div>

                {/* Interests */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                        Interests
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {/* Food */}
                        <label
                            className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition ${formData.interests.food ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interests.food}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        interests: {
                                            ...formData.interests,
                                            food: e.target.checked,
                                        },
                                    })
                                }
                                className="rounded text-indigo-600 focus:ring-indigo-500 border-zinc-300"
                            />
                            <span className="text-sm font-medium">Food</span>
                        </label>

                        {/* Museums */}
                        <label
                            className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition ${formData.interests.museums ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interests.museums}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        interests: {
                                            ...formData.interests,
                                            museums: e.target.checked,
                                        },
                                    })
                                }
                                className="rounded text-indigo-600 focus:ring-indigo-500 border-zinc-300"
                            />
                            <span className="text-sm font-medium">Museums</span>
                        </label>

                        {/* Anime */}
                        <label
                            className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition ${formData.interests.anime ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400" : "border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
                        >
                            <input
                                type="checkbox"
                                checked={formData.interests.anime}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        interests: {
                                            ...formData.interests,
                                            anime: e.target.checked,
                                        },
                                    })
                                }
                                className="rounded text-indigo-600 focus:ring-indigo-500 border-zinc-300"
                            />
                            <span className="text-sm font-medium">Anime</span>
                        </label>
                    </div>
                </div>

                {/* Additional Requests */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                        Additional Requests
                    </label>
                    <textarea
                        value={formData.additionalRequests}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                additionalRequests: e.target.value,
                            })
                        }
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white transition resize-none text-sm leading-relaxed"
                        placeholder="Any specific requests, pacing preferences, or dietary requirements?"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all transform active:scale-[0.98] duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Generate Itinerary
                </button>
            </form>
        </div>
    );
}
