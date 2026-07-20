import AppPreview from "./components/landing/AppPreview";
import FeaturesGrid from "./components/landing/FeaturesGrid";
import Footer from "./components/landing/Footer";
import FooterCTA from "./components/landing/FooterCTA";
import Hero from "./components/landing/Hero";
import HowItWorks from "./components/landing/HowItWorks";
import Navbar from "./components/landing/Navbar";

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
