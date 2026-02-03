import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";
import { TargetAudience } from "@/components/TargetAudience"; // Novo Componente
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen dark bg-[#111111]">
            <Header />
            <Hero />
            <Ticker />
            <Method />
            <Services /> {/* Preto */}
            <TargetAudience /> {/* Amarelo (Novo) */}
            <Testimonials /> {/* Amarelo (Original) - OBS: Aqui teremos dois amarelos seguidos, resolveremos no final conforme combinado */}
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;