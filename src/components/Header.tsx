import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);

    const navLinks = [
        { name: "Início", href: "#hero", id: "hero" },
        { name: "Método PAEV", href: "#method", id: "method" },
        { name: "Serviços", href: "#services", id: "services" },
        { name: "Depoimentos", href: "#testimonials", id: "testimonials" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Lógica do Fundo
            setIsScrolled(window.scrollY > 50);

            // Lógica do ScrollSpy
            const scrollPosition = window.scrollY + 150;
            for (const link of navLinks) {
                const section = document.getElementById(link.id);
                if (
                    section &&
                    section.offsetTop <= scrollPosition &&
                    (section.offsetTop + section.offsetHeight) > scrollPosition
                ) {
                    setActiveSection(link.id);
                }
            }

            // Lógica da Barra de Progresso
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll) * 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                isScrolled
                    ? "bg-[#111111]/90 backdrop-blur-md border-white/10 py-4 shadow-lg"
                    : "bg-transparent border-transparent py-6"
            }`}
        >
            {/* Barra de Progresso de Leitura */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#FABE01] transition-all duration-100 ease-out z-50" style={{ width: `${scrollProgress}%` }} />

            <div className="container px-4 flex justify-between items-center">
                {/* LOGO */}
                <a href="#hero" className="relative z-50">
                    <img
                        src={logo}
                        alt="Brício Marketing"
                        className="h-8 md:h-10 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
                    />
                </a>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group ${
                                activeSection === link.id
                                    ? "text-[#FABE01]"
                                    : "text-zinc-300 hover:text-[#FABE01]"
                            }`}
                        >
                            {link.name}
                            <span
                                className={`absolute -bottom-1 left-0 h-[2px] bg-[#FABE01] transition-all duration-300 ${
                                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                                }`}
                            />
                        </a>
                    ))}
                    <Button
                        asChild
                        className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-black font-bold rounded-full px-6 shadow-[0_0_15px_rgba(250,190,1,0.3)] hover:shadow-[0_0_25px_rgba(250,190,1,0.5)] transition-all"
                    >
                        <a href="#contact">Fale Conosco</a>
                    </Button>
                </nav>

                {/* BOTÃO MOBILE */}
                <button
                    className="md:hidden text-white z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-[#FABE01]" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

                {/* MENU MOBILE */}
                <div
                    className={`fixed inset-0 bg-[#111111]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
                        isMobileMenuOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                    <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#FABE01]/10 rounded-full blur-[100px] pointer-events-none" />
                    <nav className="flex flex-col items-center gap-8 relative z-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl font-bold transition-colors ${
                                    activeSection === link.id ? "text-[#FABE01]" : "text-white hover:text-[#FABE01]"
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-black font-bold rounded-full px-8 mt-4"
                        >
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Fale Conosco
                            </a>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}; 