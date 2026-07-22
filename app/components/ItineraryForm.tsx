"use client";

import { useState, FormEvent, ChangeEvent } from "react";

// Matches the Spring AI Java Record structure
interface ItineraryResponse {
  destination: string;
  days: Array<{
    dayNumber: number;
    theme: string;
    activities: Array<{
      time: string;
      location: string;
      description: string;
    }>;
  }>;
}

export default function ItineraryForm() {
  // Discrete state fields for clean user input
  const [formData, setFormData] = useState({
    destination: "Osaka",
    days: 3,
    pace: "Moderate",
    interests: "Local food, historical sights",
    budget: "Mid-range",
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryResponse | null>(null);

  // 1. Formats discrete inputs into the compact key-value prompt
  const formatToKeyValuePrompt = (): string => {
    return `Destination: ${formData.destination}
Days: ${formData.days}
Pace: ${formData.pace}
Interests: ${formData.interests}
Budget: ${formData.budget}

Generate a ${formData.days}-day itinerary matching these constraints.`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setItinerary(null);

    // 2. Wrap the formatted string into a lightweight payload
    const payload = {
      prompt: formatToKeyValuePrompt(),
      conversationId: "session-uuid-here", // Match exact Java record field names
    };
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/itinerary/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data: ItineraryResponse = await response.json();
      setItinerary(data);
    } catch (error) {
      console.error("Failed to generate itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Plan Your Trip</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Days</label>
            <input
              type="number"
              name="days"
              min="1"
              max="7"
              value={formData.days}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Pace</label>
            <select
              name="pace"
              value={formData.pace}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="Relaxed">Relaxed</option>
              <option value="Moderate">Moderate</option>
              <option value="Fast-paced">Fast-paced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Interests (comma-separated)
          </label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="Budget">Budget</option>
            <option value="Mid-range">Mid-range</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded font-medium hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Generating Itinerary..." : "Generate Itinerary"}
        </button>
      </form>

      {/* Render the JSON response cleanly */}
      {itinerary && (
        <div className="mt-8 space-y-6">
          <h3 className="text-lg font-bold">
            Your {itinerary.destination} Itinerary
          </h3>
          {itinerary.days.map((day) => (
            <div
              key={day.dayNumber}
              className="border-l-4 border-blue-500 pl-4 py-1"
            >
              <h4 className="font-semibold">
                Day {day.dayNumber}: {day.theme}
              </h4>
              <ul className="mt-2 space-y-2 text-sm">
                {day.activities.map((act, index) => (
                  <li key={index}>
                    <span className="font-medium text-gray-600">
                      {act.time}
                    </span>{" "}
                    - <strong className="text-gray-900">{act.location}</strong>:{" "}
                    {act.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
