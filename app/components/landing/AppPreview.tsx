"use client";

import { useState } from "react";
import { GripVertical, MapPin, Navigation } from "lucide-react";

type DayPlan = {
  label: string;
  city: string;
  stops: { time: string; place: string; travel: string }[];
};

const days: DayPlan[] = [
  {
    label: "Day 1",
    city: "Kyoto",
    stops: [
      {
        time: "09:00",
        place: "Fushimi Inari Shrine",
        travel: "12 min walk to next",
      },
      { time: "12:30", place: "Gion District", travel: "18 min by taxi" },
      { time: "16:00", place: "Kiyomizu-dera Temple", travel: "" },
    ],
  },
  {
    label: "Day 2",
    city: "Osaka",
    stops: [
      { time: "10:00", place: "Osaka Castle", travel: "25 min by train" },
      {
        time: "13:00",
        place: "Dotonbori",
        travel: "10 min walk to next",
      },
      { time: "19:00", place: "Kuromon Market", travel: "" },
    ],
  },
  {
    label: "Day 3",
    city: "Nara",
    stops: [
      { time: "09:30", place: "Nara Park", travel: "8 min walk to next" },
      {
        time: "11:00",
        place: "Todai-ji Temple",
        travel: "15 min by bus",
      },
      { time: "14:00", place: "Naramachi Old Town", travel: "" },
    ],
  },
];

export default function AppPreview() {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <section id="preview" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="mb-14 max-w-xl">
        <p className="font-mono text-xs uppercase tracking-widest text-route">
          Inside the planner
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Built for the way a trip actually unfolds
        </h2>
        <p className="mt-4 text-mist">
          Switch between days, reorder stops with a drag, and watch the map
          follow every change you make to the timeline.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        {/* Tabbed timeline card */}
        <div className="rounded-2xl border border-white/10 bg-harbor p-6 sm:p-8">
          <div className="flex items-center gap-2 border-b border-white/10 pb-5">
            {days.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition ${
                  i === active
                    ? "bg-route text-midnight"
                    : "text-mist hover:bg-white/5 hover:text-white"
                }`}
              >
                {d.label}
              </button>
            ))}
            <span className="ml-auto hidden font-mono text-xs text-mist sm:block">
              {day.city}
            </span>
          </div>

          <ul className="mt-5 space-y-2">
            {day.stops.map((stop) => (
              <li
                key={stop.place}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-2 py-3 transition hover:border-white/10 hover:bg-white/[0.03]"
              >
                <GripVertical className="h-4 w-4 flex-shrink-0 text-mist/40 transition group-hover:text-signal" />
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-mist">
                      {stop.time}
                    </span>
                    <span className="font-semibold text-white">
                      {stop.place}
                    </span>
                  </div>
                  {stop.travel && (
                    <p className="mt-0.5 pl-0 text-xs text-mist/70">
                      {stop.travel}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-5 font-mono text-[11px] text-mist/60">
            Drag any stop to reorder — travel times recalculate instantly
          </p>
        </div>

        {/* Map snippet card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-harbor p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-mist">
            <Navigation className="h-4 w-4 text-signal" />
            {day.city} · today&apos;s route
          </div>

          <div className="relative mt-5 h-64 overflow-hidden rounded-xl bg-midnight">
            {/* faux map grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "linear-gradient(#6FA8DC 1px, transparent 1px), linear-gradient(90deg, #6FA8DC 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* route path */}
            <svg
              viewBox="0 0 300 220"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <path
                d="M40,170 C90,150 80,90 140,90 S210,50 260,40"
                fill="none"
                stroke="#E8A33D"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {day.stops.map((stop, i) => {
              const positions = [
                { top: "70%", left: "13%" },
                { top: "38%", left: "46%" },
                { top: "17%", left: "86%" },
              ];
              const pos = positions[i] ?? positions[0];
              return (
                <div
                  key={stop.place}
                  className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
                  style={pos}
                >
                  <span className="mb-1 whitespace-nowrap rounded-md bg-midnight px-2 py-1 font-mono text-[10px] text-white shadow-md ring-1 ring-white/10">
                    {stop.time}
                  </span>
                  <MapPin
                    className="h-5 w-5 text-route drop-shadow"
                    fill="#E8A33D"
                    strokeWidth={1}
                  />
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-xs text-mist">
            Every pin links back to its time slot — tap a stop, jump to it on
            the map.
          </p>
        </div>
      </div>
    </section>
  );
}
