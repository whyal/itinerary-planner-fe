"use client";

import { useState } from "react";
import { Itinerary } from "./types/itinerary";

export default function ItineraryPlanner() {
  const [prompt, setPrompt] = useState("");
  const [conversationId] = useState(() => `session-${Date.now()}`);
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/itinerary/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ conversationId, prompt }),
        },
      );

      if (!response.ok) throw new Error("Failed to generate itinerary");
      const data: Itinerary = await response.json();
      setItinerary(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-6xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-600">
          AI Travel Assistant
        </h1>
        <p className="text-slate-600 mt-2">
          RAG-powered itinerary generation with Spring AI & Next.js
        </p>
      </header>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 bg-white p-4 rounded-xl shadow-md border border-slate-200 flex gap-3"
      >
        <input
          type="text"
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. Plan a 3-day budget trip to Tokyo focusing on food and anime..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Planning..." : "Generate Plan"}
        </button>
      </form>

      {/* Itinerary Display */}
      {itinerary && (
        <div className="space-y-8">
          {/* Header Card */}
          <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold">{itinerary.destination}</h2>
                <p className="text-indigo-200 mt-1">
                  {itinerary.durationDays} Days Plan
                </p>
              </div>
              <span className="bg-indigo-800 text-indigo-100 font-mono text-sm px-3 py-1 rounded-full border border-indigo-700">
                Est. Budget: ${itinerary.estimatedTotalBudget}
              </span>
            </div>
            <p className="mt-4 text-slate-200 border-t border-indigo-800 pt-4">
              {itinerary.overallSummary}
            </p>
          </div>

          {/* Daily Schedule */}
          <div className="space-y-6">
            {itinerary.days.map((day) => (
              <div
                key={day.dayNumber}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b">
                  Day {day.dayNumber}:{" "}
                  <span className="text-indigo-600">{day.theme}</span>
                </h3>

                <div className="space-y-4">
                  {day.activities.map((act, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="w-24 font-mono text-sm text-indigo-600 font-semibold pt-1">
                        {act.timeOfDay}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-slate-900">
                            {act.title}
                          </h4>
                          {act.estimatedCostUsd > 0 && (
                            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                              ${act.estimatedCostUsd}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {act.locationName}
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          {act.description}
                        </p>

                        <div className="flex gap-1 mt-2 flex-wrap">
                          {act.tags?.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
              <h4 className="font-bold text-amber-900 mb-2">
                Local Etiquette Tips
              </h4>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1">
                {itinerary.localEtiquetteTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">
                Recommended Packing
              </h4>
              <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                {itinerary.recommendedPackingItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
