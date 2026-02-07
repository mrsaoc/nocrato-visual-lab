import { useState } from "react";
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
    // Estado único para capturar o interesse de QUALQUER lugar da landing page
    const [interestedService, setInterestedService] = useState<string>("");

    // Função universal de captura de interesse e scroll
    const handleInterest = (interest: string) => {
        setInterestedService(interest);
        // Pequeno delay para garantir que o estado atualizou antes do scroll (opcional, mas seguro)
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 50);
    };

    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Header />

            <main>
                {/* O Hero agora passa o slide atual como interesse */}
                <Hero onInterest={handleInterest} />

                {/* Ticker geralmente tem botões ou logos, se tiver CTA, passe a prop */}
                <Ticker />

                {/* Método PAEV: Botão "Quero conhecer o método" ativa isso */}
                <Method onInterest={() => handleInterest("Método PAEV")} />

                {/* Serviços: Cada card passa seu próprio título */}
                <Services onSelectService={handleInterest} />

                <TargetAudience />

                <Testimonials />

                <Team />

                {/* O formulário recebe o interesse final para exibir e enviar */}
                <Contact interestedService={interestedService} />
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default Index;