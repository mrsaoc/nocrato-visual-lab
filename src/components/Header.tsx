import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        // Alterado py-4 para py-6 para dar mais "ar" no topo
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="container py-6 flex items-center justify-between">
                <img
                    src={logo}
                    alt="Nocrato Marketing"
                    // Aumentei levemente a logo de h-8 para h-10 para equilibrar com o novo padding
                    className="h-8 md:h-10 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
                <Button
                    className="bg-[#FABE01] hover:bg-[#FABE01]/90 text-black font-bold border-none shadow-sm transition-all duration-300"
                    asChild
                >
                    <a href="#contact">
                        Mais Informações
                    </a>
                </Button>
            </div>
        </header>
    );
};