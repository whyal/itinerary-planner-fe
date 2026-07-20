import { CalendarDays, Sparkles, Send } from "lucide-react";

const steps = [
    {
        icon: CalendarDays,
        kicker: "01 · Set out",
        title: "Set your destination & dates",
        description: "Pick your cities and travel dates to open a blank trip.",
    },
    {
        icon: Sparkles,
        kicker: "02 · Fill in",
        title: "Add spots & auto-optimize",
        description:
            "Drop in attractions — Waypoint groups them geographically and orders your day.",
    },
    {
        icon: Send,
        kicker: "03 · Depart",
        title: "Share & go",
        description:
            "Invite companions with a link, or export the trip to your phone.",
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
        >
            <div className="mb-16 max-w-xl">
                <p className="font-mono text-xs uppercase tracking-widest text-route">
                    The route
                </p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                    From blank page to boarding gate
                </h2>
            </div>

            <div className="relative grid gap-12 sm:grid-cols-3 sm:gap-6">
                {/* connecting route line — desktop only, runs behind the waypoints */}
                <div
                    aria-hidden
                    className="route-line absolute left-0 right-0 top-6 hidden h-px w-full sm:block"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(to right, #6FA8DC 0, #6FA8DC 6px, transparent 6px, transparent 14px)",
                        height: "2px",
                    }}
                />

                {steps.map(({ icon: Icon, kicker, title, description }) => (
                    <div key={title} className="relative">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-signal/40 bg-midnight">
                            <Icon
                                className="h-5 w-5 text-signal"
                                strokeWidth={1.75}
                            />
                        </div>
                        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-route">
                            {kicker}
                        </p>
                        <h3 className="mt-2 font-display text-xl text-white">
                            {title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
