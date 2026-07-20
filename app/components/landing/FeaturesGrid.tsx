import { Map, Users, CalendarClock, Download } from "lucide-react";

const features = [
    {
        icon: Map,
        title: "Visual route mapping",
        description:
            "Every stop is plotted automatically, with distance and travel time estimated between each one.",
    },
    {
        icon: Users,
        title: "Real-time collaboration",
        description:
            "Share a single link with travel buddies and watch edits sync as everyone plans together.",
    },
    {
        icon: CalendarClock,
        title: "Smart scheduling",
        description:
            "A drag-and-drop timeline builder that flags conflicts before they turn into a rushed morning.",
    },
    {
        icon: Download,
        title: "Offline access & export",
        description:
            "Download a PDF of your trip or sync it straight to Google Calendar and Apple Wallet.",
    },
];

export default function FeaturesGrid() {
    return (
        <section
            id="features"
            className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
        >
            <div className="mb-14 max-w-xl">
                <p className="font-mono text-xs uppercase tracking-widest text-route">
                    Why Waypoint
                </p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                    Everything a good trip needs, nothing it doesn&apos;t
                </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {features.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="group bg-midnight p-7 transition hover:bg-harbor"
                    >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition group-hover:bg-route/15">
                            <Icon
                                className="h-5 w-5 text-signal transition group-hover:text-route"
                                strokeWidth={1.75}
                            />
                        </div>
                        <h3 className="mt-5 font-display text-lg text-white">
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
