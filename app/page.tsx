import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AppPreview from "@/components/landing/AppPreview";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import FooterCTA from "@/components/landing/FooterCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-midnight font-body text-white antialiased">
            <Navbar />
            <Hero />
            <AppPreview />
            <FeaturesGrid />
            <HowItWorks />
            <FooterCTA />
            <Footer />
        </main>
    );
}
