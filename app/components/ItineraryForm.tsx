"use client";
import React, { useState } from "react";

export default function ItineraryForm() {
    const [destination, setDestination] = useState("");
    const [budget, setBudget] = useState("");
    const [days, setDays] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const trip = {
            destination,
            budget: Number(budget),
            days: Number(days),
        };

        const response = await fetch("http://localhost:8080/api/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <div className="min-h-screen from-slate-50 via-white to-blue-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl border border-gray-100 p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Plan Your Trip
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Tell us about your travel plans and we'll generate a
                        personalized itinerary.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Destination */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Destination
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Tokyo, Japan"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Budget
                        </label>
                        <input
                            type="number"
                            placeholder="1000"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />
                    </div>

                    {/* Days */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Duration
                        </label>
                        <input
                            type="number"
                            placeholder="5"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition-all"
                    >
                        Generate Itinerary
                    </button>
                </form>
            </div>
        </div>
    );
}
