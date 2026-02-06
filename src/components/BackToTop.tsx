import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Monitora a rolagem
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            className={`fixed bottom-8 right-8 z-50 rounded-full bg-[#FABE01] hover:bg-[#FABE01]/90 text-black shadow-lg transition-all duration-300 border border-white/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="h-6 w-6" />
        </Button>
    );
};