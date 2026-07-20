import { Compass } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="flex items-center gap-2">
                    <Compass
                        className="h-5 w-5 text-route"
                        strokeWidth={1.75}
                    />
                    <span className="font-display text-lg tracking-tight text-white">
                        Waypoint
                    </span>
                </a>

                <nav className="hidden items-center gap-8 text-sm text-mist md:flex">
                    <a href="#preview" className="transition hover:text-white">
                        Product
                    </a>
                    <a href="#features" className="transition hover:text-white">
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className="transition hover:text-white"
                    >
                        How it works
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#demo"
                        className="hidden text-sm text-mist transition hover:text-white sm:block"
                    >
                        Explore demo
                    </a>
                    <a
                        href="#signup"
                        className="rounded-full bg-route px-4 py-2 text-sm font-semibold text-midnight transition hover:brightness-110"
                    >
                        Start planning
                    </a>
                </div>
            </div>
        </header>
    );
}
