import { Compass } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-mist sm:flex-row">
                <div className="flex items-center gap-2">
                    <Compass
                        className="h-4 w-4 text-route"
                        strokeWidth={1.75}
                    />
                    <span className="font-display text-white">Waypoint</span>
                </div>
                <p className="font-mono text-xs text-mist/60">
                    &copy; {new Date().getFullYear()} Waypoint. Plan less,
                    travel more.
                </p>
            </div>
        </footer>
    );
}
