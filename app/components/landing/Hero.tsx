import { ArrowRight, MapPin, PlaneTakeoff } from "lucide-react";

const stops = [
    { time: "09:00", place: "Kyoto Station", detail: "Pick up JR pass" },
    {
        time: "10:30",
        place: "Fushimi Inari Shrine",
        detail: "1,000 torii gates",
    },
    { time: "15:00", place: "Gion District", detail: "Tea house & lanterns" },
];

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-20 sm:pt-28">
            {/* ambient route line, top-right */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] rounded-full bg-signal/10 blur-3xl"
            />

            <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 lg:grid-cols-[1.05fr_1fr] lg:pb-32">
                {/* Copy */}
                <div>
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-mist">
                        <PlaneTakeoff className="h-3.5 w-3.5 text-route" />
                        Boarding: your next trip
                    </p>

                    <h1 className="font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                        Plan your next trip in{" "}
                        <span className="italic text-route">minutes</span>, not
                        hours.
                    </h1>

                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
                        Waypoint turns a list of places into a real itinerary —
                        timed, mapped, and grouped by distance — so you spend
                        less time in tabs and more time deciding what to
                        actually do.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href="#signup"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-route px-6 py-3.5 font-semibold text-midnight transition hover:brightness-110"
                        >
                            Start Planning — Free
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </a>
                        <a
                            href="#demo"
                            className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm font-medium text-mist underline decoration-white/20 underline-offset-4 transition hover:text-white"
                        >
                            Explore demo itinerary
                        </a>
                    </div>

                    <p className="mt-8 font-mono text-xs text-mist/70">
                        No credit card · Free plan covers up to 3 trips
                    </p>
                </div>

                {/* Visual anchor: mock itinerary card */}
                <div className="relative mx-auto w-full max-w-sm lg:rotate-2">
                    <div className="ticket-stub rounded-2xl bg-paper p-6 text-ink shadow-2xl shadow-black/40">
                        <div className="flex items-center justify-between border-b border-dashed border-ink/20 pb-4">
                            <div>
                                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                                    Trip · Kyoto, Japan
                                </p>
                                <p className="font-display text-xl">Day 1</p>
                            </div>
                            <MapPin
                                className="h-5 w-5 text-route"
                                strokeWidth={1.75}
                            />
                        </div>

                        <ol className="mt-5 space-y-0">
                            {stops.map((stop, i) => (
                                <li key={stop.place} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-route" />
                                        {i < stops.length - 1 && (
                                            <span className="my-1 w-px flex-1 bg-ink/15" />
                                        )}
                                    </div>
                                    <div className="pb-6">
                                        <p className="font-mono text-xs text-ink/50">
                                            {stop.time}
                                        </p>
                                        <p className="font-semibold leading-tight">
                                            {stop.place}
                                        </p>
                                        <p className="text-sm text-ink/60">
                                            {stop.detail}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-1 flex items-center justify-between border-t border-dashed border-ink/20 pt-4 font-mono text-[11px] text-ink/50">
                            <span>3 stops · 6.2 km total</span>
                            <span>WPT-01</span>
                        </div>
                    </div>

                    {/* subtle floating chip */}
                    <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-harbor px-4 py-2.5 font-mono text-xs text-signal shadow-lg sm:block">
                        + Fushimi Inari added
                    </div>
                </div>
            </div>
        </section>
    );
}
