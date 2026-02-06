import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Efeito para mudar o fundo do header ao rolar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Links de Navegação
    const navLinks = [
        { name: "Início", href: "#hero" }, // Assumindo que o Hero tem id="hero" ou é o topo
        { name: "Método PAEV", href: "#metodo-paev" },
        { name: "Serviços", href: "#services" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Quem Somos", href: "#team" }, // Linkando para a seção do Time

    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                isScrolled
                    ? "bg-[#111111]/90 backdrop-blur-md border-white/10 py-4 shadow-lg"
                    : "bg-transparent border-transparent py-6"
            }`}
        >
            <div className="container px-4 flex justify-between items-center">

                {/* LOGO */}
                <a href="#" className="relative z-50">
                    <img
                        src={logo}
                        alt="Brício Marketing"
                        // brightness-0 invert para ficar branca, igual ao footer
                        className="h-8 md:h-10 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
                    />
                </a>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-300 hover:text-[#FABE01] transition-colors relative group"
                        >
                            {link.name}
                            {/* Linha dourada animada no hover */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FABE01] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <Button
                        asChild
                        className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-black font-bold rounded-full px-6"
                    >
                        <a href="#contact">Fale Conosco</a>
                    </Button>
                </nav>

                {/* BOTÃO MOBILE (Hambúrguer) */}
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

                {/* MENU MOBILE (Overlay) */}
                <div
                    className={`fixed inset-0 bg-[#111111] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
                        isMobileMenuOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                    {/* Fundo decorativo */}
                    <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#FABE01]/10 rounded-full blur-[100px] pointer-events-none" />

                    <nav className="flex flex-col items-center gap-8 relative z-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)} // Fecha ao clicar
                                className="text-2xl font-bold text-white hover:text-[#FABE01] transition-colors"
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