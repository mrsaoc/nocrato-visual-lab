import { Button } from "@/components/ui/button";
import { TrendingUp, Users, ShieldCheck, Star } from "lucide-react";

// Imagens
import textureImg from "@/assets/image-removebg-preview.png";
import logoImg from "@/assets/logo.png";

interface HeroProps {
    onInterest?: (interest: string) => void;
}

export const Hero = ({ onInterest }: HeroProps) => {
    const avatarImages = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces",
    ];

    return (
        <section id="hero" className="relative h-[100dvh] flex items-center overflow-hidden bg-[#111111] group/hero">
            
            {/* BACKGROUND ESTÁTICO */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full bg-[#111111]">
                    {/* Textura */}
                    <div
                        className="absolute inset-0 w-full h-full opacity-60"
                        style={{
                            backgroundImage: `url(${textureImg})`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '180px'
                        }}
                    />

                    {/* Gradientes */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/60 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10" />

                    {/* Logo - Deslocada para a direita no desktop e com opacidade reduzida no mobile */}
                    <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-16 lg:pr-32 z-20 pointer-events-none">
                        <img
                            src={logoImg}
                            alt="Logo"
                            className="w-3/4 md:w-full max-w-[280px] md:max-w-[450px] object-contain invert opacity-15 md:opacity-100 drop-shadow-2xl translate-x-0 md:translate-x-16 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>

            {/* --- ELEMENTOS FLUTUANTES (Apenas Desktop) --- */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-20 pointer-events-none hidden md:block max-w-[700px]">
                {/* ROI */}
                <div className="absolute top-[25%] right-[5%] bg-black/40 backdrop-blur-sm border border-[#FABE01]/20 p-3 rounded-lg flex items-center gap-3 animate-float-slow shadow-lg">
                    <div className="bg-[#FABE01]/10 p-2 rounded-md">
                        <TrendingUp className="w-5 h-5 text-[#FABE01]" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg leading-none text-shadow-sm">+10x</p>
                        <p className="text-zinc-300 text-[10px] uppercase tracking-wider font-semibold">Retorno em Vendas</p>
                    </div>
                </div>

                {/* Prova Social */}
                <div className="absolute bottom-[20%] right-[10%] bg-black/40 backdrop-blur-sm border border-white/10 p-3 rounded-lg flex items-center gap-3 animate-float-medium shadow-lg">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <div className="flex -space-x-2 mb-1">
                            {avatarImages.map((avatarUrl, i) => (
                                <img
                                    key={i}
                                    src={avatarUrl}
                                    alt={`Paciente ${i + 1}`}
                                    className="w-6 h-6 rounded-full border border-[#111111] object-cover"
                                />
                            ))}
                            <div className="w-6 h-6 rounded-full bg-[#FABE01] border border-[#111111] flex items-center justify-center text-[8px] font-black text-[#111111] z-10">
                                +1k
                            </div>
                        </div>
                        <p className="text-zinc-300 text-[10px] font-medium pl-1">Pacientes Impactados</p>
                    </div>
                </div>

                {/* Selo */}
                <div className="absolute bottom-[10%] right-[40%] bg-gradient-to-br from-[#FABE01]/50 to-[#DE7928]/50 p-[1px] rounded-full animate-float-fast opacity-80">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3 text-[#FABE01]" />
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Método Validado</span>
                    </div>
                </div>
            </div>

            {/* --- CONTEÚDO DE TEXTO --- */}
            <div className="container relative z-30 h-full flex flex-col justify-center px-4 md:pl-28 md:pr-12 pt-24 md:pt-32 pointer-events-none">
                <div className="w-full max-w-2xl mx-auto md:mx-0 text-center md:text-left pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#FABE01]/30 rounded-full bg-[#FABE01]/10 backdrop-blur-sm shadow-md">
                        <Star className="w-3 h-3 text-[#FABE01] fill-[#FABE01]" />
                        <span className="text-[#FABE01] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                            Marketing de Raiz Forte
                        </span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
                        A equipe de marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FABE01] to-[#DE7928]">certa</span>
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium drop-shadow-md min-h-[5rem] md:min-h-[4rem] flex items-start md:justify-start justify-center">
                        Para aumentar seu engajamento e número de vendas com a resiliência de quem conhece o terreno.
                    </p>
                    
                    <Button
                        size="lg"
                        className="w-full md:w-auto bg-[#FABE01] hover:bg-[#FABE01]/90 text-[#111111] font-bold px-8 py-6 text-lg rounded-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(250,190,1,0.3)] hover:shadow-[0_0_30px_rgba(250,190,1,0.5)]"
                        asChild
                    >
                        <a
                            href="http://wa.me/5513991187759"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Fale com um especialista
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};