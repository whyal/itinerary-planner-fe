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
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />

            <input
                placeholder="Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
            />

            <input
                placeholder="Days"
                value={days}
                onChange={(e) => setDays(e.target.value)}
            />

            <button>Submit</button>
        </form>
    );
}
