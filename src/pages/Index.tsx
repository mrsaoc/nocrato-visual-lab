import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";
import { TargetAudience } from "@/components/TargetAudience";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Header />

            <main>
                <Hero />
                <Ticker />
                <Method />
                <Services />
                <TargetAudience />
                <Testimonials />
                <Team />
                <Contact />
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Index;