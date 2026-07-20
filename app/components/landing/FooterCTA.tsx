import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
    return (
        <section id="signup" className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32">
            <div className="ticket-stub overflow-hidden rounded-2xl bg-paper px-6 py-12 text-center text-ink sm:px-16 sm:py-16">
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
                    Final call
                </p>
                <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl sm:text-4xl">
                    Your next trip is one itinerary away
                </h2>
                <p className="mx-auto mt-4 max-w-md text-ink/60">
                    Try the demo trip, or claim your spot for early access — no
                    credit card required.
                </p>

                <form
                    id="demo"
                    className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-route focus:outline-none focus:ring-2 focus:ring-route/30"
                    />
                    <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:brightness-125"
                    >
                        Get early access
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                </form>

                <p className="mt-5 font-mono text-[11px] text-ink/40">
                    WPT · ONE WAY · NO EXPIRY
                </p>
            </div>
        </section>
    );
}
